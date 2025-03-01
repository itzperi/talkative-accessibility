
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ContentReader from '@/components/ContentReader';
import { ArrowRight, Computer, Code, Binary } from 'lucide-react';

const ComputerScience = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <ContentReader autoRead={true} title="Computer Science Learning Center" />
        
        <div className="mb-8 flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-soft">
            <Computer className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
              Learning Path
            </span>
            <h1 className="text-4xl font-bold tracking-tight content-readable bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Computer Science Learning Center
            </h1>
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8 content-readable">
          Explore our computer science chapters. You can navigate using voice commands by saying "Chapter 1" to open specific content.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link to="/computer-science/chapter-1" className="glass rounded-lg p-6 shadow-soft transition-all-200 hover:scale-[1.02] hover:shadow-lg dark:bg-gray-800/50 backdrop-blur-lg border border-white/10 dark:border-gray-700/50 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold mb-2 content-readable flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center">
                    <Code className="h-3 w-3 text-white" />
                  </div>
                  Chapter 1
                </h2>
                <p className="text-muted-foreground content-readable">Algorithms and Data Structures</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    <span className="content-readable">Algorithm Analysis</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    <span className="content-readable">Fundamental Data Structures</span>
                  </li>
                </ul>
              </div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-soft">
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </div>
          </Link>
          
          <div className="glass rounded-lg p-6 shadow-soft opacity-75 dark:bg-gray-800/50 backdrop-blur-lg border border-white/10 dark:border-gray-700/50">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold mb-2 content-readable flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center">
                    <Binary className="h-3 w-3 text-white" />
                  </div>
                  Chapter 2
                </h2>
                <p className="text-muted-foreground content-readable">Operating Systems</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    <span className="content-readable">Process Management</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    <span className="content-readable">Memory Management</span>
                  </li>
                </ul>
              </div>
              <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">Coming Soon</span>
            </div>
          </div>
        </div>
        
        <section className="mb-12 glass rounded-lg p-6 backdrop-blur-lg border border-white/10 dark:border-gray-700/50 dark:bg-gray-800/30">
          <h2 className="text-2xl font-bold mb-4 content-readable flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
              <Code className="h-3 w-3 text-white" />
            </div>
            Voice Navigation Guide
          </h2>
          <p className="mb-4 content-readable">
            You can navigate through the chapters using voice commands:
          </p>
          <div className="glass rounded-lg p-4 shadow-soft mb-4 dark:bg-gray-800/50">
            <p className="font-medium content-readable">"Chapter 1" - Opens Chapter 1: Algorithms and Data Structures</p>
          </div>
          <div className="glass rounded-lg p-4 shadow-soft dark:bg-gray-800/50">
            <p className="font-medium content-readable">"Read" - Reads the current page content aloud</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ComputerScience;
