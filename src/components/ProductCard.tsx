import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { MessageCircle, Star } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent(`Hi, I want to order "${product.name}"`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={() => onViewDetails(product)}
      className="group relative bg-brand-card rounded-2xl p-4 shadow-brand-soft border border-brand-accent/50 hover:shadow-brand-glow hover:border-brand-soft/30 transition-all duration-300 cursor-pointer"
    >
      {/* Badges */}
      <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-brand-primary rounded-full border border-brand-accent shadow-sm">
            New
          </span>
        )}
        {product.isTrending && (
          <span className="px-3 py-1 bg-brand-primary text-[10px] font-bold uppercase tracking-wider text-white rounded-full shadow-sm">
            Trending
          </span>
        )}
      </div>

      {/* Image Container */}
      <div className="relative aspect-square rounded-xl overflow-hidden mb-5 bg-brand-accent/20">
        <img 
          src={product.image} 
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="px-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star size={10} className="fill-brand-soft text-brand-soft" />
            <span className="text-[10px] font-bold text-slate-500">4.9</span>
          </div>
        </div>
        
        <h3 className="text-lg font-display font-bold text-slate-800 mb-2 group-hover:text-brand-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-xs text-slate-500 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-col gap-3 mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-xl font-display font-bold text-slate-900">
              ${product.price}
            </span>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleWhatsAppOrder}
              className="flex items-center justify-center gap-2 flex-1 py-3 rounded-xl btn-gradient text-[10px] font-bold transition-all duration-300"
            >
              <MessageCircle size={14} />
              Buy
            </button>
            <button 
              onClick={() => onViewDetails(product)}
              className="flex items-center justify-center px-4 py-3 rounded-xl bg-brand-bg text-slate-500 text-[10px] font-bold hover:bg-brand-accent transition-all duration-300"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
