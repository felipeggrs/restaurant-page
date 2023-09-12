import "./styles.css";
import contactImg from "./contactImg.jpg";

function contactPage(container) {
  // creating each element
  const pageContainer = document.createElement("div");
  const contentContainer = document.createElement("div");
  const pageHead = document.createElement("h1");
  const pageImage = document.createElement("div");
  const pagePara = document.createElement("p");

  // setting each element's attributes
  contentContainer.setAttribute("id", "content");
  pageHead.textContent = "Felipe's Trattoria";
  pageImage.setAttribute("style", `background-image: url(${contactImg})`);
  pageImage.setAttribute("class", "pageImage");
  pagePara.textContent =
    "Ciao! 🍝 Need to reach us? Don't worry, we're not trapped in a pasta maze, but we are here to untangle any spaghetti-related problems you might have. Whether you want to talk pizza toppings, pasta shapes, or just share your deepest lasagna secrets, our tomato-sauce-stained phone lines and cheese-covered email servers are ready for your saucy messages. Feel free to drop us a line, and we promise not to toss your inquiries in the air (unless it's pizza dough). Buon divertimento! 🍕🤣";

  // appending children to parents
  container.appendChild(pageContainer);
  pageContainer.appendChild(contentContainer);
  contentContainer.appendChild(pageHead);
  contentContainer.appendChild(pageImage);
  contentContainer.appendChild(pagePara);
}

export default contactPage;
