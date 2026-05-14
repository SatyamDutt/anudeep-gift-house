import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">What Our Clients Say</h2>
          <p className="text-slate-500">Don't just take our word for it—listen to our happy community of givers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-brand-bg relative group border border-brand-accent/50"
            >
              <div className="absolute top-8 right-8 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors">
                <Quote size={60} strokeWidth={3} />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-800 tracking-tight">{t.name}</h4>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed italic text-sm">"{t.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
