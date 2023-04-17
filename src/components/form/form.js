import { useState } from "react";
import classes from "./form.module.css";

const FormBox = () => {
  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [payLoad, setPayLoad] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const HandleChange = (event) => {
    setPayLoad({
      ...payLoad,
      [event.target.name]: event.target.value,
    });
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (
      payLoad.firstName &&
      payLoad.lastName &&
      payLoad.email &&
      payLoad.subject &&
      payLoad.message
    ) {
      setValid(true);
    }
    console.log(payLoad);
  };

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <h3>Drop us a message</h3>
        <p>Will get back to you as soon as possible</p>
        <span>{submitted && valid ? <div>success! thanks</div> : null}</span>
      </div>
      <form onSubmit={HandleSubmit} action="">
        <div onChange={HandleChange} className={classes.inputs}>
          <input
            name="firstName"
            value={payLoad.firstName}
            type="text"
            placeholder="enter your firstName"
          />
          {submitted && !payLoad.firstName ? (
            <h6 className={classes.error}>please enter your first name</h6>
          ) : null}
        </div>
        <div className={classes.inputs}>
          <input
            onChange={HandleChange}
            name="lastName"
            value={payLoad.lastName}
            type="text"
            placeholder="enter your LastName"
          />
          {submitted && !payLoad.lastName ? (
            <h6 className={classes.error}>please enter your Lastname</h6>
          ) : null}
        </div>
        <div className={classes.inputs}>
          <input
            onChange={HandleChange}
            name="email"
            value={payLoad.email}
            type="email"
            placeholder="enter your Email"
          />
          {submitted && !payLoad.firstName ? (
            <h6 className={classes.error}>please enter your Email</h6>
          ) : null}
        </div>
        <div className={classes.inputs}>
          <input
            onChange={HandleChange}
            name="subject"
            value={payLoad.subject}
            type="text"
            placeholder="Subject"
          />
          {submitted && !payLoad.subject ? (
            <h6 className={classes.error}>please enter subject</h6>
          ) : null}
        </div>
        <div className={classes.inputs}>
          <textarea
            onChange={HandleChange}
            name="message"
            value={payLoad.message}
            placeholder="Message"
          ></textarea>
          {submitted && !payLoad.firstName ? (
            <h6 className={classes.error}>please enter your meessage</h6>
          ) : null}
        </div>
        <div className={classes.btn}>
          <button>
            <div className={classes.send}>Submit</div>
            <div className={classes.now}>Send</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormBox;
