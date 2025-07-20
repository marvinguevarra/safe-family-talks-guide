import { QuickExit } from "@/components/QuickExit";
import { LanguageToggle } from "@/components/LanguageToggle";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";
import { Heart } from "lucide-react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-gentle">
      {/* Critical Safety Features */}
      <QuickExit />
      <AccessibilityPanel />

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/10">
        <div className="container mx-auto px-4 pt-8 pb-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <Heart className="text-secondary" size={32} />
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-warm bg-clip-text text-transparent animate-gentle-bounce">
                Together We Talk
              </h1>
            </div>
            <LanguageToggle />
          </div>
          
          <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto font-medium">
            A safe space for families to navigate difficult conversations with love, 
            understanding, and practical guidance.
          </p>
        </div>
      </header>

      {/* Page Content */}
      {children}
    </div>
  );
};