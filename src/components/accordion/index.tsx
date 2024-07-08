import React, { useState } from 'react';
import { AccordionItem } from './types/Accordion';

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {

    const [activeItemId, setActiveItemId] = useState<string | null>(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState<boolean | null>(false);

    const showItem = (itemId: string) => {
        activeItemId === itemId ? setActiveItemId(null) : setActiveItemId(itemId)
    }
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
            </button>
            <div>
                {items.map((item) => (
                    <div key={item.id} className="mb-4 border-b-2 pb-4">
                        <div className="text-lg font-semibold text-gray-800 mb-2 flex justify-between">
                            {item.question}
                            <button onClick={() => showItem(item.id)}>
                                {activeItemId === item.id ? '-' : '+'}
                            </button>
                        </div>
                        {
                            activeItemId === item.id && (
                                <div className="text-gray-600 mt-2">
                                    {item.answer}
                                </div>
                            )
                        }
                        <div className="text-gray-600">
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
