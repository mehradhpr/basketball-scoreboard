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
}