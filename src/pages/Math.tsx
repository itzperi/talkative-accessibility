
import React from 'react';
import Layout from '@/components/Layout';
import ContentReader from '@/components/ContentReader';
import { Calculator, Plus } from 'lucide-react';

const Math = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <ContentReader autoRead={true} title="Mathematics Learning Center" />
        
        <div className="mb-8 flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-soft">
            <Calculator className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
              Coming Soon
            </span>
            <h1 className="text-4xl font-bold tracking-tight content-readable bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Mathematics Learning Center
            </h1>
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8 content-readable">
          Our mathematics content is being developed. Please check back soon for lessons on algebra, calculus, and more.
        </p>
        
        <div className="glass rounded-lg p-8 shadow-soft dark:bg-gray-800/30 backdrop-blur-lg border border-white/10 dark:border-gray-700/50 flex flex-col items-center justify-center text-center">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center mb-6">
            <Plus className="h-10 w-10 text-purple-500 dark:text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4 content-readable">Content Coming Soon</h2>
          <p className="text-muted-foreground content-readable max-w-md">
            We're currently working on developing comprehensive mathematics lessons. Please check back soon or explore our available physics content.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Math;
