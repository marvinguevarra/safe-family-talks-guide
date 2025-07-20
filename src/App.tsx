
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import YoungChildren from "./pages/YoungChildren";
import Elementary from "./pages/Elementary";
import Teens from "./pages/Teens";
import FindDetained from "./pages/FindDetained";
import GetLegalHelp from "./pages/GetLegalHelp";
import DetentionRights from "./pages/DetentionRights";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/young-children" element={<YoungChildren />} />
          <Route path="/elementary" element={<Elementary />} />
          <Route path="/teens" element={<Teens />} />
          <Route path="/find-detained" element={<FindDetained />} />
          <Route path="/get-legal-help" element={<GetLegalHelp />} />
          <Route path="/detention-rights" element={<DetentionRights />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
