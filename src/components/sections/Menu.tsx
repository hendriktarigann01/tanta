"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, MessageCircle } from "lucide-react";
import { MENU_CONTENT } from "@/constants/content";
import { getWhatsAppUrl } from "@/constants/site";
import { SectionHeader, Button } from "@/components/ui";
import { AnimateInView } from "@/components/ui/AnimateInView";

export function Menu() {
  const { eyebrow, headline, subheadline, categories } = MENU_CONTENT;
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section id="menu" className="section-padding bg-brand-bg relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <AnimateInView>
          <SectionHeader
            eyebrow={eyebrow}
            headline={headline}
            subheadline={subheadline}
            align="center"
          />
        </AnimateInView>

        {/* Category Tabs */}
        <AnimateInView delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 max-w-2xl mx-auto">
            {categories.map((category) => {
              const isActive = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-sm tracking-wide transition-all duration-300 ${
                    isActive
                      ? "bg-brand-primary text-white shadow-md shadow-brand-primary/10"
                      : "bg-white border border-brand-border text-brand-text/75 hover:bg-brand-primary/5 hover:text-brand-primary"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </AnimateInView>

        {/* Menu Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {currentCategory.items.map((item, index) => {
                const itemWaUrl = getWhatsAppUrl(
                  `Halo, saya ingin memesan menu "${item.name}" di Warung Leko Grand Wisata.`
                );

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="group bg-white rounded-2xl border border-brand-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Item Image Container */}
                    <div className="relative aspect-[4/3] w-full bg-[#FCFAF7] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Overlay Spice / Tag badges */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                        {item.tag ? (
                          <span className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-brand-primary text-white shadow-sm">
                            {item.tag}
                          </span>
                        ) : (
                          <span />
                        )}
                        {item.isSpicy && (
                          <span className="p-1.5 rounded-lg bg-red-100 text-brand-primary shadow-sm flex items-center justify-center" title="Pedas">
                            <Flame size={14} className="fill-current" />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="font-display font-bold text-lg text-brand-text group-hover:text-brand-primary transition-colors">
                          {item.name}
                        </h3>
                        <span className="font-display font-bold text-brand-primary text-base whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-xs text-brand-muted leading-relaxed mb-6 flex-grow">
                        {item.description}
                      </p>

                      {/* CTA to Order */}
                      <Button
                        as="a"
                        href={itemWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        size="sm"
                        className="w-full inline-flex items-center justify-center gap-2 border-brand-primary/10 hover:border-brand-primary hover:bg-brand-primary text-brand-primary hover:text-white transition-colors"
                      >
                        <MessageCircle size={14} />
                        Pesan via WhatsApp
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
