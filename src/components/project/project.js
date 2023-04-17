import classes from "./project.module.css";
import { card } from "../../constant/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import Progress from "../progress/progress";
const Project = () => {
  const [currentImage, setCurrentImage] = useState(card[0]);
  const handleClick = (index) => {
    const slider = card[index];
    setCurrentImage(slider);
  };
  const getBox = () => {
    return document.querySelector(".box");
  };
  const next = () => {
    const box = getBox();
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const prev = () => {
    const box = getBox();
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };
  return (
    <>
      <div className={classes.main}>
              <h1>Project Made <span className={classes.span1}>{card.length}</span></h1>
        <div>
          <div className={classes.currentImage}>
            <div className={classes.currentSliderImg}>
              <img src={currentImage.image} alt="" />
            </div>
            <div className={classes.progress}>
              <Progress />
            </div>
          </div>
          <div className={classes.slider}>
            <div className={classes.prev} onClick={next}></div>
            <div className={`box ${classes.carousel}`}>
              {card.map((items, index) => (
                <Carousel
                  handleClick={handleClick}
                  {...items}
                  key={index}
                  index={index}
                />
              ))}
            </div>
            <div className={classes.next} onClick={prev}></div>
          </div>
          <div className={classes.btn}>
            <Link to="/works">
              <button>View all projects</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
const Carousel = ({ image, index, handleClick }) => {
  return (
    <>
      <div onClick={() => handleClick(index)} className={classes.sliderImage}>
        <img src={image} alt="" />
      </div>
    </>
  );
};
