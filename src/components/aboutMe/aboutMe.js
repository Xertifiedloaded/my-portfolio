import classes from './aboutMe.module.css'
import Olaitan from '../../assets/image/xertified.png'
import { Profile } from '../../constant/constant'

import { useEffect, useState } from 'react'
import Skills from '../skills/skills'
const AboutMe = () => {
    // swiper
 

    return (
        <>
            <section>

                <div className={classes.main}>
                    <div className={classes.row}>
                        <div className={classes.image}>
                            <img src={Olaitan} alt="" />
                        </div>
                        <div className={classes.content}>
                            <div className={classes.left}>
                                <h1>I'm Olaitan</h1>
                                <p>Front-End Developer</p>
                                <p>I'm a front-End Developer Based in Abeokuta.</p>
                                <p>I'm a Genetics Undergraduate Student of Federal University Of Agriculture Abeokuta</p>
                                <p>I believe coding is a vast process of transforming ideas, solutions and instructions into a language which provide rules for building website which is why I believe all ideas are worth implementing provided they are well expresses and presented.</p>
                                <p>I'm very passionate about Improving my coding skills and always ready to learn new things.</p>
                                <p>I'm Probably The Typical Designer Positioned To Design A Well Constructed Landing Page Immersed In Stylesheets.</p>
                                <p>Tweaking font size and contemplating layout which is where you will find me.</p>
                                <p>My vision is to bring ideas to life through web development and make them unique to brands/clients.</p>
                                <small>
                                    Skills and Abilities
                                </small>
                                <Skills />
                            </div>
                          
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe;

