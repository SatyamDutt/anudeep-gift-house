import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, MessageCircle, Menu, X, Search, Palette } from 'lucide-react';
import { useTheme, ThemeType } from '../context/ThemeContext';

const THEMES: { id: ThemeType; color: string; label: string }[] = [
  { id: 'blue', color: '#3B82F6', label: 'Azure Blue' },
  { id: 'pink', color: '#EC4899', label: 'Soft Pink' },
  { id: 'lavender', color: '#8B5CF6', label: 'Lavender' },
  { id: 'minimal', color: '#18181B', label: 'Minimal White' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = React.useState(false);
  const { theme: currentTheme, setTheme } = useTheme();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-glass py-3 shadow-brand-soft' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
            <ShoppingBag size={18} className="text-white" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-slate-800">
            Anudeep<span className="text-brand-primary"> Gifts</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Collections', 'New Arrivals', 'Trending', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-600 hover:text-brand-primary transition-colors">
            <Search size={20} />
          </button>

          {/* Theme Switcher Desktop */}
          <div className="relative hidden lg:block">
            <button 
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className="p-2.5 rounded-full bg-brand-bg text-slate-600 hover:text-brand-primary transition-all"
            >
              <Palette size={20} />
            </button>
            
            <AnimatePresence>
              {isThemeMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className="absolute right-0 mt-4 p-3 bg-white rounded-2xl shadow-xl border border-brand-accent min-w-[180px]"
                >
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-2">Select Theme</p>
                  <div className="grid grid-cols-1 gap-1">
                    {THEMES.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setTheme(t.id);
                          setIsThemeMenuOpen(false);
                        }}
                        className={`flex items-center gap-3 w-full p-2 rounded-xl transition-all ${
                          currentTheme === t.id ? 'bg-brand-accent/50 text-slate-900' : 'hover:bg-brand-bg text-slate-500'
                        }`}
                      >
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: t.color }} />
                        <span className="text-sm font-semibold">{t.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a 
            href="https://wa.me/yournumber" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full btn-gradient text-sm font-semibold"
          >
            <MessageCircle size={18} />
            Connect
          </a>
          
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-brand-accent shadow-xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {/* Theme Selector Mobile */}
              <div className="p-4 rounded-2xl bg-brand-bg border border-brand-accent/50">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Appearance</p>
                <div className="grid grid-cols-4 gap-2">
                  {THEMES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                        currentTheme === t.id ? 'bg-white shadow-sm ring-1 ring-brand-primary' : ''
                      }`}
                    >
                      <div className="w-8 h-8 rounded-full shadow-inner" style={{ backgroundColor: t.color }} />
                    </button>
                  ))}
                </div>
              </div>

              {['Collections', 'New Arrivals', 'Trending', 'About'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-lg font-medium text-slate-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://wa.me/yournumber" 
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl btn-gradient font-bold"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
