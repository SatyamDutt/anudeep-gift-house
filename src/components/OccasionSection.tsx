import { motion } from 'motion/react';
import { OCCASIONS } from '../constants';
import { ArrowRight } from 'lucide-react';

export default function OccasionSection() {
  return (
    <section id="occasions" className="py-24 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 text-center md:text-left">
          <div>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">Shop by Occasion</h2>
            <p className="text-slate-500 max-w-md">Find the perfect match for every moment in life, from big milestones to small surprises.</p>
          </div>
          <button className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            See all occasions <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OCCASIONS.map((occasion) => (
            <motion.div
              key={occasion.id}
              whileHover={{ y: -10 }}
              className="relative aspect-square rounded-[32px] overflow-hidden group cursor-pointer shadow-brand-soft"
            >
              <img 
                src={occasion.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={occasion.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-display font-bold text-white mb-1">{occasion.title}</h3>
                <p className="text-white/70 text-xs font-medium uppercase tracking-widest">Explore Collection</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
