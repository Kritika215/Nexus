import "./FAQ.css";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Who can apply through NEXUS?",
    answer:
      "Freelancers, daily wage workers, small vendors, self-employed individuals, salaried employees and beneficiaries who need income verification for digital lending."
  },
  {
    question: "What documents are accepted?",
    answer:
      "NEXUS accepts salary slips, electricity bills, rent receipts, bank statements and digital payment transaction records."
  },
  {
    question: "How does OCR work?",
    answer:
      "The OCR engine extracts financial information from uploaded documents, which is then used for income verification and credit scoring."
  },
  {
    question: "How is the credit score generated?",
    answer:
      "The system evaluates income consistency, repayment capacity, transaction patterns and fraud detection rules before generating a credit score."
  },
  {
    question: "Is my personal data secure?",
    answer:
      "Yes. User information is securely stored and only used for document verification and loan assessment."
  }
];

function FAQ() {

  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq" id = "faq">

      <div className="container">

        <h2 className="section-title">
          Frequently Asked Questions
        </h2>

        <p className="section-subtitle">
          Everything you need to know about NEXUS.
        </p>

        <div className="faq-container">

          {faqs.map((faq, index) => (

            <div className="faq-item" key={index}>

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <span>{faq.question}</span>

                {active === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}

              </button>

              {active === index && (

                <div className="faq-answer">

                  <p>{faq.answer}</p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;