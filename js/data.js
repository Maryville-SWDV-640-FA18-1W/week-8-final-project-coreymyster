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
            img: "img/clock.png",
            description: "",
            link: "furniture/clock.html"
          }
        ],
        bookshelves: [
          {
            furnitureName: "Bookshelf",
            img: "img/bookshelf.png",
            description: "",
            link: "furniture/bookshelf.html"
          }
        ],
        tables: [
          {
            furnitureName: "Display Table",
            img: "img/display-table.png",
            description: "",
            link: "furniture/display-table.html"
          }
        ]
      },
      diningRoom: {
        table: [
          {
            furnitureName: "Dining Room Table",
            img: "img/dining-table-square.png",
            description: "img/dining-table-square.png",
            link: "furniture/rustic-dining-room-table.html"
          }
        ],
        shelves: [
          {
            furnitureName: "Shelves",
            img: "img/kitchen-shelves.png",
            description: "",
            link: "furniture/kitchen-shelves.html"
          }
        ],
        doors: [
          {
            furnitureName: "Barn Door",
            img: "img/barn-door.png",
            description: "",
            link: "furniture/barn-door.html"
          }
        ]
      }
  })
  $("#target").html(rendered);
});
