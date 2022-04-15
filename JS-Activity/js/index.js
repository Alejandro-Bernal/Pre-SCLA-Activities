// controls for changing the background
// create your event listener here
// add the background image change code inside of the event listener

// this is the code for changing a background image
// missing image url
document
  .getElementById("background-btn")
  .addEventListener("click", function () {
    document.getElementById("background").style.backgroundImage =
      "url('./assets/background-two.jpeg')";
  });

// BUTTON CONTROLS

// controls for the left button
document.getElementById("left").addEventListener("click", function () {
  let position = document.getElementById("ball").style.left;

  let newPosition = parseInt(position) - 10;

  document.getElementById("ball").style.left = newPosition + "px";
});

// controls for the right button
// missing element id and event type
document.getElementById("right").addEventListener("click", function () {
  let position = document.getElementById("ball").style.left;

  let newPosition = parseInt(position) + 10;

  document.getElementById("ball").style.left = newPosition + "px";
});
