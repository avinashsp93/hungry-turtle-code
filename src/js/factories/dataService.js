(function(){
    angular
      .module("planetFacts")
      .factory("DataService", DataFactory);

      function DataFactory() {
        var dataObj = {
          planetsData: planetsData,
          quizQuestions: quizQuestions,
          correctAnswers: correctAnswers
        };
        return dataObj;
      }

      var planetsData = [
        {
          name: "Mercury",
          image_url: "planets/mercury.jpg",
          distance: "57.9 million km",
          mass_base: "3.3",
          mass_power:"23",
          diameter: "4878 km",
          temperature: "452 K",
          moon_count: "0",
          description: "Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 88 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods."
        },
        {
          name: "Venus",
          image_url:"planets/venus.jpg",
          distance: "108.2 million km",
          mass_base: "4.87",
          mass_power:"24",
          diameter: "12104 km",
          temperature: "726 K",
          moon_count: "0",
          description: "Venus is the second planet from the Sun, orbiting it every 224.7 Earth days.[13] It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets. It has no natural satellite. It is named after the Roman goddess of love and beauty."
        },
        {
          name: "Earth",
          image_url:"planets/earth.jpg",
          distance: "149.6 million km",
          mass_base: "5.98",
          mass_power:"24",
          diameter: "12756 km",
          temperature: "298K",
          moon_count: "1",
          moon_names: ["Luna"],
          description: "Earth, otherwise known as the world, (Greek: Γαῖα Gaia; Latin: Terra) is the third planet from the Sun and the only object in the Universe known to harbor life. It is the densest planet in the Solar System and the largest of the four terrestrial planets."
        },
        {
          name: "Mars",
          image_url:"planets/mars.jpg",
          distance: "227.9 million km",
          mass_base: "6.42",
          mass_power:"23",
          diameter: "6787 km",
          temperature: "220K",
          moon_count: "2",
          moon_names: ["Phobos", "Deimos"],
          description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, after Mercury. Named after the Roman god of war, it is often referred to as the 'Red Planet'"
        },
        {
          name: "Jupiter",
          image_url:"planets/jupiter.jpg",
          distance: "778.3 million km",
          mass_base: "1.9",
          mass_power:"27",
          diameter: "142796 km",
          temperature: "120K",
          moon_count: "67",
          moon_names: ["Europa","Ganymede","Lo","Callisto","Adrastea","Amalthea","Thebe","Lysithea","Himalia","Kore"],
          description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. Jupiter is a gas giant, along with Saturn, with the other two giant planets, Uranus and Neptune, being ice giants. Jupiter was known to astronomers of ancient times. The Romans named it after their god Jupiter."
        },
        {
          name: "Saturn",
          image_url:"planets/saturn.jpg",
          distance: "1427.0 million km",
          mass_base: "5.69",
          mass_power:"26",
          diameter: "120660 km",
          temperature: "88K",
          moon_count: "62",
          moon_names: ["Titan","Enceladus","Mimas","Lapetus","Dione","Rhea","Tethys","Phoebe","Pandora","Hyperion"],
          description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. Although it has only one-eighth the average density of Earth, with its larger volume Saturn is just over 95 times more massive. Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the god's sickle."
        },
        {
          name: "Uranus",
          image_url:"planets/uranus.jpg",
          distance: "2871.0 million km",
          mass_base: "8.68",
          mass_power:"25",
          diameter: "51118 km",
          temperature: "59K",
          moon_count: "27",
          moon_names: ["Titania","Miranda","Umbriel","Ariel","Trinculo","Oberon","Puck","Cordelia","Francisco","Desdemona"],
          description: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have different bulk chemical composition from that of the larger gas giants Jupiter and Saturn."
        },
        {
          name: "Neptune",
          image_url:"planets/neptune.jpg",
          distance: "4497.1 million km",
          mass_base: "1.02",
          mass_power:"26",
          diameter: "48600 km",
          temperature: "48K",
          moon_count: "13",
          moon_names: ["Triton","S/2004 N 1","Laomedeia","Halimede","Nereid","Galatea","Proteus","Sao","Psamathe","Neso"],
          description: "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet."
        }
      ];
      var correctAnswers = [0,2,1,2,3,0,2,2,2,1,3,0,1,3,1];

      var quizQuestions = [
        {
          type: "text",
          text: "Which is the brightest planet in the solar system?",
          possibilities: [
            {
              answer: "Venus"
            },
            {
              answer: "Mars"
            },
            {
              answer: "Jupiter"
            },
            {
              answer: "Mercury"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "How many moons does the planet Uranus have?",
          possibilities: [
            {
              answer: "13"
            },
            {
              answer: "21"
            },
            {
              answer: "27"
            },
            {
              answer: "32"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "image",
          text: "Which of the following is a moon of the planet Mars?",
          possibilities: [
            {
              answer: "planets/europa_jupiter_moon.jpg"
            },
            {
              answer: "planets/deimos_mars_moon.jpg"
            },
            {
              answer: "planets/s2004n1_neptune_moon.jpg"
            },
            {
              answer: "planets/titan_saturn_moon.jpg"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "image",
          text: "Which among these is not a moon of Saturn?",
          possibilities: [
            {
              answer: "planets/rhea_saturn_moon.jpg"
            },
            {
              answer: "planets/phoebe_saturn_moon.jpg"
            },
            {
              answer: "planets/miranda_uranus_moon.jpg"
            },
            {
              answer: "planets/hyperion_saturn_moon.jpg"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "Why Pluto is not considered as a planet anymore?",
          possibilities: [
            {
              answer: "It had no moons"
            },
            {
              answer: "It was not orbiting around the sun"
            },
            {
              answer: "It did not have enough gravity to be spherical"
            },
            {
              answer: "It did not 'clear the neighborhood' of its orbit"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "How many pluto planets could fit inside the sun?",
          possibilities: [
            {
              answer: "250 million"
            },
            {
              answer: "3 billion"
            },
            {
              answer: "10 million"
            },
            {
              answer: "120 billion"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "Which is the biggest moon in the solar system?",
          possibilities: [
            {
              answer: "Luna"
            },
            {
              answer: "Titan"
            },
            {
              answer: "Ganymede"
            },
            {
              answer: "Triton"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "Astroid belt is situated between which of these planets?",
          possibilities: [
            {
              answer: "Uranus and Neptune"
            },
            {
              answer: "Jupiter and Saturn"
            },
            {
              answer: "Mars and Jupiter"
            },
            {
              answer: "Saturn and Uranus"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "What are Trans-Neptunian Objects?",
          possibilities: [
            {
              answer: "Objects that are part of Astroid belt"
            },
            {
              answer: "Smaller Objects around the rings of Neptune"
            },
            {
              answer: "Planets orbiting around Sun farther than pluto"
            },
            {
              answer: "Collective name given for moons of Neptune"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "How long does the sunlight take to reach Pluto?",
          possibilities: [
            {
              answer: "Instantaneous"
            },
            {
              answer: "Around 5.3 hours"
            },
            {
              answer: "Around 17 hours"
            },
            {
              answer: "Around 4 days and 8 hours"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "How far does the Heliosphere of sun extends?",
          possibilities: [
            {
              answer: "At about 10,000 km from the surface of sun"
            },
            {
              answer: "Till Mercury"
            },
            {
              answer: "Till Earth"
            },
            {
              answer: "Till Neptune and even beyond"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "The clouds of Venus are made of?",
          possibilities: [
            {
              answer: "Sulphuric Acid"
            },
            {
              answer: "Hydrogen and Helium"
            },
            {
              answer: "Hydrochloric Acid"
            },
            {
              answer: "Water and Carbon-Di-Oxide"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "Which of these planets has a retrograde rotation?",
          possibilities: [
            {
              answer: "Mercury"
            },
            {
              answer: "Venus"
            },
            {
              answer: "Earth"
            },
            {
              answer: "Mars"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "Which is the closest star to Earth after Sun?",
          possibilities: [
            {
              answer: "Tau Ceti"
            },
            {
              answer: "Venus"
            },
            {
              answer: "Epsilon Eridani"
            },
            {
              answer: "Proxima Centauri"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "What is the ratio of the photos received to the photos transmitted in Lunar Laser Ranging?",
          possibilities: [
            {
              answer: "1 for every billion"
            },
            {
              answer: "1 for every million trillion"
            },
            {
              answer: "1 for every million billion"
            },
            {
              answer: "1 for every million quadrillion"
            }
          ],
          selected: null,
          correct: null
        }
      ];
})();
