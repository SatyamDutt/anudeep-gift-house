import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function CTABanner() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="relative gradient-blue rounded-[40px] p-12 md:p-20 overflow-hidden shadow-2xl flex flex-col items-center text-center border-4 border-white"
        >
          {/* Abstract blobs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/20 blur-[80px] rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-primary/10 blur-[100px] rounded-full" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-tight">
              Ready to Make Someone's <br />
              <span className="text-brand-primary">Day Special?</span>
            </h2>
            <p className="text-slate-700 text-lg mb-10 leading-relaxed font-medium">
              Join thousands of happy customers who trust Lumina Gifts for their most 
              precious moments. Beautifully packed, carefully delivered.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-slate-900 text-white font-bold text-lg shadow-xl shadow-slate-900/10 hover:shadow-slate-900/30 transition-all flex items-center justify-center gap-2 group">
                Browse Full Catalog
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white border border-brand-accent text-slate-900 font-bold text-lg shadow-brand-soft hover:bg-brand-accent/30 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} className="text-emerald-500" />
                WhatsApp Our Concierge
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
