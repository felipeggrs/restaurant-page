import "./styles.css";
import homePage from "./homepage";
import menuPage from "./menupage";
import contactPage from "./contactpage";

function tabButtons() {
  const btnContainer = document.createElement("div");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  btnContainer.setAttribute("class", "btnContainer");
  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  contactBtn.textContent = "Contact";

  const mainContainer = document.createElement("div");
  mainContainer.setAttribute("class", "mainContainer");

  btnContainer.appendChild(homeBtn);
  btnContainer.appendChild(menuBtn);
  btnContainer.appendChild(contactBtn);
  mainContainer.appendChild(btnContainer);
  document.body.prepend(mainContainer);

  return {
    mainContainer,
    btnContainer,
    homeBtn,
    menuBtn,
    contactBtn,
  };
}

const buttons = tabButtons();

homePage(buttons.mainContainer);

buttons.homeBtn.addEventListener("click", () => {
  document.body.innerHTML = "";
  buttons.mainContainer.innerHTML = "";
  homePage(buttons.mainContainer);
  document.body.prepend(buttons.mainContainer);
  buttons.mainContainer.prepend(buttons.btnContainer);
  console.log("Switched to Home");
});

buttons.menuBtn.addEventListener("click", () => {
  document.body.innerHTML = "";
  buttons.mainContainer.innerHTML = "";
  menuPage(buttons.mainContainer);
  document.body.prepend(buttons.mainContainer);
  buttons.mainContainer.prepend(buttons.btnContainer);
  console.log("Switched to Menu");
});

buttons.contactBtn.addEventListener("click", () => {
  document.body.innerHTML = "";
  buttons.mainContainer.innerHTML = "";
  contactPage(buttons.mainContainer);
  document.body.prepend(buttons.mainContainer);
  buttons.mainContainer.prepend(buttons.btnContainer);
  console.log("Switched to Contact");
});
