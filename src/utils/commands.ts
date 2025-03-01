
// This file contains constants and utilities for voice commands

// Command keywords that the assistant will recognize
export const COMMANDS = {
  // Navigation commands
  OPEN_PHYSICS: ['open physics', 'go to physics', 'physics section'],
  CHAPTER_ONE: ['chapter 1', 'chapter one', 'first chapter'],
  GO_HOME: ['go to home', 'go home', 'home page', 'back to home'],
  
  // Control commands
  STOP_SPEAKING: ['stop', 'stop speaking', 'be quiet', 'silence'],
  HELP: ['help', 'what can you do', 'show commands', 'assist me'],
};

// Helper function to check if a user's speech contains any of the specified commands
export const matchCommand = (speech: string, commands: string[]): boolean => {
  speech = speech.toLowerCase().trim();
  return commands.some(command => speech.includes(command));
};

// Welcome messages that can be randomly selected
export const WELCOME_MESSAGES = [
  "Hello, welcome to OLabs! You can navigate using voice commands.",
  "Welcome to OLabs. I'm here to help you navigate with voice commands.",
  "Welcome to OLabs' accessible interface. Try saying 'Open Physics' to get started.",
];

// Get a random welcome message
export const getRandomWelcomeMessage = (): string => {
  const index = Math.floor(Math.random() * WELCOME_MESSAGES.length);
  return WELCOME_MESSAGES[index];
};

// Helper function to get clean text content from an HTML element
export const getCleanTextContent = (element: Element): string => {
  // Clone the element to avoid modifying the original
  const clone = element.cloneNode(true) as Element;
  
  // Remove any script tags to avoid reading JavaScript code
  const scripts = clone.querySelectorAll('script');
  scripts.forEach(script => script.remove());
  
  // Get the text content and clean it up
  let text = clone.textContent || '';
  
  // Replace multiple spaces with a single space
  text = text.replace(/\s+/g, ' ');
  
  // Remove leading/trailing spaces
  text = text.trim();
  
  return text;
};
