
function play(str) {

  if (str === "q" || str === "Q") {
    document.getElementById('display').innerText = "Hurt - Johnny Cash";
  } else if (str === "w" || str === "W") {
    document.getElementById('display').innerText = "San Quentin - Johnny Cash";
  } else if (str === "e" || str === "E") {
    document.getElementById('display').innerText = "God's Gonna Cut You Down - Johnny Cash";
  } else if (str === "a" || str === "A") {
    document.getElementById('display').innerText = "Folsom Prison Blues - Johnny Cash";
  } else if (str === "s" || str === "S") {
    document.getElementById('display').innerText = "I Got Stripes - Johnny Cash";
  } else if (str === "d" || str === "D") {
    document.getElementById('display').innerText = "I Hung My Head - Johnny Cash";
  } else if (str === "z" || str === "Z") {
    document.getElementById('display').innerText = "I'm Going To Jackson - Johnny Cash";
  } else if (str === "x" || str === "X") {
    document.getElementById('display').innerText = "I Walk The Line - Johnny Cash";
  } else if (str === "c" || str === "C") {
    document.getElementById('display').innerText = "Man In Black - Johnny Cash";
  }

  var audio = document.getElementById(str);
  audio.play();
}

window.document.onkeyup = function(event) {
  let keystroke = event.key
  if (keystroke === "q" || keystroke === "Q") {
    play("Q");
  } else if (keystroke === "w" || keystroke === "W") {
    play("W");
  } else if (keystroke === "e" || keystroke === "E") {
    play("E");
  } else if (keystroke === "a" || keystroke === "A") {
    play("A");
  } else if (keystroke === "s" || keystroke === "S") {
    play("S");
  } else if (keystroke === "d" || keystroke === "D") {
    play("D");
  } else if (keystroke === "z" || keystroke === "Z") {
    play("Z");
  } else if (keystroke === "x" || keystroke === "X") {
    play("X");
  } else if (keystroke === "c" || keystroke === "C") {
    play("C");
  }
}
