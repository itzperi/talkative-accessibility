
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

type AssistantContextType = {
  isListening: boolean;
  isSpeaking: boolean;
  toggleListening: () => void;
  speak: (text: string) => void;
  stopSpeaking: () => void;
  recognized: string;
  assistantMessage: string;
};

const AssistantContext = createContext<AssistantContextType | undefined>(undefined);

export const useAssistant = () => {
  const context = useContext(AssistantContext);
  if (!context) {
    throw new Error('useAssistant must be used within an AssistantProvider');
  }
  return context;
};

type AssistantProviderProps = {
  children: React.ReactNode;
};

export const AssistantProvider: React.FC<AssistantProviderProps> = ({ children }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [recognized, setRecognized] = useState('');
  const [assistantMessage, setAssistantMessage] = useState('');
  
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  // Initialize speech recognition and synthesis
  useEffect(() => {
    // Check if the browser supports speech recognition
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true; // Set to true for faster response
      recognitionRef.current.lang = 'en-US';
      
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
        console.log('Recognized: ', transcript);
        setRecognized(transcript);
        
        // Process final results immediately
        if (event.results[event.results.length - 1].isFinal) {
          handleCommand(transcript);
        } else {
          // For interim results, check for specific commands that we can respond to immediately
          checkForQuickCommands(transcript);
        }
      };
      
      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        if (event.error === 'not-allowed') {
          toast({
            title: "Microphone access denied",
            description: "Please allow microphone access to use voice commands",
            variant: "destructive",
          });
        }
        setIsListening(false);
      };
      
      recognitionRef.current.onend = () => {
        if (isListening) {
          recognitionRef.current?.start();
        }
      };
    } else {
      toast({
        title: "Speech Recognition Not Supported",
        description: "Your browser doesn't support speech recognition",
        variant: "destructive",
      });
    }
    
    // Initialize speech synthesis
    if ('speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    } else {
      toast({
        title: "Speech Synthesis Not Supported",
        description: "Your browser doesn't support speech synthesis",
        variant: "destructive",
      });
    }
    
    // Greeting when component mounts
    const timeoutId = setTimeout(() => {
      speak("Hello, welcome to OLabs! You can navigate using voice commands.");
    }, 1500);
    
    return () => {
      clearTimeout(timeoutId);
      stopSpeaking();
      if (recognitionRef.current && isListening) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Quick command checking for interim results
  const checkForQuickCommands = (command: string) => {
    // Check for simple navigation commands
    if (command.includes('home') || command.includes('go home')) {
      navigate('/');
      setAssistantMessage("Going to home page");
    }
    else if (command.includes('physics')) {
      navigate('/physics');
      setAssistantMessage("Going to physics page");
    }
    else if (command.includes('chemistry')) {
      navigate('/chemistry');
      setAssistantMessage("Going to chemistry page");
    }
    else if (command.includes('math')) {
      navigate('/math');
      setAssistantMessage("Going to math page");
    }
    else if (command.includes('computer') || command.includes('computer science')) {
      navigate('/computer-science');
      setAssistantMessage("Going to computer science page");
    }
    else if (command.includes('biology')) {
      navigate('/biology');
      setAssistantMessage("Going to biology page");
    }
    else if (command.includes('stop speaking') || command.includes('stop reading')) {
      stopSpeaking();
      setAssistantMessage("Stopped speaking");
    }
  };

  // Handle command logic
  const handleCommand = (command: string) => {
    if (command.includes('open physics') || command.includes('go to physics')) {
      navigate('/physics');
      setAssistantMessage("You're now in Physics. Say 'Chapter 1' to open Chapter 1.");
      speak("You're now in Physics. Say 'Chapter 1' to open Chapter 1.");
    } 
    else if (command.includes('chapter 1') || command.includes('chapter one')) {
      navigate('/physics/chapter-1');
      setAssistantMessage("Opening Chapter 1");
      speak("Opening Chapter 1. I'll read the content for you.");
    }
    else if (command.includes('go to home') || command.includes('go home') || command.includes('home page')) {
      navigate('/');
      setAssistantMessage("You're now at the home page");
      speak("You're now at the home page.");
    }
    else if (command.includes('chemistry') || command.includes('go to chemistry')) {
      navigate('/chemistry');
      setAssistantMessage("You're now in Chemistry");
      speak("You're now in Chemistry. This content is coming soon.");
    }
    else if (command.includes('math') || command.includes('go to math')) {
      navigate('/math');
      setAssistantMessage("You're now in Math");
      speak("You're now in Math. This content is coming soon.");
    }
    else if (command.includes('computer') || command.includes('computer science')) {
      navigate('/computer-science');
      setAssistantMessage("You're now in Computer Science");
      speak("You're now in Computer Science. This content is coming soon.");
    }
    else if (command.includes('biology') || command.includes('go to biology')) {
      navigate('/biology');
      setAssistantMessage("You're now in Biology");
      speak("You're now in Biology. This content is coming soon.");
    }
    else if (command.includes('stop') || command.includes('stop speaking')) {
      stopSpeaking();
      setAssistantMessage("Stopped speaking");
    }
    else if (command.includes('help') || command.includes('what can you do')) {
      const helpText = "You can say: Open Physics, Chemistry, Math, Computer Science, Biology, Chapter 1, Go to Home, Stop Speaking, or Help.";
      setAssistantMessage(helpText);
      speak(helpText);
    }
  };

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      setAssistantMessage("Voice commands paused");
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        setAssistantMessage("I'm listening...");
        speak("Voice commands activated. What would you like to do?", true);
      } catch (error) {
        console.error('Error starting speech recognition:', error);
        toast({
          title: "Error",
          description: "Couldn't start speech recognition",
          variant: "destructive",
        });
      }
    }
  };

  const speak = (text: string, isShort = false) => {
    if (!synthRef.current) return;
    
    // Cancel any ongoing speech
    stopSpeaking();
    
    // Create a new utterance
    utteranceRef.current = new SpeechSynthesisUtterance(text);
    utteranceRef.current.rate = 1;
    utteranceRef.current.pitch = 1;
    utteranceRef.current.volume = 1;
    
    // Find a better voice if available
    const voices = synthRef.current.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.name.includes('Google') || voice.name.includes('Female') || voice.name.includes('US English')
    );
    
    if (preferredVoice) {
      utteranceRef.current.voice = preferredVoice;
    }
    
    utteranceRef.current.onstart = () => setIsSpeaking(true);
    utteranceRef.current.onend = () => setIsSpeaking(false);
    utteranceRef.current.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      setIsSpeaking(false);
    };
    
    synthRef.current.speak(utteranceRef.current);
    
    // For short messages, update the assistant message
    if (isShort) {
      setAssistantMessage(text);
    }
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <AssistantContext.Provider
      value={{
        isListening,
        isSpeaking,
        toggleListening,
        speak,
        stopSpeaking,
        recognized,
        assistantMessage,
      }}
    >
      {children}
    </AssistantContext.Provider>
  );
};
