import * as React from 'react';
import { motion } from 'framer-motion';

const SectionImageConfig = (props) => {
  return (
    <aside className={`${props.className} p-4`}>
      <motion.div
        className={`relative flex h-full w-full flex-col justify-evenly rounded-lg border-2 p-4`}
      >
        {props.options.map((option, index) => (
          <motion.div
            key={index}
            className={`flex items-center justify-between rounded border-2 border-transparent p-2 transition-all duration-300 hover:scale-110 hover:bg-stone-50 hover:text-stone-900 ${
              props.selectedOptionIndex === index
                ? 'bg-stone-50 text-stone-900'
                : 'bg-transparent text-stone-50'
            }`}
            onClick={() => props.setSelectedOptionIndex(index)}
          >
            <div className="flex items-center gap-2">
              <label
                htmlFor={option.property}
                className="mr-auto whitespace-nowrap text-sm"
              >
                {option.name}
              </label>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </aside>
  );
};
export default SectionImageConfig;
