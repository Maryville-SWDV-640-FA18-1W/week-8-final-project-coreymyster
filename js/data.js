$(document).ready(function() {
  var template = $("#template").html();
  Mustache.parse(template);


  var rendered = Mustache.render(template, {
    logo: {
      primary: "img/quality-wood-furniture-logo.png",
      white: "img/quality-wood-furniture-logo-white.png"
    },
    navigation: [
      {
        name: "About",
        link: "about-us.html"
      },
      {
        name: "Furniture",
        link: "furniture.html"
      },
      {
        name: "Contact Us",
        link: "contact.html"
      }
    ],
    home: {
      img: "img/dining-room-table.png",
      h1: "Quality Built Wood Furniture",
      description: "The quality of furniture today is quickly deteriorating. Furniture in stores these days is mostly made up of engineered, hollow wood. What happened to solid, natural stained furniture that holds up for a lifetime? We build all of our furniture from solid wood and craft stable timeless pieces. We are what we build. We are Quality Built Wood Furniture.",
      testimonials: [
        {
          message: "It's so nice to have quality built furniture that I can use without worrying if it will give out over the course of a few years! Quality Wood Furniture is built like it's named!",
          name: "Samantha",
          location: "Springfield, MO"
        },
        {
          message: "It's not just the quality of the final product, but the fact that I finally have some solid furniture. Sometimes you go to furniture stores nowadays and it's hollow engineered wood.",
          name: "Brad",
          location: "Hermann, MO"
        }
      ],
    },
    furnitureHome: {
      bookshelf: "img/bookshelf.png",
      barnDoor: "img/barn-door.png",
      clock: "img/clock.png"
    },
    about: {
      img: "img/about-banner.png",
      h1: "About Us",
      description: "Our company was built on a passion for building things that were quality made. Our name says it all: 'Quality Wood Furniture'. Wood furniture built today typically uses engineered and hollow wood that can be exposed to cracking and easy wear. We use solid wood to build all types of furniture. If our clients want a new table for their dining room, new shelving for their great room, or a barn door then we can build it. We also provide the ability for clients to choose the stain or paint color of their preference. We've been building furniture for years now and take pride in every piece we build. Ultimately nothing makes us happy more than seeing our clients happy. If you're interested to learn more, or would like to plan out your piece of furniture, then we encourage you to contact us and we'll be happy to help!"
    },
    contact: {
      h1: "Contact Us",
      description: "Have a question for us, want to find out pricing information for a specific piece, or want to get in touch on your next furniture future piece? Fill out the form below and we'll be in touch!"
    },
      greatRoom: {
        clocks: [
          {
            furnitureName: "Clock",
            imgSM: "img/clock.png",
            imgLG: "img/clock-wide.png",
            description: "Our clocks are built to suit your room in any size, shape or color of your preferences. The clocks are built with solid 1x6 pieces of wood for a sturdy hold. Contact us today to tell us a little bit more about what you're looking for in a clock for your home, and we can provide you a free quote.",
            link: "furniture/clock.html"
          }
        ],
        bookshelves: [
          {
            furnitureName: "Bookshelf",
            imgSM: "img/bookshelf.png",
            imgLG: "img/bookshelf-wide.png",
            description: "Our bookshelves are built to suit your room in any size, shape or color of your preferences. The bookshelves are built with solid 1x12 and 2x2 pieces of wood for a sturdy hold. Contact us today to tell us a little bit more about what you're looking for in a bookshelf in your home, and we can provide you a free quote.",
            link: "furniture/bookshelf.html"
          }
        ],
        tables: [
          {
            furnitureName: "Display Table",
            imgSM: "img/display-table.png",
            imgLG: "img/display-table-wide.png",
            description: "Our display tables are built to suit your room in any size, shape or color of your preferences. The display tables are built with solid 1x6 and 2x4 pieces of wood for a sturdy hold. Contact us today to tell us a little bit more about what you're looking for in a display table for your home, and we can provide you a free quote.",
            link: "furniture/display-table.html"
          }
        ]
      },
      diningRoom: {
        table: [
          {
            furnitureName: "Dining Room Table",
            imgSM: "img/dining-table-square.png",
            imgLG: "img/dining-room-table.png",
            description: "Our tables are built to suit your room in any size, shape or color of your preferences. The tables are built with solid 1x4, 1x6, 2x4 and 4x4 pieces of wood for a sturdy hold. Contact us today to tell us a little bit more about what you're looking for in a table in your home, and we can provide you a free quote.",
            link: "furniture/rustic-dining-room-table.html"
          }
        ],
        shelves: [
          {
            furnitureName: "Shelves",
            imgSM: "img/kitchen-shelves.png",
            imgLG: "img/kitchen-shelves-wide.png",
            description: "Our shelves are built to suit your room in any size, shape or color of your preferences. The shelves are built with solid 1x4 and 1x6 pieces of wood for a sturdy hold. Contact us today to tell us a little bit more about what you're looking for in shelving for your home, and we can provide you a free quote.",
            link: "furniture/kitchen-shelves.html"
          }
        ],
        doors: [
          {
            furnitureName: "Barn Door",
            imgSM: "img/barn-door.png",
            imgLG: "img/barn-door-wide.png",
            description: "Our barn doors are built to suit your room in any size, shape or color of your preferences. The doors are built with solid 1x4, 1x6, and 1x8 pieces of wood for a sturdy hold. Contact us today to tell us a little bit more about what you're looking for in a barn door in your home, and we can provide you a free quote.",
            link: "furniture/barn-door.html"
          }
        ]
      }
  })
  $("#target").html(rendered);
});
