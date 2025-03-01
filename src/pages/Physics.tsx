
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ContentReader from '@/components/ContentReader';
import { ArrowRight } from 'lucide-react';

const Physics = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <ContentReader autoRead={true} title="Physics Learning Center" />
        
        <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-2">
          Learning Path
        </span>
        <h1 className="text-4xl font-bold tracking-tight mb-4 content-readable">
          Physics Learning Center
        </h1>
        <p className="text-lg text-muted-foreground mb-8 content-readable">
          Explore our physics chapters. You can navigate using voice commands by saying "Chapter 1" to open specific content.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link to="/physics/chapter-1" className="glass rounded-lg p-6 shadow-soft transition-all-200 hover:scale-[1.02] hover:shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold mb-2 content-readable">Chapter 1</h2>
                <p className="text-muted-foreground content-readable">Introduction to Mechanics</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span className="content-readable">Newton's Laws of Motion</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span className="content-readable">Conservation of Energy</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span className="content-readable">Momentum</span>
                  </li>
                </ul>
              </div>
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>
          </Link>
          
          <div className="glass rounded-lg p-6 shadow-soft opacity-75">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold mb-2 content-readable">Chapter 2</h2>
                <p className="text-muted-foreground content-readable">Thermodynamics</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span className="content-readable">Laws of Thermodynamics</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span className="content-readable">Heat Transfer</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span className="content-readable">Entropy</span>
                  </li>
                </ul>
              </div>
              <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">Coming Soon</span>
            </div>
          </div>
        </div>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 content-readable">Voice Navigation Guide</h2>
          <p className="mb-4 content-readable">
            You can navigate through the chapters using voice commands:
          </p>
          <div className="glass rounded-lg p-4 shadow-soft mb-4">
            <p className="font-medium content-readable">"Chapter 1" - Opens Chapter 1: Introduction to Mechanics</p>
          </div>
          <div className="glass rounded-lg p-4 shadow-soft">
            <p className="font-medium content-readable">"Go to Home" - Returns to the home page</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Physics;
