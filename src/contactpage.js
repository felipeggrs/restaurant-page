import "./styles.css";
import contactImg from "./contactImg.jpg";

function contactPage() {
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
  pageImage.setAttribute("id", "pageImage");
  pagePara.textContent =
    "Welcome to Felipe's trattoria! The only place you can get amazing pasta at an affordable price.";

  // appending children to parents
  document.body.appendChild(pageContainer);
  pageContainer.appendChild(contentContainer);
  contentContainer.appendChild(pageHead);
  contentContainer.appendChild(pageImage);
  contentContainer.appendChild(pagePara);
}

export default contactPage;
