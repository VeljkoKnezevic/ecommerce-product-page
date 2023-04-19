import nextIcon from "/images/icon-next.svg";
import prevIcon from "/images/icon-previous.svg";
import closeIcon from "/images/icon-close.svg";

const MyNextIcon = () => {
  return (
    <div className="icon-next-and-prev">
      <img src={nextIcon} alt="Next slide" />
    </div>
  );
};

const MyPrevIcon = () => {
  return (
    <div className="icon-next-and-prev">
      <img src={prevIcon} alt="Previoius slide" />
    </div>
  );
};

const MyCloseIcon = () => {
  return (
    <div className="icon-close">
      <img src={closeIcon} alt="Close the slides" />
    </div>
  );
};

export { MyNextIcon, MyCloseIcon, MyPrevIcon };
