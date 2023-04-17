import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const LightboxComponent = () => {
  const slides = [
    { src: "/images/image-product-1.jpg" },
    { src: "/images/image-product-2.jpg" },
    { src: "/images/image-product-3.jpg" },
    { src: "/images/image-product-4.jpg" },
  ];
  const [open, setOpen] = useState(false);
  const [indexToShow, setIndexToShow] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIndexToShow(parseInt(e.currentTarget.value, 10));
  };
  return (
    <div className="lightbox">
      <button
        className="lightbox__main"
        type="button"
        onClick={() => setOpen(true)}
      >
        <img src={slides[indexToShow].src} alt="" />
      </button>
      <div className="lightbox__thumbnails">
        <button
          type="button"
          value={0}
          onClick={(e) => handleClick(e)}
          aria-label="Show first image"
        ></button>
        <button
          type="button"
          value={1}
          onClick={(e) => handleClick(e)}
          aria-label="Show second image"
        ></button>
        <button
          type="button"
          value={2}
          onClick={(e) => handleClick(e)}
          aria-label="Show third image"
        ></button>
        <button
          type="button"
          value={3}
          onClick={(e) => handleClick(e)}
          aria-label="Show fourth image"
        ></button>
      </div>
      <Lightbox
        index={indexToShow}
        open={open}
        close={() => setOpen(false)}
        slides={slides}
      />
    </div>
  );
};

export default LightboxComponent;
