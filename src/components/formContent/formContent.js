import classes from './formContent.module.css'
import call from '../../assets/image/call.svg'

const FormContent = () => {
    const EmailClick = () => {
        return window.open(`mailto:certifiedloaded@yahoo.com`)
    }
    const WhatsAppRedirect = () => {
        let url = window.open(`https://web.whatsapp.com/send?={8168043011}`)
        url += `&text=${encodeURI(`ola`)}`
        return url
    }
    return (
        <>
            <div className={classes.main}>
                <div className={classes.details}>
                    <span>
                        <img src={call} alt="" />
                    </span>
                    <div className={classes.dividde}>
                        <h2>08050726434</h2>
                        <h6>
                            Hot-line
                        </h6>
                    </div>
                </div>
                <div className={classes.details}>
                    <span>
                        <img src={call} alt="" />
                    </span>
                    <div onClick={WhatsAppRedirect} className={classes.dividde}>
                        <h2>08168043011</h2>
                        <h6>
                            WhatsApp
                        </h6>
                    </div>
                </div>
                <div className={classes.details}>
                    <span>
                        <img src={call} alt="" />
                    </span>
                    <div onClick={EmailClick} className={classes.dividde}>
                        <h2>certifiedloaded</h2>
                        <h6>
                            Email
                        </h6>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FormContent;