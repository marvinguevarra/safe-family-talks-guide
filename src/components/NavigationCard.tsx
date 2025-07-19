import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface NavigationCardProps {
  title: string;
  description: string;
  emoji: string;
  children: ReactNode;
  bgGradient?: string;
}

export const NavigationCard = ({ 
  title, 
  description, 
  emoji, 
  children, 
  bgGradient = "bg-gradient-warm" 
}: NavigationCardProps) => {
  return (
    <div className={`nav-card ${bgGradient} hover:scale-105`}>
      <div className="flex items-start gap-4 mb-4">
        <div className="text-4xl" role="img" aria-label={title}>
          {emoji}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
};

interface NavigationLinkProps {
  to: string;
  children: ReactNode;
  ageGroup?: string;
}

export const NavigationLink = ({ to, children, ageGroup }: NavigationLinkProps) => {
  return (
    <Link
      to={to}
      className="flex items-center justify-between p-3 bg-white/50 dark:bg-black/10 rounded-[15px] hover:bg-white/70 dark:hover:bg-black/20 transition-all duration-200 group"
    >
      <div className="flex items-center gap-3">
        <span className="font-medium">{children}</span>
        {ageGroup && (
          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
            {ageGroup}
          </span>
        )}
      </div>
      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
    </Link>
  );
};