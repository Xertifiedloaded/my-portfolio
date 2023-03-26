import React from 'react'
import AboutMe from '../../components/aboutMe/aboutMe'
import Education from '../../components/Education/education'
import Hero from '../../components/hero/hero'
import Project from '../../components/project/project'
import Skills from '../../components/skills/skills'
import classes from './landing.module.css'
const Landing = () => {
    return (
        <div className={classes.main}>
            <Hero />
            <AboutMe />
            <Education />
            <Project/>
        </div>
    )
}

export default Landing;