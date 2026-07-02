"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_CONTENT } from "@/constants/content";
import { SectionHeader, AnimateInView } from "@/components/ui";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  id:       string;
  question: string;
  answer:   string;
  isOpen:   boolean;
  onToggle: () => void;
  index:    number;
}

function AccordionItem({ id, question, answer, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={cn(
        "border border-brand-border rounded-[var(--radius-card)] overflow-hidden",
        "transition-colors duration-300",
        isOpen ? "border-brand-secondary/40 bg-white/[0.04]" : "hover:border-white/20"
      )}
    >
      <button
        id={`faq-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left"
      >
        <span className="text-sm md:text-base font-medium text-brand-text leading-snug">
          {question}
        </span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-brand-border flex items-center justify-center mt-0.5">
          {isOpen
            ? <Minus size={12} className="text-brand-secondary" />
            : <Plus  size={12} className="text-brand-text/60" />
          }
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${id}`}
            role="region"
            aria-labelledby={`faq-btn-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <div className="w-8 h-px bg-brand-secondary/40 mb-4" />
              <p className="text-sm text-brand-text/70 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * FAQ SECTION
 * Accessible accordion dengan AnimatePresence untuk smooth open/close.
 */
export function FAQ() {
  const { eyebrow, headline, items } = FAQ_CONTENT;
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="section-padding">
      <div className="container-wide">
        <AnimateInView>
          <SectionHeader eyebrow={eyebrow} headline={headline} />
        </AnimateInView>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {items.map((item, i) => (
            <AccordionItem
              key={item.id}
              {...item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
