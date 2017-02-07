(function(){
    angular
      .module("turtleFacts")
      .factory("DataService", DataFactory);

      function DataFactory() {
        var dataObj = {
          turtlesData: turtlesData,
          quizQuestions: quizQuestions,
          correctAnswers: correctAnswers
        };
        return dataObj;
      }

      var turtlesData = [
        {
          type: "African Sideneck Turtle",
          image_url: "turtles/african_sideneck_turtle.jpeg",
          locations:  "Eastern and Southern Africa.",
          size: "Upto 1.5m and 60-80kg",
          average_lifespan: "75years",
          diet: "Herbivore",
          description: "African Sideneck Turtles are freshwater turtles. They were originally discovered in Eastern and Southern Africa. Fortunately, these turtles are not listed on the endangered species list, so acquiring one should not be too difficult. These reptiles are most active during the day time and have a lifespan of 25+ years! The shell of an African Sideneck Turtle can grow anywhere from eight to upwards of eighteen inches. So, this species is on the larger end of the spectrum for pet turtles."
        },
        {
          type: "Alligator Snapping Turtle",
          image_url:"turtles/alligator_snapping_turtle.jpeg",
          locations:  "Southeast Georgia, West to Texas, North to Iowa and Indiana.",
          size: "Upto 1.2m and 50kg",
          average_lifespan: "90years",
          diet: "Herbivore",
          description: "They are known by Alligator snapping turtle. In some parts of the country they are also called as snapping turtle as well. That said, there is major difference between a snapping turtle and alligator snapping turtle. The later is much heavier in size and have a tremendously powerful jaw. The jaw bone is of very high strength."
        },
        {
          type: "Box Turtle",
          image_url:"turtles/box_turtle.jpeg",
          locations:  "United States and Mexico, Eastern region of globe.",
          size: "Around 1m and 90kg",
          average_lifespan: "60years",
          diet: "Carnivore",
          description: "Because most wild turtles live in climates that have a wide range of temperatures, they need to hibernatethree to five months out of the year in order to stay alive. During these cold temperature spells, food is not as plentiful and the weather does not permit normal bodily functioning. It is during this time turtles tuck themselves tightly into their uniquely hatched shells and stay sheltered until spring. While some may assume this is a safe period, it is actually quite dangerous. These turtles must retain minimal bodily functions: digestion stops, heart rate slows, and eye movement ceases. This period is common for turtle deaths."
        },
        {
          type: "Eastern Snake Necked Turtle",
          image_url:"turtles/eastern_snake_necked_turtle.jpeg",
          locations:  "Eastern China and Asia and some tropical regions of Africa",
          size: "Upto 1.8m and 85-100kg",
          average_lifespan: "110years",
          diet: "Herbivore",
          description: "It primarily eats aquatic insects, fish, tadpoles, and frogs. When hunting the Snake necked turtled approaches with its neck held sideways thrusting its open mouth to grasp its prey and uses its jaws to shred its food into smaller pieces."
        },
        {
          type: "Indian Peacock Softshelled Turtle",
          image_url:"turtles/indian_peacock_softshelled_turtle.jpeg",
          locations:  "India.",
          size: "1.6m and 70kg",
          average_lifespan: "100years",
          diet: "Herbivore",
          description: "The Indian Peacock Turtle is Generally found in India. It is currently listed as a vulnerable species. We are searching to find more information on this species of turtle."
        },
        {
          type: "Musk Turtle",
          image_url:"turtles/musk_turtle.jpeg",
          locations:  "Southern Canada and the Eastern United States.",
          size: "Upto 1.5m and 60-80kg",
          average_lifespan: "75years",
          diet: "Carnivore",
          description: "Musk turtles are one of the most famous turtles known to be a pet. These species are mostly found in Southern Canada and the Eastern United States. They are also called the Stinkpot. It got its name as stinkpot because it can release a foul and musky odor from its anal canal in order to dissuade predators."
        },
        {
          type: "Reeves Turtle",
          image_url:"turtles/reeves_turtle.jpeg",
          locations:  "East Asian contries like China, Korea, Japan, and Taiwan.",
          size: "Upto 1m and 40kg",
          average_lifespan: "60years",
          diet: "Carnivore",
          description: "Originally from China, these turtles are primarily found in Eastern Asia and their range spans China, Korea, Japan, and Taiwan. They are also known as the Chinese pond turtle or Chinese three keeled turtle. They are pond turtle that prefer sluggish waters with soft bottoms, abundant aquatic vegetation and plenty of basking sites. They have also been found in marshes, swamps, and even rice paddies. Waddling pools or Koi ponds make excellent Reeves turtle habitats for they are not the best of swimmers."
        },
        {
          type: "Eastern Spiny Softshell Turtle",
          image_url:"turtles/eastern_spiny_softshell_turtle.jpeg",
          locations:  "West Virginia, west of the mountains.",
          size: "Upto 2.6m and 110kg",
          average_lifespan: "70years",
          diet: "Herbivore",
          description: "Spiny softshells begin mating between ages 8 and 10. A large female turtle may live up to 50 years. The turtles mate in mid-to-late spring in deep water. The male will nudge the female's head while swimming, and if she chooses to mate, the male will swim above the female without clasping her with his claws (unlike other turtles). A few months later, the female turtle quickly lays her eggs along a sunny sandbar or gravel bank in a flask-shaped cavity she has dug close to the water. The turtle nests more than once during a single season. She can lay between 9 and 38 round, calcareous-shelled eggs."
        }
      ];
      var correctAnswers = [2,3,0,1,1,3];

      var quizQuestions = [
        {
          type: "text",
          text: "How much can a loggerhead weigh?",
          possibilities: [
            {
              answer: "Up to 20kg"
            },
            {
              answer: "Up to 115kg"
            },
            {
              answer: "Up to 220kg"
            },
            {
              answer: "Up to 500kg"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "What is the typica lifespan of a Green Sea Turtle?",
          possibilities: [
            {
              answer: "150 years"
            },
            {
              answer: "10 years"
            },
            {
              answer: "80 years"
            },
            {
              answer: "40 years"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "image",
          text: "Which of these is the Alligator Snapping Turtle?",
          possibilities: [
            {
              answer: "turtles/african_sideneck_turtle.jpeg"
            },
            {
              answer: "turtles/alligator_snapping_turtle.jpeg"
            },
            {
              answer: "turtles/box_turtle.jpeg"
            },
            {
              answer: "turtles/eastern_snake_necked_turtle.jpeg"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "image",
          text: "Which of these is the Eastern Snake Necked Turtle?",
          possibilities: [
            {
              answer: "turtles/african_sideneck_turtle.jpeg"
            },
            {
              answer: "turtles/alligator_snapping_turtle.jpeg"
            },
            {
              answer: "turtles/box_turtle.jpeg"
            },
            {
              answer: "turtles/eastern_snake_necked_turtle.jpeg"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "What is the most common turtle in US waters?",
          possibilities: [
            {
              answer: "Loggerhead Turtle"
            },
            {
              answer: "Leatherback Turtle"
            },
            {
              answer: "Hawksbill Turtle"
            },
            {
              answer: "Alligator Snapping Turtle"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "What is the largest sea turtle on earth?",
          possibilities: [
            {
              answer: "Eastern Snake Necked Turtle"
            },
            {
              answer: "Olive Ridley Sea Turtle"
            },
            {
              answer: "Kemp's Ridley Sea Turtle"
            },
            {
              answer: "Leatherback"
            }
          ],
          selected: null,
          correct: null
        },
      ];
})();
