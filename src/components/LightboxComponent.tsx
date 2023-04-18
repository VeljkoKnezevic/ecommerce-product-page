import { Children, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import nextIcon from "/images/icon-next.svg";
import prevIcon from "/images/icon-previous.svg";
import closeIcon from "/images/icon-close.svg";

const MyNextIcon = () => {
  return (
    <div className="icon-next-and-prev">
      <img src={nextIcon} alt="" />
    </div>
  );
};

const MyPrevIcon = () => {
  return (
    <div className="icon-next-and-prev">
      <img src={prevIcon} alt="" />
    </div>
  );
};

const MyCloseIcon = () => {
  return (
    <div className="icon-close">
      <img src={closeIcon} alt="" />
    </div>
  );
};

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
    const thumbnails = e.currentTarget.parentElement;

    if (thumbnails) {
      const { children } = thumbnails;

      Array.from(children).forEach((child) => {
        child.classList.remove("selected");
      });
    }

    e.currentTarget.classList.add("selected");

    // Sets the index of the image that is clicked
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
          className="lightbox__thumbnails__thumbnail selected"
          type="button"
          value={0}
          onClick={(e) => handleClick(e)}
          aria-label="Show first image"
        ></button>
        <button
          className="lightbox__thumbnails__thumbnail"
          type="button"
          value={1}
          onClick={(e) => handleClick(e)}
          aria-label="Show second image"
        ></button>
        <button
          className="lightbox__thumbnails__thumbnail"
          type="button"
          value={2}
          onClick={(e) => handleClick(e)}
          aria-label="Show third image"
        ></button>
        <button
          className="lightbox__thumbnails__thumbnail"
          type="button"
          value={3}
          onClick={(e) => handleClick(e)}
          aria-label="Show fourth image"
        ></button>
      </div>
      <Lightbox
        plugins={[Thumbnails]}
        index={indexToShow}
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        render={{
          iconPrev: () => <MyPrevIcon />,
          iconNext: () => <MyNextIcon />,
          iconClose: () => <MyCloseIcon />,
        }}
      />
    </div>
  );
};

export default LightboxComponent;
