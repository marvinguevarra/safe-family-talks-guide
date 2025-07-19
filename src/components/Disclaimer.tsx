import { AlertCircle } from "lucide-react";

export const Disclaimer = () => {
  return (
    <div className="disclaimer">
      <div className="flex items-start gap-3">
        <AlertCircle size={24} className="text-secondary mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-lg mb-2">Important Legal Notice</h3>
          <p className="text-sm leading-relaxed">
            <strong>This is NOT legal advice.</strong> This app provides general information and 
            emotional support resources only. For legal guidance, consult with a qualified 
            immigration attorney. Information may not reflect the most current laws or policies.
          </p>
          <p className="text-sm mt-2">
            <strong>Privacy:</strong> This app collects no personal data and works completely offline.
          </p>
        </div>
      </div>
    </div>
  );
};