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
  return <div className={`nav-card ${bgGradient} hover:scale-105 text-white`}>
      <div className="flex items-start gap-4 mb-4">
        <div className="text-4xl" role="img" aria-label={title}>
          {emoji}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2 text-slate-400">{title}</h2>
          <p className="font-medium text-slate-400">{description}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        {children}
      </div>
    </div>;
};
interface NavigationLinkProps {
  to: string;
  children: ReactNode;
  ageGroup?: string;
}
export const NavigationLink = ({
  to,
  children,
  ageGroup
}: NavigationLinkProps) => {
  return <Link to={to} className="flex items-center justify-between p-3 bg-white/90 dark:bg-black/60 rounded-[15px] hover:bg-white dark:hover:bg-black/80 transition-all duration-200 group text-foreground dark:text-white">
      <div className="flex items-center gap-3">
        <span className="font-semibold text-foreground dark:text-white">{children}</span>
        {ageGroup && <span className="text-xs bg-black/20 dark:bg-white/20 text-foreground dark:text-white px-2 py-1 rounded-full font-medium">
            {ageGroup}
          </span>}
      </div>
      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-200 text-foreground dark:text-white" />
    </Link>;
};