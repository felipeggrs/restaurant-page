import "./styles.css";
import homePage from "./homepage";
import menuPage from "./menupage";
import contactPage from "./contactpage";

homePage();

function tabButtons() {
  const btnContainer = document.createElement("div");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  btnContainer.setAttribute("class", "btnContainer");
  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  contactBtn.textContent = "Contact";

  document.body.prepend(btnContainer);
  btnContainer.appendChild(homeBtn);
  btnContainer.appendChild(menuBtn);
  btnContainer.appendChild(contactBtn);

  return {
    btnContainer,
    homeBtn,
    menuBtn,
    contactBtn,
  };
}

const buttons = tabButtons();

buttons.homeBtn.addEventListener("click", () => {
  document.body.innerHTML = "";
  document.body.appendChild(buttons.btnContainer);
  homePage();
  console.log("Switched to Home");
});

buttons.menuBtn.addEventListener("click", () => {
  document.body.innerHTML = "";
  document.body.appendChild(buttons.btnContainer);
  menuPage();
  console.log("Switched to Menu");
});

buttons.contactBtn.addEventListener("click", () => {
  document.body.innerHTML = "";
  document.body.appendChild(buttons.btnContainer);
  contactPage();
  console.log("Switched to Contact");
});
