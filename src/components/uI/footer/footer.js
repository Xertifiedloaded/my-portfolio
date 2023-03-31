import { Link } from 'react-router-dom'
import classes from './footer.module.css'
import instagram from '../../../assets/image/instagram.svg'
import Twitter from '../../../assets/image/twitter.svg'
import LinkedIn from '../../../assets/image/linkedIn.svg'
import Call from '../../../assets/image/call.svg'
const Footer = () => {
  return (
    <>
      <footer>
        <div className={classes.main}>
          <div className={classes.footer}>
            <h2>Olaitan Portfolio</h2>
            <p>Thank You For Visiting My Personal Portfolio Website. Connect With Me Over Socials.</p>
          </div>
          <div className={classes.footer}>
            <h2>Quick links</h2>
            <Link>home</Link>
            <Link>About</Link>
            <Link>skills</Link>
            <Link>education</Link>
            <Link>work</Link>
            <Link>experience</Link>
          </div>
          <div className={classes.footer}>
            <h2>contact info</h2>
            <a href="#" target="_blank" >
              08168043011
            </a>
            <a href="#" target="_blank" >
              certifiedloaded@yahoo.com
            </a>
            <div className={classes.social}>
              <img src={LinkedIn} alt="" />
              <img src={instagram} alt="" />
              <img src={Twitter} alt="" />
              <img src={Call} alt="" />
            </div>
          </div>
        </div>
        <fieldset>
          <legend>
            Made with ❤️ By Makinde Olaitan
          </legend>
        </fieldset>
      </footer>
    </>
  )
}

export default Footer