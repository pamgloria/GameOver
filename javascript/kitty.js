const kitty = document.getElementById("kitty");
const house = document.getElementById("sign");

function jump() {
  if (kitty.classList != "jump") {
    kitty.classList.add("jump");

    setTimeout(function () {
      kitty.classList.remove("jump");
    }, 300);
  }
}
        
let isAlive = setInterval(function () {
  // get current kitty Y position
  let kittyTop = parseInt(window.getComputedStyle(kitty).getPropertyValue("top"));

  // get current house X position
  let signLeft = parseInt(
    window.getComputedStyle(sign).getPropertyValue("left")
  );

  // detect collision
  if (signLeft < 50 && signLeft > 0 && kittyTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);


document.addEventListener("keydown", function (event) {
    jump();
  });



