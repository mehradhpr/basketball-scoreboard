// State
let homeCount = 0;
let guestCount = 0;

function increment(id) {
  if (id[0] === "h") {
    const c = parseInt(id[2])
    homeCount += c
    document.getElementById("home-digit").textContent = homeCount
  } else if (id[0] === "g") {
    const c = parseInt(id[2])
    guestCount += c
    document.getElementById("guest-digit").textContent = guestCount
  } else {
    console.error("Error in the increment function")
  }

  // updating the leader
  if (homeCount == 0 && guestCount == 0) {
    document.getElementById("h-section").style.borderColor = "transparent"
    document.getElementById("g-section").style.borderColor = "transparent"
  } else if (homeCount > guestCount) {
    document.getElementById("h-section").style.borderColor = "yellow"
    document.getElementById("g-section").style.borderColor = "transparent"
  } else if (guestCount > homeCount) {
    document.getElementById("h-section").style.borderColor = "transparent"
    document.getElementById("g-section").style.borderColor = "yellow"
  } else {
    document.getElementById("h-section").style.borderColor = "black"
    document.getElementById("g-section").style.borderColor = "black"
  }

}

function newGame() {
  homeCount = 0;
  guestCount = 0;
  document.getElementById("home-digit").textContent = 0
  document.getElementById("guest-digit").textContent = 0

  document.getElementById("h-section").style.borderColor = "transparent"
  document.getElementById("g-section").style.borderColor = "transparent"
}