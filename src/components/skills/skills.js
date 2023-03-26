import React from 'react'
import classes from './skills.module.css'
import js from '../../assets/image/javascript--v1.png'
import ReactApp from '../../assets/image/react.png'
import Miu from '../../assets/image/material-ui.png'
import css from '../../assets/image/css3.png'
import github from '../../assets/image/github.png'
import html from '../../assets/image/html-5--v1.png'
import wordpress from '../../assets/image/wordpress.png'


const Skills = () => {
  return (


      <div className={classes.imgContainer}>
        <img src={js} alt="" />
        <img src={ReactApp} alt="" />
        <img src={Miu} alt="" />
        <img src={css} alt="" />
        <img src={github} alt="" />
        <img src={html} alt="" />
        <img src={wordpress} alt="" />
      </div>



   
  )
}

export default Skills;