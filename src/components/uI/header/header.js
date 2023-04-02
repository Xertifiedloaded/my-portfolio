import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { navItems } from '../../../constant/constant';
import classes from './header.module.css'
import close from '../../../assets/image/icon-close-menu.svg'
import open from '../../../assets/image/icon-menu.svg'
const Header = () => {
    const [toggle, SetToggle] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth) // it will add the value od window width//

    const toggler = () => {
        SetToggle(!toggle)
    }
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)
    }, [])
    return (
        <>
            <div className={classes.main}>
                <div className={classes.header}>
                    <div className={classes.logo}>
                        <Link to="/">
                            OLAITAN
                        </Link>
                    </div>
                    <div className={classes.mobile} onClick={toggler}>
                        {toggle ? <img src={close} alt="" /> : <img src={open} alt="" />}
                    </div>

                    {
                        (toggle || screenWidth > 600) &&
                        <nav className='nav'>
                            {
                                navItems.map((items, i) => (
                                    <Nav toggler={toggler} {...items} key={i} />
                                ))
                            }
                        </nav>
                    }
                </div>
            </div>
        </>
    )
}

export default Header;
const Nav = ({ content, toggler }) => {
    return (
        <>

            <Link onClick={toggler}>
                {content}
            </Link>

        </>
    )
}