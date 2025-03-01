
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ContentReader from '@/components/ContentReader';
import { ChevronLeft } from 'lucide-react';

const chapters = {
  "chapter-1": {
    title: "Introduction to Mechanics",
    sections: [
      {
        title: "Newton's Laws of Motion",
        content: `
          Newton's laws of motion are three fundamental physical laws that form the foundation for classical mechanics. These laws describe the relationship between the motion of an object and the forces acting on it.
          
          The First Law, also known as the law of inertia, states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force. This concept challenges the intuitive Aristotelian view that objects naturally come to rest.
          
          The Second Law states that the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. This is often written as F = ma, where F is the net force, m is the mass, and a is the acceleration.
          
          The Third Law states that for every action, there is an equal and opposite reaction. This means that when one object exerts a force on another, the second object exerts an equal and opposite force on the first.
        `
      },
      {
        title: "Conservation of Energy",
        content: `
          The law of conservation of energy states that energy cannot be created or destroyed, only transformed from one form to another. The total energy of an isolated system remains constant over time.
          
          In mechanics, we often deal with two main types of energy: kinetic energy, which is the energy of motion, and potential energy, which is stored energy due to position or configuration. The sum of kinetic and potential energy is called mechanical energy.
          
          For example, as a ball falls, its potential energy decreases while its kinetic energy increases, but the total mechanical energy remains the same, assuming no energy is lost to friction or air resistance.
          
          This principle is crucial in understanding and solving many physics problems, as it provides a powerful constraint on possible outcomes of physical processes.
        `
      },
      {
        title: "Momentum",
        content: `
          Momentum is a vector quantity defined as the product of an object's mass and velocity. It is an important concept in mechanics because the total momentum of a closed system is conserved, meaning it doesn't change over time.
          
          The conservation of momentum is particularly useful in analyzing collisions. In an isolated system, the total momentum before a collision equals the total momentum after the collision, regardless of whether the collision is elastic or inelastic.
          
          Impulse, which is the integral of force over time, equals the change in momentum. This relationship, known as the impulse-momentum theorem, is useful in situations where force varies over time, such as during impacts.
          
          Understanding momentum and its conservation helps explain a wide range of phenomena, from rocket propulsion to billiard ball collisions.
        `
      }
    ]
  }
};

const Chapter = () => {
  const { chapterId } = useParams<{ chapterId: string }>();
  const chapter = chapterId ? chapters[chapterId as keyof typeof chapters] : null;
  
  if (!chapter) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Chapter not found</h1>
          <p className="mb-6">The chapter you're looking for doesn't exist.</p>
          <Link to="/physics" className="text-primary hover:underline flex items-center justify-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Physics
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <ContentReader autoRead={true} title={chapter.title} />
        
        <Link to="/physics" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-4 transition-all-200">
          <ChevronLeft className="h-4 w-4" />
          Back to Physics
        </Link>
        
        <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-2">
          Chapter 1
        </span>
        <h1 className="text-3xl font-bold tracking-tight mb-6 content-readable">
          {chapter.title}
        </h1>
        
        <div className="space-y-12 mb-8">
          {chapter.sections.map((section, index) => (
            <section key={index} className="glass rounded-lg p-6 shadow-soft">
              <h2 className="text-xl font-bold mb-4 content-readable">{section.title}</h2>
              {section.content.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4 text-muted-foreground content-readable">
                  {paragraph.trim()}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Chapter;
