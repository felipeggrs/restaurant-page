import "./styles.css";
import Background from "./bg.jpg";

function homePage() {
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
  pageImage.setAttribute("id", "pageImage");
  pagePara.setAttribute("class", "centeredPara");
  pagePara.textContent =
    "Step into the flavorful realm of Felipe's trattoria, where pasta dreams become an affordable reality. Your pasta paradise awaits!";

  // appending children to parents
  document.body.appendChild(pageContainer);
  pageContainer.appendChild(contentContainer);
  contentContainer.appendChild(pageHead);
  contentContainer.appendChild(pageImage);
  contentContainer.appendChild(pagePara);
}

export default homePage;
