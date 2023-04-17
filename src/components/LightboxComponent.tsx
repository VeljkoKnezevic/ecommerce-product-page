import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const LightboxComponent = () => {
  const [open, setOpen] = useState(false);

  const slides = [
    { src: "/images/image-product-1.jpg" },
    { src: "/images/image-product-2.jpg" },
    { src: "/images/image-product-3.jpg" },
    { src: "/images/image-product-4.jpg" },
  ];

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        <img src="/images/image-product-1-thumbnail.jpg" alt="" />
      </button>
      <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
    </>
  );
};

export default LightboxComponent;
