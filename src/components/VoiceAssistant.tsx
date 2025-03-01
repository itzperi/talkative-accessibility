
import React from 'react';
import { useAssistant } from '@/context/AssistantContext';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

type VoiceAssistantProps = {
  className?: string;
};

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ className = '' }) => {
  const { isListening, isSpeaking, toggleListening, stopSpeaking, recognized, assistantMessage } = useAssistant();

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 ${className}`}>
      {/* Assistant status message */}
      <div className="glass px-4 py-3 rounded-full shadow-soft animate-fade-in max-w-xs">
        <span className="text-sm font-medium">
          {assistantMessage || "OLabs Assistant ready"}
        </span>
      </div>
      
      {/* Recognized speech */}
      {recognized && isListening && (
        <div className="glass px-4 py-2 rounded-full shadow-soft animate-fade-in max-w-xs">
          <p className="text-sm italic opacity-75">{recognized}</p>
        </div>
      )}
      
      {/* Voice waves animation when speaking */}
      {isSpeaking && (
        <div className="glass px-4 py-3 rounded-full shadow-soft animate-fade-in flex items-center justify-center">
          <div className="flex items-end h-6 px-2">
            <div className="voice-wave"></div>
            <div className="voice-wave"></div>
            <div className="voice-wave"></div>
            <div className="voice-wave"></div>
            <div className="voice-wave"></div>
          </div>
        </div>
      )}
      
      {/* Control buttons */}
      <div className="flex items-center gap-3">
        {isSpeaking && (
          <Button
            variant="outline"
            size="icon"
            onClick={stopSpeaking}
            className="glass h-12 w-12 rounded-full shadow-soft transition-all-200 hover:scale-105"
            aria-label="Stop speaking"
          >
            <VolumeX className="h-5 w-5" />
          </Button>
        )}
        
        <Button
          variant={isListening ? "default" : "outline"}
          size="icon"
          onClick={toggleListening}
          className={`glass h-14 w-14 rounded-full shadow-soft transition-all-200 hover:scale-105 ${
            isListening ? 'bg-primary text-primary-foreground assistant-pulse' : ''
          }`}
          aria-label={isListening ? "Turn off voice commands" : "Turn on voice commands"}
        >
          {isListening ? (
            <Mic className="h-6 w-6" />
          ) : (
            <MicOff className="h-6 w-6" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default VoiceAssistant;
