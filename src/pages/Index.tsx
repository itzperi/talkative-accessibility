
import React from 'react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import ContentReader from '@/components/ContentReader';
import { useAssistant } from '@/context/AssistantContext';
import { Mic, Volume2, BookOpen, AtomIcon, Beaker, Calculator, Computer, Leaf, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const { toggleListening } = useAssistant();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <ContentReader autoRead={false} title="Welcome to OLabs" />
        
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-soft">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-1">
                Welcome
              </span>
              <h1 className="text-4xl font-bold tracking-tight content-readable bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Welcome to OLabs
              </h1>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground mb-6 content-readable">
            An accessible learning platform with voice navigation capabilities.
            Say "Open Physics" to explore our physics content or use the controls below.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <Button onClick={toggleListening} className="flex items-center gap-2 shadow-soft bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 hover:opacity-90">
              <Mic className="h-4 w-4" />
              <span>Activate Voice Commands</span>
            </Button>
            
            <Link to="/physics">
              <Button variant="outline" className="flex items-center gap-2 shadow-soft dark:bg-black/50 dark:text-white dark:border-white/10">
                <BookOpen className="h-4 w-4" />
                <span>Explore Physics</span>
              </Button>
            </Link>
          </div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="glass rounded-lg p-6 shadow-soft dark:bg-gray-800/30 backdrop-blur-lg border border-white/10 dark:border-gray-700/50 cool-gradient-1">
            <Volume2 className="h-8 w-8 mb-3 text-primary" />
            <h2 className="text-xl font-bold mb-2 content-readable">Voice Navigation</h2>
            <p className="text-muted-foreground content-readable">
              Navigate through the site using natural voice commands. Say "Open Physics" or "Go to Home"
              to move between pages.
            </p>
          </div>
          
          <div className="glass rounded-lg p-6 shadow-soft dark:bg-gray-800/30 backdrop-blur-lg border border-white/10 dark:border-gray-700/50 cool-gradient-2">
            <BookOpen className="h-8 w-8 mb-3 text-primary" />
            <h2 className="text-xl font-bold mb-2 content-readable">Content Reading</h2>
            <p className="text-muted-foreground content-readable">
              All content can be read aloud automatically. Navigate to any page and the
              assistant will read the content for you.
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 content-readable">Available Subjects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/physics" className="glass rounded-lg p-4 shadow-soft transition-all hover:scale-105 dark:bg-gray-800/30 backdrop-blur-lg border border-white/10 dark:border-gray-700/50 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-2">
                <AtomIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="font-bold">Physics</h3>
              <p className="text-xs text-muted-foreground">Available</p>
            </Link>
            
            <Link to="/chemistry" className="glass rounded-lg p-4 shadow-soft transition-all hover:scale-105 dark:bg-gray-800/30 backdrop-blur-lg border border-white/10 dark:border-gray-700/50 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center mb-2">
                <Beaker className="h-6 w-6 text-green-500 dark:text-green-400" />
              </div>
              <h3 className="font-bold">Chemistry</h3>
              <p className="text-xs text-muted-foreground">Coming Soon</p>
            </Link>
            
            <Link to="/math" className="glass rounded-lg p-4 shadow-soft transition-all hover:scale-105 dark:bg-gray-800/30 backdrop-blur-lg border border-white/10 dark:border-gray-700/50 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-2">
                <Calculator className="h-6 w-6 text-purple-500 dark:text-purple-400" />
              </div>
              <h3 className="font-bold">Mathematics</h3>
              <p className="text-xs text-muted-foreground">Coming Soon</p>
            </Link>
            
            <Link to="/computer-science" className="glass rounded-lg p-4 shadow-soft transition-all hover:scale-105 dark:bg-gray-800/30 backdrop-blur-lg border border-white/10 dark:border-gray-700/50 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center mb-2">
                <Computer className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="font-bold">Computer Science</h3>
              <p className="text-xs text-muted-foreground">Coming Soon</p>
            </Link>
            
            <Link to="/biology" className="glass rounded-lg p-4 shadow-soft transition-all hover:scale-105 dark:bg-gray-800/30 backdrop-blur-lg border border-white/10 dark:border-gray-700/50 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-2">
                <Leaf className="h-6 w-6 text-green-500 dark:text-green-400" />
              </div>
              <h3 className="font-bold">Biology</h3>
              <p className="text-xs text-muted-foreground">Coming Soon</p>
            </Link>
          </div>
        </section>
        
        <section className="mb-12 glass rounded-lg p-6 dark:bg-gray-800/30 backdrop-blur-lg border border-white/10 dark:border-gray-700/50">
          <h2 className="text-2xl font-bold mb-4 content-readable">How to Use Voice Commands</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">1</span>
              <p className="content-readable">Click the microphone button or say "Activate voice commands"</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">2</span>
              <p className="content-readable">Say commands like "Open Physics" or "Go to Home"</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">3</span>
              <p className="content-readable">The assistant will navigate and read content automatically</p>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
