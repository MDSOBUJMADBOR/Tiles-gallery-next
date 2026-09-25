
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const questions = [
  {
    question: "How can I find the right tiles?",
    answer:
      "Browse our categories and tile collections. You can open any product to view its image, price, description, specifications, and availability.",
  },
  {
    question: "Can I see tile details before ordering?",
    answer:
      "Yes. Every tile has a dedicated details page where you can view product information and specifications before making your decision.",
  },
  {
    question: "Do you provide delivery?",
    answer:
      "Delivery availability depends on the product and location. Please check the product information or contact our support team for details.",
  },
  {
    question: "Are the products available in different styles?",
    answer:
      "Yes. TileGallery includes different collections and styles suitable for living rooms, kitchens, bathrooms, floors, walls, and outdoor spaces.",
  },
  {
    question: "How can I contact TileGallery?",
    answer:
      "You can contact us through the contact information provided in the footer. We will be happy to help you choose the right tile.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <HelpCircle className="size-4" />
            FAQ
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need to know about TileGallery.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 space-y-4">
          {questions.map((item, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={item.question}
                layout
                className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
                  isOpen
                    ? "border-blue-200 shadow-lg shadow-blue-500/5"
                    : "border-slate-200"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
                >
                  <span
                    className={`font-semibold transition-colors duration-300 ${
                      isOpen
                        ? "text-blue-600"
                        : "text-slate-900"
                    }`}
                  >
                    {item.question}
                  </span>

                  <motion.span
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="size-5" />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.45,
                          ease: [0.4, 0, 0.2, 1],
                        },
                        opacity: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      }}
                    >
                      <div className="border-t border-slate-100 px-5 pb-6 pt-5 sm:px-6">
                        <motion.p
                          initial={{
                            opacity: 0,
                            y: -8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -8,
                          }}
                          transition={{
                            duration: 0.3,
                            delay: 0.08,
                          }}
                          className="text-sm leading-7 text-slate-600"
                        >
                          {item.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

