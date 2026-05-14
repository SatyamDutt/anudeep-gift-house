import { motion } from 'motion/react';
import { Package, Truck, ShieldCheck, Heart } from 'lucide-react';

const BENEFITS = [
  {
    icon: Package,
    title: 'Premium Quality',
    description: 'We source only the finest materials and brands for our curated collection.'
  },
  {
    icon: Truck,
    title: 'Express Delivery',
    description: 'Swift and secure shipping to ensure your gifts arrive exactly when needed.'
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Service',
    description: 'Thousands of happy customers trust us for their most precious moments.'
  },
  {
    icon: Heart,
    title: 'Personal Touch',
    description: 'Every gift is packed with care and can be customized to your liking.'
  }
];

export default function Benefits() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {BENEFITS.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-accent/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="text-brand-primary" size={32} />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-800 mb-2">{benefit.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
