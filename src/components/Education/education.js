import classes from "./education.module.css";
import code from "../../assets/image/code.jpeg";
import funaab from "../../assets/image/funaab.jpeg";
import atc from "../../assets/image/atc2.png";
const Education = () => {
  return (
    <>
      <section>
        <div className={classes.main}>
          <div className={classes.heading}>
            <h1>
              My <span className={classes.purple}>Education</span>
            </h1>
            <p>
              Education Is Not The Learning Of Facts, But The Training Of The
              Mind To Think.
            </p>
          </div>
          <div className={classes.edu}>
            <div className={classes.image}>
              <img src={code} alt="" />
            </div>
            <div className={classes.eduContent}>
              <h2>Front-End Development I</h2>
              <p>Abbitech </p>
              <small>2020</small>
            </div>
          </div>
          <div className={classes.edu}>
            <div className={classes.image}>
              <img src={atc} alt="" />
            </div>
            <div className={classes.eduContent}>
              <h2>Front-End Development II</h2>
              <p>Africa Trainovation consulting Limited (ATC)</p>
              <div className={classes.certificate}>
                <a href="https://atccertificates.s3.amazonaws.com/media/MAKINDE.pdf">
                  <button>check certificate</button>
                </a>
              </div>
              <small>2023 - Present</small>
            </div>
          </div>
          <div className={classes.edu}>
            <div className={classes.image}>
              <img src={funaab} alt="" />
            </div>
            <div className={classes.eduContent}>
              <h2>Bachelor Of Agriculture In Breeding And Genetics</h2>
              <p>Federal University Of Agriculture</p>
              <small>2017 - Present</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
