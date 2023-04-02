import { card } from '../../constant/constant';
import classes from './works.module.css'
import { useState } from 'react';
const Works = () => {
    const [active, setActive] = useState(false)
    const toggle = index => {
        if (active == index) {
            return (
                setActive(null)
            )
        }
        setActive(index)
    }
    return (
        <>
            <main>
                <div className={classes.main}>
                    {
                        card.map((items, idx) => (
                            <Cards active={active} toggle={toggle} {...items} key={idx} index={idx} />
                        ))
                    }
                </div>
            </main>
        </>
    )
}

export default Works;
const Cards = ({ image, toggle,name,link ,index,description, active }) => {
    return (
        <>
            <div className={classes.image} onClick={() => toggle(index)} style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 300,
                minWidth: 300,
                border: "1px solid black",
                borderRadius: "20px"
            }}>
                {
                    active === index  ? 
                        <div className={classes.modal}>
                            <h1>{name}</h1>
                            <p className={classes.description}>{description}</p>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <button>Visit</button>
                            </a>
                        </div>
                        : 
                        null 
                }
            </div>
        </>
    )
}