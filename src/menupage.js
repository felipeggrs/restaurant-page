import "./styles.css";
import menuImg from "./menuImg.jpg";

function menuPage(container) {
  // creating each element
  const pageContainer = document.createElement("div");
  const contentContainer = document.createElement("div");
  const pageHead = document.createElement("h1");
  const pageImage = document.createElement("div");
  const pagePara = document.createElement("p");

  // setting each element's attributes
  contentContainer.setAttribute("id", "content");
  pageHead.textContent = "Felipe's Trattoria";
  pageImage.setAttribute("style", `background-image: url(${menuImg})`);
  pageImage.setAttribute("id", "pageImage");
  pagePara.textContent =
    "Prepare to have your taste buds transported to the enchanting landscapes of Italy! Behold an exquisite collection of Italian pasta that's more than just a meal – it's a tantalizing journey for your senses. From spaghetti that's so captivating it should be in a romance novel to ravioli that will have you saying 'Ciao, reality!', get ready to indulge in pasta creations that not only amaze but also magically fulfill your wildest culinary dreams. Your taste buds are in for an Italian adventure that's like a gourmet symphony playing just for you!";

  // appending children to parents
  container.appendChild(pageContainer);
  pageContainer.appendChild(contentContainer);
  contentContainer.appendChild(pageHead);
  contentContainer.appendChild(pageImage);
  contentContainer.appendChild(pagePara);
}

export default menuPage;
