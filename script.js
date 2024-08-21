document.addEventListener("DOMContentLoaded", function () {
  const close_icon = document.querySelector(".close_icon");
  const game_details = document.querySelector(".game_details");

  close_icon.addEventListener("click", function () {
    game_details.style.display = "none";
  });

  const categoryItem = document.querySelector(".category_item");

  // Sample data for games (you can modify or extend this as needed)
  const gamesData = [
    {
      imgSrc: "CoD.png",
      imgAlt: "CallofDuty",
      link: "magnet:?xt=urn:btih:B86B66CCC2B02D986CF6AB1E0EB84B825C63C5E0&amp;dn=Nine+Sols+%28v202405291148%2Fv202406061731%2C+MULTi5%29+%5BFitGirl+Repack%5D&amp;tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.gbitt.info%3A80%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ccp.ovh%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ccp.ovh%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&amp;tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&amp;tr=https%3A%2F%2Ftracker.tamersunion.org%3A443%2Fannounce&amp;tr=http%3A%2F%2Fopen.acgnxtracker.com%3A80%2Fannounce&amp;tr=http%3A%2F%2Fopen.acgtracker.com%3A1096%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&amp;tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&amp;tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce",
    },
    {
      imgSrc: "gta4.png",
      imgAlt: "GTA4",
      link: "magnet:?xt=urn:btih:18A89755E51616C9E8E904FF360E364DEB4B0922&amp;dn=Red+Dead+Redemption+2%3A+Ultimate+Edition+%28Build+1491.50+%2B+UE+Unlocker%2C+MULTi13%29+%5BFitGirl+Repack%5D&amp;tr=udp%3A%2F%2Fopentor.net%3A6969&amp;tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.gbitt.info%3A80%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ccp.ovh%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ccp.ovh%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&amp;tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&amp;tr=https%3A%2F%2Ftracker.tamersunion.org%3A443%2Fannounce&amp;tr=http%3A%2F%2Fopen.acgnxtracker.com%3A80%2Fannounce&amp;tr=http%3A%2F%2Fopen.acgtracker.com%3A1096%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&amp;tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&amp;tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce",
    },
    {
      imgSrc: "mafia.png",
      imgAlt: "mafia",
      link: "",
    },

    // Add more game data objects as needed
  ];

  // Function to create a game element
  function createGameElement(game) {
    const gameDiv = document.createElement("div");
    gameDiv.classList.add("game");

    const img = document.createElement("img");
    img.classList.add(game.imgAlt.toLowerCase()); // Use game.imgAlt or game.imgSrc as needed
    img.src = game.imgSrc;
    img.alt = game.imgAlt;
    img.className = "Shooting";
    gameDiv.appendChild(img);

    const detailsButton = document.createElement("div");
    detailsButton.classList.add("details_button");
    detailsButton.textContent = "Details";
    detailsButton.onclick = function () {
      openDetails(game.imgSrc, game.link); // Assuming openDetails function is defined elsewhere
    };
    gameDiv.appendChild(detailsButton);

    return gameDiv;
  }

  // Function to add games to category_item
  function addGamesToCategoryItem() {
    if (categoryItem) {
      // Clear existing content
      categoryItem.innerHTML = "";

      // Loop through gamesData and append each game element to categoryItem
      gamesData.forEach(function (game) {
        const gameElement = createGameElement(game);
        categoryItem.appendChild(gameElement);
      });
    } else {
      console.error('Element with class "category_item" not found.');
    }
  }

  // Call the function to add games to category_item
  addGamesToCategoryItem();
});

function openDetails(image, link) {
  const game_details = document.querySelector(".game_details");
  const game_img = document.querySelector(".game_img");
  const download_link = document.querySelector(".download_link");
  game_details.style.display = "flex";
  game_img.src = image;
  download_link.href = link;
}
