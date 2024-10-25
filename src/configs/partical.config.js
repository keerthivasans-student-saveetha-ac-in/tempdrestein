// export const Particle = {
//   "particles": {
//     "number": {
//       "value": 70, // Number of particles
//       "density": {
//         "enable": true,
//         "value_area": 800
//       }
//     },
//     "color": {
//       "value": "#ffffff"
//     },
//     "shape": {
//       "type": "star",
//       "stroke": {
//         "width": 0,
//         "color": "#000000"
//       }
//     },
//     "opacity": {
//       "value": 0.5,
//       "random": false,
//       "anim": {
//         "enable": false
//       }
//     },
//     "size": {
//       "value": 3,
//       "random": true
//     },
//     "line_linked": {
//       "enable": true,
//       "distance": 200,
//       "color": "#ffffff",
//       "opacity": 0.2,
//       "width": 0.5
//     },
//     "move": {
//       "enable": true,
//       "speed": 1,
//       "direction": "none",
//       "random": false,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": true, // Enable attraction
//         "rotateX": 600, // X-axis attraction power
//         "rotateY": 1200 // Y-axis attraction power
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {
//         "enable": true,
//         "mode": "repulse" // Particles will repulse from the mouse
//       },
//       "onclick": {
//         "enable": true,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 60,
//         "line_linked": {
//           "opacity": 0.6
//         }
//       },
//       "bubble": {
//         "distance": 200,
//         "size": 10,
//         "duration": 2,
//         "opacity": 0.8,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 200, // Distance of repulsion from the mouse
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// };


export const Particle = {
  "particles": {
    "number": {
      "value": 60, // Reduced number of particles (25% of 380)
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2, // Reduced speed by 50%
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true, // Enable particle reaction on hover
        "mode": "grab"  // Make particles follow the mouse when hovered
      },
      "onclick": {
        "enable": true, // Enable particle reaction on click
        "mode": "push"  // Add more particles on click
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200, // Increased distance for interaction
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 3  // Add more particles on click
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};