import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop" 
          alt="Premium Gifting Background"
          className="w-full h-full object-cover scale-105 brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/95 to-brand-bg/40" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-accent shadow-brand-soft mb-8"
          >
            <Sparkles size={16} className="text-brand-primary" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
              Premium Gifting Experience
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-slate-900 tracking-tight mb-8 leading-[1.1]"
          >
            Find the Perfect <br />
            <span className="text-brand-primary relative inline-block">
              Gift Items 🎁
              <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-accent/50 -z-10 rounded-full" />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-lg text-slate-600 mb-10 leading-relaxed"
          >
            Discover curated, high-end gifts designed for meaningful moments. 
            From personalized treasures to premium tech, we bring your vision to life.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a 
              href="#collections"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl btn-gradient font-bold text-lg flex items-center justify-center gap-2 group"
            >
              Explore Collection
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="https://wa.me/yournumber"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white border border-brand-accent text-slate-700 font-bold text-lg hover:bg-brand-accent/30 transition-colors shadow-brand-soft flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} className="text-emerald-500" />
              Order via WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Featured Floating Elements (Visual Depth) */}
        <div className="hidden lg:flex justify-center relative h-full">
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="relative z-10 w-full max-w-md aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white p-2"
           >
              <img 
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover rounded-[32px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent" />
           </motion.div>
           
           <motion.div 
             animate={{ y: [0, -20, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-20 -right-10 z-20 bg-white p-6 rounded-3xl shadow-xl border border-brand-accent flex items-center gap-4"
           >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                <Sparkles size={24} className="text-brand-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 tracking-tight">Premium Quality</p>
                <p className="text-[10px] text-slate-500 font-medium">Curated with love</p>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
