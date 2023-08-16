import "./styles.css";
import Background from "./bg.jpg";

function homePage() {
  const contentContainer = document.getElementById("content");
  const homepageHead = document.createElement("h1");
  const homepageImage = document.createElement("div");
  const homepagePara = document.createElement("p");

  homepageHead.textContent = "Felipe's Trattoria";
  homepageImage.setAttribute("style", `background-image: url(${Background})`);
  homepageImage.setAttribute("id", "homepageImage");
  homepagePara.textContent =
    "Welcome to Felipe's trattoria! The only place you can get amazing pasta at an affordable price.";

  contentContainer.appendChild(homepageHead);
  contentContainer.appendChild(homepageImage);
  contentContainer.appendChild(homepagePara);
}

export default homePage;
