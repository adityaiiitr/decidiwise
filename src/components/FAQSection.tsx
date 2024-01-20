import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqsData: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqsData }) => {
  return (
    <div className='container mx-auto w-full max-w-screen-xl px-2.5 md:px-20 mb-12 mt-28 sm:mt-40 text-white text-xl '>
      <div className='sm:text-center'>
        <h2 className='mt-2 mb-12 font-bold text-4xl text-white opacaity-80 sm:text-5xl'>
          FAQs
        </h2>
      </div>
      <div className='text-sm text-left sm:text-xl'>
        <Accordion type="single" collapsible className="w-full">
          {faqsData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className='text-center p-4 font-bold'>{faq.question}</AccordionTrigger>
              <AccordionContent className='text-center'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
