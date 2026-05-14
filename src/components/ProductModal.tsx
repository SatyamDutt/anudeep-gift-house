import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Truck, ShieldCheck, Heart, Share2 } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(`Hi, I'm interested in the "${product.name}" (${product.category}). I'd like to place an order!`);
    window.open(`https://wa.me/yournumber?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-5xl bg-white rounded-[32px] shadow-2xl overflow-hidden overflow-y-auto max-h-[90vh] md:max-h-none"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-slate-900 transition-colors shadow-sm"
          >
            <X size={24} />
          </button>

          <div className="grid md:grid-cols-2">
            {/* Image Side */}
            <div className="p-8 md:p-12 bg-brand-bg flex items-center justify-center">
              <motion.div 
                layoutId={`img-${product.id}`}
                className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {product.category}
                  </span>
                  {product.isNew && (
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      New Arrival
                    </span>
                  )}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">
                  {product.name}
                </h2>
                
                <p className="text-2xl font-display font-bold text-brand-primary mb-6">
                  ${product.price}
                </p>
                
                <p className="text-slate-500 leading-relaxed mb-8">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={handleWhatsAppOrder}
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl btn-gradient font-bold shadow-xl shadow-brand-primary/20 transition-all hover:scale-[1.02]"
                  >
                    <MessageCircle size={20} />
                    Order Now
                  </button>
                  <button className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-brand-bg text-slate-600 font-bold transition-all hover:bg-brand-accent/30">
                    <Share2 size={20} />
                    Share
                  </button>
                </div>
              </div>

              {/* Benefits Snippets */}
              <div className="mt-auto pt-8 border-t border-brand-accent grid grid-cols-1 gap-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
                    <Truck size={16} />
                  </div>
                  <span className="text-xs font-semibold">Free Express Shipping on this item</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
                    <ShieldCheck size={16} />
                  </div>
                  <span className="text-xs font-semibold">Quality Guarantee & Trusted Support</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center">
                    <Heart size={16} />
                  </div>
                  <span className="text-xs font-semibold">Premium Packaging Included</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
