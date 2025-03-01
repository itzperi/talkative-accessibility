
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AssistantProvider } from "@/context/AssistantContext";
import Index from "./pages/Index";
import Physics from "./pages/Physics";
import Chapter from "./pages/Chapter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AssistantProvider>
                <Index />
              </AssistantProvider>
            }
          />
          <Route
            path="/physics"
            element={
              <AssistantProvider>
                <Physics />
              </AssistantProvider>
            }
          />
          <Route
            path="/physics/:chapterId"
            element={
              <AssistantProvider>
                <Chapter />
              </AssistantProvider>
            }
          />
          <Route
            path="*"
            element={
              <AssistantProvider>
                <NotFound />
              </AssistantProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
