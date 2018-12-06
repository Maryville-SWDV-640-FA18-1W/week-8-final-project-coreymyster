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
      },
      {
        name: "Furniture",
      },
      {
        name: "Contact Us"
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
  })
  $("#target").html(rendered);
});
