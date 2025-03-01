
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ChevronLeft } from "lucide-react";
import { useAssistant } from "@/context/AssistantContext";

const NotFound = () => {
  const location = useLocation();
  const { speak } = useAssistant();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Announce the 404 error to the user
    const timeoutId = setTimeout(() => {
      speak("Page not found. The page you're looking for doesn't exist.");
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, [location.pathname, speak]);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 content-readable">404</h1>
        <p className="text-xl text-muted-foreground mb-6 content-readable">
          Oops! Page not found
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ChevronLeft className="h-4 w-4" />
          Return to Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
