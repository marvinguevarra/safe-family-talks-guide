import { useState, useEffect } from "react";
import { Settings, X, Sun, Moon, Type, Volume2, RotateCcw } from "lucide-react";
import { useTheme } from "next-themes";

export const AccessibilityPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [settings, setSettings] = useState({
    highContrast: false,
    fontSize: "medium",
    lineSpacing: "normal",
    dyslexiaFont: false,
    readAloud: false,
    readingSpeed: 1
  });

  // Initialize default settings on component mount
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('font-medium', 'spacing-normal');
  }, []);

  // Apply accessibility settings to the document
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply font size
    root.classList.remove('font-small', 'font-medium', 'font-large', 'font-extra-large');
    root.classList.add(`font-${settings.fontSize}`);

    // Apply dyslexia font
    if (settings.dyslexiaFont) {
      root.classList.add('dyslexia-font');
    } else {
      root.classList.remove('dyslexia-font');
    }

    // Apply line spacing
    root.classList.remove('spacing-normal', 'spacing-relaxed', 'spacing-loose');
    root.classList.add(`spacing-${settings.lineSpacing}`);
  }, [settings]);

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const resetSettings = () => {
    setTheme('light');
    setSettings({
      highContrast: false,
      fontSize: "medium",
      lineSpacing: "normal",
      dyslexiaFont: false,
      readAloud: false,
      readingSpeed: 1
    });
    // Remove all accessibility classes
    const root = document.documentElement;
    root.classList.remove('high-contrast', 'dyslexia-font', 
      'font-small', 'font-medium', 'font-large', 'font-extra-large',
      'spacing-normal', 'spacing-relaxed', 'spacing-loose');
    root.classList.add('font-medium', 'spacing-normal');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="accessibility-trigger"
        aria-label="Open accessibility settings"
      >
        <Settings size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-card rounded-[20px] p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Accessibility Settings</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-muted rounded-full"
                aria-label="Close accessibility settings"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Visual Settings */}
              <section>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Sun size={20} />
                  Visual Settings
                </h3>
                
                 <div className="space-y-3">
                   <label className="flex items-center justify-between">
                     <span>Dark Mode</span>
                     <button
                       onClick={toggleDarkMode}
                       className={`w-12 h-6 rounded-full transition-all duration-200 ${
                         theme === 'dark' ? "bg-primary" : "bg-muted"
                       }`}
                     >
                       <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                         theme === 'dark' ? "translate-x-7" : "translate-x-1"
                       } mt-0.5`} />
                     </button>
                   </label>

                  <label className="flex items-center justify-between">
                    <span>High Contrast</span>
                    <button
                      onClick={() => updateSetting("highContrast", !settings.highContrast)}
                      className={`w-12 h-6 rounded-full transition-all duration-200 ${
                        settings.highContrast ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                        settings.highContrast ? "translate-x-7" : "translate-x-1"
                      } mt-0.5`} />
                    </button>
                  </label>
                </div>
              </section>

              {/* Text Settings */}
              <section>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Type size={20} />
                  Text Settings
                </h3>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-2">Font Size</label>
                    <div className="flex gap-2">
                      {["small", "medium", "large", "extra-large"].map((size) => (
                        <button
                          key={size}
                          onClick={() => updateSetting("fontSize", size)}
                          className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                            settings.fontSize === size
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted hover:bg-muted/80"
                          }`}
                        >
                          {size === "small" && "S"}
                          {size === "medium" && "M"}
                          {size === "large" && "L"}
                          {size === "extra-large" && "XL"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Line Spacing</label>
                    <div className="flex gap-2">
                      {["normal", "relaxed", "loose"].map((spacing) => (
                        <button
                          key={spacing}
                          onClick={() => updateSetting("lineSpacing", spacing)}
                          className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                            settings.lineSpacing === spacing
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted hover:bg-muted/80"
                          }`}
                        >
                          {spacing.charAt(0).toUpperCase() + spacing.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="flex items-center justify-between">
                    <span>Dyslexia-friendly Font</span>
                    <button
                      onClick={() => updateSetting("dyslexiaFont", !settings.dyslexiaFont)}
                      className={`w-12 h-6 rounded-full transition-all duration-200 ${
                        settings.dyslexiaFont ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                        settings.dyslexiaFont ? "translate-x-7" : "translate-x-1"
                      } mt-0.5`} />
                    </button>
                  </label>
                </div>
              </section>

              {/* Audio Settings */}
              <section>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Volume2 size={20} />
                  Audio Settings
                </h3>
                
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span>Read Aloud</span>
                    <button
                      onClick={() => updateSetting("readAloud", !settings.readAloud)}
                      className={`w-12 h-6 rounded-full transition-all duration-200 ${
                        settings.readAloud ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                        settings.readAloud ? "translate-x-7" : "translate-x-1"
                      } mt-0.5`} />
                    </button>
                  </label>

                  {settings.readAloud && (
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Reading Speed: {settings.readingSpeed}x
                      </label>
                      <input
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.25"
                        value={settings.readingSpeed}
                        onChange={(e) => updateSetting("readingSpeed", parseFloat(e.target.value))}
                        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              </section>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full flex items-center justify-center gap-2 p-3 bg-muted hover:bg-muted/80 rounded-full transition-all duration-200"
              >
                <RotateCcw size={16} />
                Reset All Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};