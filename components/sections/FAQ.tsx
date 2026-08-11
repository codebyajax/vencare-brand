"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What does VenChecker test for?",
        answer:
            "VenChecker is designed to screen for HIV-1/2, syphilis, hepatitis B and hepatitis C using a blood sample.",
    },
    {
        question: "How long does the test take?",
        answer:
            "The product information indicates results are available within approximately 10–20 minutes. Always follow the manufacturer's instructions for the exact reading time.",
    },
    {
        question: "Is VenChecker a diagnostic test?",
        answer:
            "No. VenChecker is a screening test. A reactive, positive or unclear result should be followed by appropriate confirmatory testing and professional medical advice.",
    },
    {
        question: "How does the test work?",
        answer:
            "The test uses a finger-prick blood sample applied to the test cassette according to the manufacturer's instructions.",
    },
    {
        question: "What if my result is positive?",
        answer:
            "A positive or reactive screening result does not by itself establish a diagnosis. Seek confirmatory testing from a qualified healthcare provider or laboratory.",
    },
    {
        question: "What if my result is negative?",
        answer:
            "A negative screening result does not necessarily exclude an infection in every circumstance. If you have concerns, recent exposure or symptoms, speak with a qualified healthcare professional.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(
        null
    );

    const toggleFAQ = (index: number) => {
        setOpenIndex(
            openIndex === index ? null : index
        );
    };

    return (
        <section className="section faq-section">
            <div className="container">
                <SectionHeading
                    eyebrow="QUESTIONS"
                    title="Frequently asked."
                />

                <div className="faq-list">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                className="faq-item"
                                key={faq.question}
                            >
                                <button
                                    type="button"
                                    className={`faq-question ${isOpen ? "is-open" : ""
                                        }`}
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{faq.question}</span>

                                    <span className="faq-icon">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                <div
                                    className={`faq-answer ${isOpen ? "is-open" : ""
                                        }`}
                                >
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}