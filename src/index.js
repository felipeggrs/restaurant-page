import "./styles.css";
import Background from "./bg.jpg";

const imgContainer = document.getElementById("bgImg");
imgContainer.setAttribute("style", `background-image: url(${Background})`);

console.log("The index.js file and webpack are working correctly!");
