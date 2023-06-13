import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particlesjs = () => {
  const particlesInit = async (main) => {
    //console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    //console.log(container);
  };
  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{           
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {enable: false,},
          onHover: {
            enable: true,
            mode: "repulse",           
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 80,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#de5145", "#ffce44", "#19a15f", "#56a8f4"]
        },
        links: {
          enable: false,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value:7
        },
        opacity: {
          value: 0.6,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value:10,
        },
      },
      detectRetina: true,
    }}
    />
  );
};
export default Particlesjs;