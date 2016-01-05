var quotes = [
  "This is a quote.",
  "So is this.",
  "And another one.",
  "My god, it's full of stars!"
]

function fadeInAndOut(divID, quotes, interval) {
  setInterval(function () {
    $(divID).fadeOut('slow', function() {
      $(this).text(quotes[Math.floor(Math.random() * quotes.length)]);
      $(this).fadeIn('slow');
    });
  }, interval);
}

fadeInAndOut('#quotes', quotes, 3000);