offset = 0;

function displayHand(holderDiv, playerJSON) {
  const SUITS = [
    "hearts",
    "spades",
    "diamonds",
    "clubs"
  ];

  const UNICODE_CARD = {
    "hearts": "&#x2665;",
    "spades": "&#x2660;",
    "clubs": "&#x2663;",
    "diamonds": "&#x2666;"
  };

  var toBeInner = `<h2>${playerJSON['title']}</h2>`;
  toBeInner += SUITS.map(function(suit) {
            return `<p>${UNICODE_CARD[suit]} ${playerJSON[suit]}</p>`
          }).join('\n');

  holderDiv.innerHTML = toBeInner;
}

function defaultDisplay(bridgeHandler, rotate) {
  const DEFAULT_DIVS = [
    "top",
    "right",
    "bottom",
    "left"
  ];

  if (rotate) {
    offset++;
  }
  
  for (var i = 0; i < DEFAULT_DIVS.length; i++) {
    displayHand(document.getElementById(DEFAULT_DIVS[(i + offset) % DEFAULT_DIVS.length]),
      bridgeHandler.getPlayer(i));
  }
}