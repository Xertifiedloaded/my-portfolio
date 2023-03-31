
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import classes from './hero.module.css'
import Olaitan from '../../assets/image/hero.png'
import Typewriter from 'typewriter-effect';
import Social from '../social/social';

const Hero = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <>
            <div className={classes.particle}>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push"
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse"
                                },
                                resize: true
                            },
                            modes: {
                                push: {
                                    quantity: 4
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4
                                }
                            }
                        },
                        particles: {
                            color: {
                                value: "#ffffff"
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1
                            },
                            collisions: {
                                enable: true
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce"
                                },
                                random: false,
                                speed: 1,
                                straight: false
                            },

                            number: {
                                density: {
                                    enable: true,
                                    area: 800
                                },
                                value: 80
                            },
                            opacity: {
                                value: 0.5
                            },
                            shape: {
                                type: "circle"
                            },
                            size: {
                                value: { min: 1, max: 5 }
                            }
                        },
                        detectRetina: true
                    }}
                />
                <section>
                    <div className={classes.main}>
                        <div className={classes.textContent}>
                            <div className={classes.left}>
                                <p>Hello There,</p>
                                <div className={classes.name}>
                                    <p>I'm Makinde </p>
                                    <Typewriter
                                        options={{
                                            strings: ['Olaitan', 'Oreofe'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </div>
                                <Typewriter
                                    options={{
                                        strings: ['FrontEnd Developer', 'Web Developer', 'React Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                            <Social />
                        </div>

                        <div className={classes.right}>
                            <img src={Olaitan} alt="" />
                        </div>
                    </div>
                </section>
            </div>




        </>
    )
}
export default Hero;