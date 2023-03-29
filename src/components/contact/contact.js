import FormBox from '../form/form';
import FormContent from '../formContent/formContent';
import classes from './contact.module.css'

const Contact = () => {
    return (
        <>
            
            <div className={classes.main}>
                <h1>Get In Touch with me</h1>
                <div className={classes.flex}>
                    <div className={classes.right}>
                        <FormBox />
                    </div>
                    <div className={classes.left}>
                        <FormContent />
                    </div>
              </div>
               
            </div>
        </>
    )
}

export default Contact;