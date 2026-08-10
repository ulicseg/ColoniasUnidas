import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-2.5 w-full">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`w-full bg-white rounded-lg border transition-all duration-150 overflow-hidden ${
              isOpen
                ? 'border-brand-green/60 shadow-sm'
                : 'border-neutral-200 hover:border-neutral-300'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-4 sm:px-6 py-4 flex items-center justify-between gap-4 text-left focus:outline-none focus:bg-neutral-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-sm sm:text-base text-neutral-900 leading-snug">
                {item.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-brand-green' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 sm:px-6 pb-5 pt-1 text-neutral-600 text-xs sm:text-sm leading-relaxed border-t border-neutral-100">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
