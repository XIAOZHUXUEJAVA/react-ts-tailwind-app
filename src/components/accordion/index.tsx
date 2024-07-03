import { AccordionItem } from './types/Accordion';

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    <div>{item.question}</div>
                    <div>{item.answer}</div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
