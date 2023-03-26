import classes from './social.module.css'
import Instagram from '../../assets/image/instagram.svg'
import LinkedIn from '../../assets/image/linkedIn.svg'
import Twitter from '../../assets/image/twitter.svg'
import Twitter2 from '../../assets/image/twitter.svg'


const Social = () => {
    return (
        <div className={classes.main}>
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Twitter2} alt="" />
        </div>
    )
}

export default Social;