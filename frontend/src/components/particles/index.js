import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import folha1 from '../../assets/img/folha1.png';
// import folha2 from '../../assets/img/begonia.png';
import folha3 from '../../assets/img/folha3.png';

import './styles.css';

function Home() {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

    return (
      <div className="test">
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#f0f8ff",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "bubble",
                        },
                        resize: false,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#000000",
                    },
                    links: {
                        color: "#none",
                        distance: 150,
                        enable: false,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                      enable: true,
                      speed: 1,
                      direction: "bottom",
                      random: false,
                      straight: false,
                      out_mode: "out",
                      attract: {
                        enable: false,
                        rotateX: 100,
                        rotateY: 100
                      }
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 2000,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.9,
                    },
                    shape: {
                      type: "images",
                      stroke: {
                        width: 1,
                        color: "#000000"
                      },
                      polygon: {
                        nb_sides: 40
                      },
                      images:[ 
                        // {
                        //   src: folha2,
                        //   width: '3',
                        //   height: '8'
                        // },
                        {
                          src: folha1,
                          width: 10,
                          height: 10
                        },
                        {
                          src: folha3,
                          width: 10,
                          height: 10
                        },
                      ]
                    },
                    size: {
                        value: { min: 5, max: 20 },
                    },
                },
                detectRetina: true,
            }}
        />
      </div>
    );
  }
  
  export default Home;
  