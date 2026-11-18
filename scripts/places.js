// const mod = new Date(document.lastModified);

// // Convert to 12-hour format
// let hours = mod.getHours();
// const minutes = mod.getMinutes();

// document.getElementById("lastModified").textContent = document.lastModified;


// const temp = parseFloat(document.getElementById
//   document.getElementById("windchill").textContent = windchill;

document.addEventListener("DOMContentLoaded", () => {
// getting current year
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  // Last Modified Date calculation (12-hour format)
  const lastModified = new Date(document.lastModified);
  const month = String(lastModified.getMonth() + 1).padStart(2, "0");
  const day = String(lastModified.getDate()).padStart(2, "0");
  const year = lastModified.getFullYear();
  let hours = lastModified.getHours();
  const minutes = String(lastModified.getMinutes()).padStart(2, "0");
  const seconds = String(lastModified.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const formattedHours = String(hours).padStart(2, "0");

  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${month}/${day}/${year} ${formattedHours}:${minutes}:${seconds} ${ampm}`;
  }

  // Windchill Calculation with its working formula
  const temp = parseFloat(document.getElementById("temperature").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  const windchillElement = document.getElementById("windchill");

  function calculateWindChill(t, w) {
    // Celsius formula from the Environment of namibia desert
    return (
      13.12 +
      0.6215 * t -
      11.37 * Math.pow(w, 0.16) +
      0.3965 * t * Math.pow(w, 0.16)
    ).toFixed(1);
  }

  if (temp <= 10 && wind > 4.8) {
    windchillElement.textContent = `${calculateWindChill(temp, wind)}°C`;
  } else {
    windchillElement.textContent = "N/A";
  }
});