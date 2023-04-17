import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const LightboxComponent = () => {
  const [open, setOpen] = useState(false);
  const [indexToShow, setIndexToShow] = useState<number | undefined>();

  const slides = [
    { src: "/images/image-product-1.jpg" },
    { src: "/images/image-product-2.jpg" },
    { src: "/images/image-product-3.jpg" },
    { src: "/images/image-product-4.jpg" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    setIndexToShow(parseInt(e.currentTarget.value, 10));
  };

  return (
    <>
      <div className="highlighted-image"></div>
      <div className="thumbnail-grid">
        <button type="button" value={0} onClick={(e) => handleClick(e)}>
          <img src="/images/image-product-1-thumbnail.jpg" alt="" />
        </button>
        <button type="button" value={1} onClick={(e) => handleClick(e)}>
          <img src="/images/image-product-2-thumbnail.jpg" alt="" />
        </button>
        <button type="button" value={2} onClick={(e) => handleClick(e)}>
          <img src="/images/image-product-3-thumbnail.jpg" alt="" />
        </button>
        <button type="button" value={3} onClick={(e) => handleClick(e)}>
          <img src="/images/image-product-4-thumbnail.jpg" alt="" />
        </button>
      </div>
      <Lightbox
        index={indexToShow}
        open={open}
        close={() => setOpen(false)}
        slides={slides}
      />
    </>
  );
};

export default LightboxComponent;
