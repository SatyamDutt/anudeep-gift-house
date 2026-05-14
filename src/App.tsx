import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import Benefits from './components/Benefits';
import OccasionSection from './components/OccasionSection';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import { PRODUCTS, CATEGORIES } from './constants';
import { Product } from './types';
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  const featuredProducts = PRODUCTS.filter(p => p.isFeatured);
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen selection:bg-brand-primary/20">
      <Navbar />
      
      <main>
        <Hero />
        
        <Benefits />

        {/* Featured Section */}
        <section className="py-24 px-6 bg-brand-bg/50">
           <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
                <div>
                  <h2 className="text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">Featured Masterpieces</h2>
                  <p className="text-slate-500 max-w-md">The absolute best of Lumina. Handpicked for their exceptional design and popularity.</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-12 h-12 rounded-full border border-brand-accent flex items-center justify-center text-slate-400 hover:text-brand-primary transition-all cursor-pointer">
                    <ArrowUpRight size={20} className="rotate-[-90deg]" />
                  </div>
                  <div className="w-12 h-12 rounded-full border border-brand-accent flex items-center justify-center text-slate-400 hover:text-brand-primary transition-all cursor-pointer">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onViewDetails={(p) => setSelectedProduct(p)} 
                  />
                ))}
             </div>
           </div>
        </section>

        <OccasionSection />

        {/* All Products Section */}
        <section id="collections" className="py-24 px-6 bg-white relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <h2 className="text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">
                  Explore Everything
                </h2>
                <p className="text-slate-500 max-w-md">
                  Browse our full inventory of premium gifts. Use filters to find 
                  exactly what you need.
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeCategory === category
                        ? 'btn-gradient scale-105'
                        : 'bg-brand-bg text-slate-500 hover:bg-brand-accent'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onViewDetails={(p) => setSelectedProduct(p)} 
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-slate-400 font-medium">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>

        <Testimonials />
        
        <CTABanner />

        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />

        {/* Brand Philosophy */}
        <section className="py-24 px-6 bg-brand-bg">
          <div className="max-w-7xl mx-auto rounded-[32px] bg-white p-12 md:p-24 relative overflow-hidden border border-brand-accent shadow-brand-soft">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/30 blur-[80px] -mr-32 -mt-32 rounded-full" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                  The Art of <br />
                  <span className="text-brand-primary italic">Meaningful Gifting</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  We believe that a gift should be as unique as the person receiving it. 
                  Lumina was born out of a desire to simplify premium gifting while 
                  maintaining a cool, modern aesthetic for the new generation.
                </p>
                <div className="flex flex-wrap gap-12">
                  <div>
                    <div className="text-4xl font-display font-bold text-brand-primary mb-1">15k+</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Gifts Delivered</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-brand-primary mb-1">500+</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Curated Brands</div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block relative">
                <div className="absolute inset-0 bg-brand-primary/10 rounded-3xl -rotate-3 scale-105" />
                <img 
                  src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop" 
                  alt="Packaging" 
                  referrerPolicy="no-referrer"
                  className="rounded-3xl shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 px-6 border-t border-brand-accent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="text-xl font-display font-bold tracking-tight">
                  Anudeep <span className="text-brand-primary">Gifts</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                The global standard for premium, modern gifting. Curating 
                extraordinary moments for an extraordinary generation.
              </p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                  <a key={idx} href="#" className="p-3 rounded-2xl bg-brand-bg text-slate-400 hover:text-brand-primary hover:bg-brand-accent/50 transition-all hover:-translate-y-1">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-[10px]">Categories</h4>
              <ul className="space-y-4">
                {CATEGORIES.slice(1).map((cat) => (
                  <li key={cat}>
                    <button onClick={() => setActiveCategory(cat)} className="text-slate-500 hover:text-brand-primary text-sm transition-colors cursor-pointer font-medium">
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-[10px]">Company</h4>
              <ul className="space-y-4">
                {['About Lumina', 'Bulk Orders', 'Corporate Gifting', 'Brand Partners', 'Sustainability'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-500 hover:text-brand-primary text-sm transition-colors font-medium">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-[10px]">Headquarters</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <MapPin size={18} className="text-brand-primary shrink-0" />
                  <span className="text-slate-500 text-sm leading-tight font-medium">Basudevpur, Samastirpur<br />Bihar, 848102 (INDIA)</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone size={18} className="text-brand-primary shrink-0" />
                  <span className="text-slate-500 text-sm font-medium">(+91) 9199866230</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail size={18} className="text-brand-primary shrink-0" />
                  <span className="text-slate-500 text-sm font-medium">concierge@luminagifts.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-brand-accent flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              © 2024 Lumina Premium Gifts International.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-slate-400 hover:text-slate-600 text-xs transition-colors font-medium">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-slate-600 text-xs transition-colors font-medium">Terms</a>
              <a href="#" className="text-slate-400 hover:text-slate-600 text-xs transition-colors font-medium">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
