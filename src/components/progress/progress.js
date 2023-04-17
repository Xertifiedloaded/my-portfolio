import classes from "./progress.module.css";

const Progress = () => {
  return (
    <>
          <div className={classes.main}>
              <h1>Progress Bar</h1>
        <div className={classes.skillBox}>
          <span className={classes.title}>HTML</span>
          <div className={`${classes.skillBar}`}>
            <span className={`${classes.skillPercent} ${classes.html}`}>
              <span className={classes.toolTip}>95%</span>
            </span>
          </div>
        </div>
        <div className={classes.skillBox}>
          <span className={classes.title}>CSS</span>
          <div className={`${classes.skillBar}`}>
            <span className={`${classes.skillPercent}  ${classes.css}`}>
              <span className={classes.toolTip}>93%</span>
            </span>
          </div>
        </div>
        <div className={classes.skillBox}>
          <span className={classes.title}>VANILLA JAVASCRIPT</span>
          <div className={`${classes.skillBar} ${classes.javascript}`}>
            <span className={`${classes.skillPercent} ${classes.js}`}>
              <span className={classes.toolTip}>87%</span>
            </span>
          </div>
        </div>
        <div className={classes.skillBox}>
          <span className={classes.title}>REACT JS</span>
          <div className={`${classes.skillBar}`}>
            <span className={`${classes.skillPercent} ${classes.react}`}>
              <span className={classes.toolTip}>90%</span>
            </span>
          </div>
        </div>
        <div className={classes.skillBox}>
          <span className={classes.title}>GitHub</span>
          <div className={`${classes.skillBar}`}>
            <span className={`${classes.skillPercent} ${classes.github}`}>
              <span className={classes.toolTip}>98%</span>
            </span>
          </div>
        </div>
        <div className={classes.skillBox}>
          <span className={classes.title}>WordPress</span>
          <div className={`${classes.skillBar}`}>
            <span className={`${classes.skillPercent} ${classes.wordpress}`}>
              <span className={classes.toolTip}>60%</span>
            </span>
          </div>
        </div>
        <div className={classes.skillBox}>
          <span className={classes.title}>Netlify/Vercel</span>
          <div className={`${classes.skillBar}`}>
            <span className={`${classes.skillPercent} ${classes.netlify}`}>
              <span className={classes.toolTip}>80%</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
