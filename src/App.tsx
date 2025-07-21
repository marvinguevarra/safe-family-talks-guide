
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import YoungChildren from "./pages/YoungChildren";
import Elementary from "./pages/Elementary";
import Teens from "./pages/Teens";
import FindDetained from "./pages/FindDetained";
import GetLegalHelp from "./pages/GetLegalHelp";
import DetentionRights from "./pages/DetentionRights";
import SafetyPlanning from "./pages/SafetyPlanning";
import CrisisResponse from "./pages/CrisisResponse";
import FamilyConversations from "./pages/FamilyConversations";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
        <BrowserRouter>
          <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/young-children" element={<YoungChildren />} />
            <Route path="/elementary" element={<Elementary />} />
            <Route path="/teens" element={<Teens />} />
            <Route path="/find-detained" element={<FindDetained />} />
            <Route path="/get-legal-help" element={<GetLegalHelp />} />
            <Route path="/detention-rights" element={<DetentionRights />} />
            <Route path="/safety-planning" element={<SafetyPlanning />} />
            <Route path="/crisis-response" element={<CrisisResponse />} />
            <Route path="/family-conversations" element={<FamilyConversations />} />
            <Route path="/resources" element={<Resources />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
