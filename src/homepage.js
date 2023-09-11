import "./styles.css";
import Background from "./bg.jpg";
import BodyBackground from "./bodyBackground.jpg";

function homePage(container) {
  // creating each element
  const pageContainer = document.createElement("div");
  const contentContainer = document.createElement("div");
  const pageHead = document.createElement("h1");
  const pageImage = document.createElement("div");
  const pagePara = document.createElement("p");

  // setting each element's attributes
  pageContainer.setAttribute("id", "pageContainer");
  contentContainer.setAttribute("id", "content");
  pageHead.textContent = "Felipe's Trattoria";
  pageImage.setAttribute("style", `background-image: url(${Background})`);
  document.body.setAttribute(
    "style",
    `background-image: url(${BodyBackground})`
  );
  pageImage.setAttribute("id", "pageImage");
  pagePara.setAttribute("class", "centeredPara");
  pagePara.textContent =
    "Welcome to Felipe's Trattoria, where pasta is not just a meal; it's a passionate love affair! 🍝💕 Step through our doors and embark on a mouthwatering journey into the flavorful realm of Italian cuisine. We're not here to just feed you; we're here to serenade your taste buds with symphonies of flavor! Picture this: You, cozy in our trattoria, as tantalizing aromas dance in the air, and the very essence of Italy fills your senses. At Felipe's, we believe that pasta dreams should not remain dreams but should become an affordable reality for all. That's right, our pasta paradise is not just a destination; it's an invitation to savor the finest Italian dishes without breaking the bank. From the classic spaghetti that'll twirl its way into your heart to the risotto that's pure creamy poetry, our menu is a love letter to Italian cuisine. And it's not just about the food; it's about the experience. So bring your appetite, your friends, and your inner Italian, and let's make some pasta magic together. Your taste adventure begins here. Buon appetito! 🇮🇹🍷🍕";

  // appending children to parents
  container.appendChild(pageContainer);
  pageContainer.appendChild(contentContainer);
  contentContainer.appendChild(pageHead);
  contentContainer.appendChild(pageImage);
  contentContainer.appendChild(pagePara);
}

export default homePage;
