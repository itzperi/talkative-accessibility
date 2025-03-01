
import React from 'react';
import Layout from '@/components/Layout';
import ContentReader from '@/components/ContentReader';
import { Leaf, Heart } from 'lucide-react';

const Biology = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <ContentReader autoRead={true} title="Biology Learning Center" />
        
        <div className="mb-8 flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-soft">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
              Coming Soon
            </span>
            <h1 className="text-4xl font-bold tracking-tight content-readable bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Biology Learning Center
            </h1>
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8 content-readable">
          Our biology content is being developed. Please check back soon for lessons on cells, ecosystems, and human anatomy.
        </p>
        
        <div className="glass rounded-lg p-8 shadow-soft dark:bg-gray-800/30 backdrop-blur-lg border border-white/10 dark:border-gray-700/50 flex flex-col items-center justify-center text-center">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/20 flex items-center justify-center mb-6">
            <Heart className="h-10 w-10 text-green-500 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4 content-readable">Content Coming Soon</h2>
          <p className="text-muted-foreground content-readable max-w-md">
            We're currently working on developing comprehensive biology lessons. Please check back soon or explore our available physics content.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Biology;
