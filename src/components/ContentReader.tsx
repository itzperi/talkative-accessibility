
import React, { useEffect, useRef } from 'react';
import { useAssistant } from '@/context/AssistantContext';
import { Volume2, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ContentReaderProps = {
  contentSelector?: string;
  autoRead?: boolean;
  title?: string;
};

const ContentReader: React.FC<ContentReaderProps> = ({
  contentSelector = '.content-readable',
  autoRead = false,
  title,
}) => {
  const { speak, stopSpeaking, isSpeaking } = useAssistant();
  const contentRef = useRef<HTMLDivElement>(null);
  const hasReadRef = useRef(false);

  // Function to read the content
  const readContent = () => {
    if (!contentRef.current) return;
    
    // Find all readable content elements
    const elements = contentRef.current.querySelectorAll(contentSelector);
    
    if (elements.length === 0) {
      speak("No readable content found on this page.");
      return;
    }
    
    // Start with title if provided
    let textToRead = title ? `${title}. ` : '';
    
    // Concatenate all text content
    elements.forEach(element => {
      textToRead += element.textContent + '. ';
    });
    
    // Clean up the text a bit
    textToRead = textToRead
      .replace(/\s+/g, ' ')
      .replace(/\.\s+\./g, '.')
      .trim();
    
    speak(textToRead);
  };

  // Auto-read on mount if enabled
  useEffect(() => {
    if (autoRead && !hasReadRef.current) {
      // Small delay to ensure content is rendered
      const timeoutId = setTimeout(() => {
        readContent();
        hasReadRef.current = true;
      }, 1000);
      
      return () => clearTimeout(timeoutId);
    }
  }, [autoRead]);

  return (
    <div className="flex items-center gap-2 mb-4" ref={contentRef}>
      {isSpeaking ? (
        <Button 
          variant="outline"
          size="sm" 
          onClick={stopSpeaking}
          className="flex items-center gap-2 shadow-soft"
          aria-label="Pause reading"
        >
          <Pause className="h-4 w-4" />
          <span>Pause</span>
        </Button>
      ) : (
        <Button 
          variant="outline"
          size="sm" 
          onClick={readContent}
          className="flex items-center gap-2 shadow-soft"
          aria-label="Read content aloud"
        >
          <Volume2 className="h-4 w-4" />
          <span>Read Aloud</span>
        </Button>
      )}
    </div>
  );
};

export default ContentReader;
