import { AlertTriangle } from "lucide-react";

export const QuickExit = () => {
  const handleQuickExit = () => {
    // Immediately redirect to weather.com for safety
    window.location.href = "https://weather.com";
  };

  return (
    <button
      onClick={handleQuickExit}
      className="quick-exit"
      aria-label="Quick exit to weather.com for safety"
    >
      <AlertTriangle size={16} className="inline mr-1" />
      Quick Exit
    </button>
  );
};