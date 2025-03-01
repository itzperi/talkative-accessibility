
import React from 'react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import ContentReader from '@/components/ContentReader';
import { useAssistant } from '@/context/AssistantContext';
import { Mic, Volume2, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const { toggleListening } = useAssistant();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <ContentReader autoRead={false} title="Welcome to OLabs" />
        
        <section className="mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-2">
            Welcome
          </span>
          <h1 className="text-4xl font-bold tracking-tight mb-4 content-readable">
            Welcome to OLabs
          </h1>
          <p className="text-lg text-muted-foreground mb-6 content-readable">
            An accessible learning platform with voice navigation capabilities.
            Say "Open Physics" to explore our physics content or use the controls below.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <Button onClick={toggleListening} className="flex items-center gap-2 shadow-soft">
              <Mic className="h-4 w-4" />
              <span>Activate Voice Commands</span>
            </Button>
            
            <Link to="/physics">
              <Button variant="outline" className="flex items-center gap-2 shadow-soft">
                <BookOpen className="h-4 w-4" />
                <span>Explore Physics</span>
              </Button>
            </Link>
          </div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="glass rounded-lg p-6 shadow-soft">
            <Volume2 className="h-8 w-8 mb-3 text-primary" />
            <h2 className="text-xl font-bold mb-2 content-readable">Voice Navigation</h2>
            <p className="text-muted-foreground content-readable">
              Navigate through the site using natural voice commands. Say "Open Physics" or "Go to Home"
              to move between pages.
            </p>
          </div>
          
          <div className="glass rounded-lg p-6 shadow-soft">
            <BookOpen className="h-8 w-8 mb-3 text-primary" />
            <h2 className="text-xl font-bold mb-2 content-readable">Content Reading</h2>
            <p className="text-muted-foreground content-readable">
              All content can be read aloud automatically. Navigate to any page and the
              assistant will read the content for you.
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 content-readable">How to Use Voice Commands</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs">1</span>
              <p className="content-readable">Click the microphone button or say "Activate voice commands"</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs">2</span>
              <p className="content-readable">Say commands like "Open Physics" or "Go to Home"</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs">3</span>
              <p className="content-readable">The assistant will navigate and read content automatically</p>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
