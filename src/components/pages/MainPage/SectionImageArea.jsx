import * as React from 'react';

const SectionImageArea = ({
  min,
  max,
  value,
  handleChange,
  className,
  imageStyles,
}) => {
  const canvasRef = React.useRef(null);
  const selectorRef = React.useRef(null);
  const [image, setImage] = React.useState(null);

  const renderImage = React.useCallback(
    (ctx) => {
      canvasRef.current.width = image.width;
      canvasRef.current.height = image.height;

      ctx.filter = `${imageStyles().filter}`;
      ctx.drawImage(image, 0, 0);
    },
    [image, imageStyles]
  );

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = setImage(image);
    img.onload = () => {
      renderImage(ctx);
    };
  }, [image, imageStyles, renderImage]);
  return (
    <section
      className={`relative flex h-full items-center justify-center ${className}`}
    >
      <canvas
        id="canvas"
        ref={canvasRef}
        className="object-contain"
        style={{ filter: `${imageStyles().filter}` }}
      ></canvas>
      <div className="image-selector" ref={selectorRef}>
        <div className="image-wrapper">
          <label htmlFor="image-file-input" id="image-file-label">
            Select Image <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-image"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <input
              type="file"
              id="image-file-input"
              accept="image/png, image/jpg, image/gif, image/jpeg"
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                  const img = new Image();
                  img.src = e.target.result;
                  img.onload = () => {
                    selectorRef.current.classList.add('hidden');
                    const canvas = canvasRef.current;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(
                      img,
                      0,
                      0,
                      (canvas.width = img.width),
                      (canvas.height = img.height)
                    );
                  };
                };
                reader.readAsDataURL(file);
              }}
            />
          </label>
        </div>
      </div>
      <div className="absolute bottom-10 w-full max-w-[200px] lg:max-w-sm">
        <input
          type="range"
          name="slider"
          id="slider"
          className="w-full"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
        />
      </div>
    </section>
  );
};

export default SectionImageArea;
