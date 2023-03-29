import { useState } from 'react';
import classes from './form.module.css'

const FormBox = () => {
    const [payLoad, setPayLoad] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""

    })
    const HandleChange = (event) => {
        setPayLoad((data) => (
            {
                ...data,
                [event.target.id]: event.target.value
            }
        ))
    }
    const HandleSubmit = (event) => {
        event.preventDefault()
        console.log(payLoad)
    }
    return (
        <div className={classes.main}>
            <div className={classes.content}>
                <h3>
                    Drop us a message
                </h3>
                <p>Will get back to you as soon as possible</p>
            </div>
            <form onSubmit={HandleSubmit} action="">
                <div onChange={HandleChange} className={classes.inputs}>
                    <input id='firstName' value={payLoad.firstName} type="text" placeholder="enter your firstName" />
                </div>
                <div className={classes.inputs}>
                    <input onChange={HandleChange} id='lastName' value={payLoad.lastName} type="text" placeholder="enter your LastName" />
                </div>
                <div className={classes.inputs}>
                    <input onChange={HandleChange} id='email' value={payLoad.email} type="email" placeholder="enter your Email" />
                </div>
                <div className={classes.inputs}>
                    <input onChange={HandleChange} id='subject' value={payLoad.subject} type="text" placeholder="Subject" />
                </div>
                <div className={classes.inputs}>
                    <textarea onChange={HandleChange} id='message' value={payLoad.message} placeholder='Message' name=""></textarea>
                </div>
                <div className={classes.btn}>
                    <button>
                        <div className={classes.send}>Submit</div>
                        <div className={classes.now}>Send</div>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormBox;