import * as React from 'react';
import SectionImageArea from './SectionImageArea';
import SectionImageConfig from './SectionImageConfig';
import { FILTERS } from 'lib/constants';

const MainPage = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(0);
  const [options, setOptions] = React.useState(FILTERS);
  const selectedOption = options[selectedOptionIndex];

  function handleSliderChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return { ...option, value: target.value };
      });
    });
  }

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(' ') };
  }

  return (
    <section className="relative flex h-full w-full">
      <SectionImageConfig
        className="h-full"
        options={options}
        setOptions={setOptions}
        selectedOptionIndex={selectedOptionIndex}
        setSelectedOptionIndex={setSelectedOptionIndex}
      />
      <SectionImageArea
        className="h-full w-full"
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
        imageStyles={getImageStyle}
      />
    </section>
  );
};
export default MainPage;
