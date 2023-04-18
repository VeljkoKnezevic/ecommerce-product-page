import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { MyNextIcon, MyPrevIcon, MyCloseIcon } from "./Icons";

type LightboxComponentProps = {
  images: {
    src: string;
  }[];
};

const LightboxComponent = ({ images }: LightboxComponentProps) => {
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
        <img src={images[indexToShow].src} alt="" />
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
        slides={images}
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
