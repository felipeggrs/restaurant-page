import "./styles.css";
import menuImg from "./menuImg.jpg";
import foodOne from "./foodOne.jpg";
import foodTwo from "./foodTwo.jpg";
import foodThree from "./foodThree.jpg";
import foodFour from "./foodFour.jpg";
import foodFive from "./foodFive.jpg";

function menuPage(container) {
  // creating each element
  const pageContainer = document.createElement("div");
  const contentContainer = document.createElement("div");
  const pageHead = document.createElement("h1");
  const pageImage = document.createElement("div");
  const pagePara = document.createElement("p");

  const foodOneContainer = document.createElement("div");
  const foodTwoContainer = document.createElement("div");
  const foodThreeContainer = document.createElement("div");
  const foodFourContainer = document.createElement("div");
  const foodFiveContainer = document.createElement("div");

  const foodOneHeader = document.createElement("h3");
  const foodTwoHeader = document.createElement("h3");
  const foodThreeHeader = document.createElement("h3");
  const foodFourHeader = document.createElement("h3");
  const foodFiveHeader = document.createElement("h3");

  const pageFoodOne = document.createElement("div");
  const pageFoodTwo = document.createElement("div");
  const pageFoodThree = document.createElement("div");
  const pageFoodFour = document.createElement("div");
  const pageFoodFive = document.createElement("div");

  const paraFoodOne = document.createElement("p");
  const paraFoodTwo = document.createElement("p");
  const paraFoodThree = document.createElement("p");
  const paraFoodFour = document.createElement("p");
  const paraFoodFive = document.createElement("p");

  // setting each element's attributes
  contentContainer.setAttribute("id", "content");
  pageHead.textContent = "Felipe's Trattoria";
  pageImage.setAttribute("style", `background-image: url(${menuImg})`);
  pageImage.setAttribute("class", "pageImage");
  pagePara.textContent =
    "Prepare to have your taste buds transported to the enchanting landscapes of Italy! Behold an exquisite collection of Italian pasta that's more than just a meal – it's a tantalizing journey for your senses. From spaghetti that's so captivating it should be in a romance novel to ravioli that will have you saying 'Ciao, reality!', get ready to indulge in pasta creations that not only amaze but also magically fulfill your wildest culinary dreams. Your taste buds are in for an Italian adventure that's like a gourmet symphony playing just for you!";

  foodOneContainer.setAttribute("class", "pageFoodContainer");
  foodOneHeader.textContent = "Delicious Pizza";
  pageFoodOne.setAttribute("style", `background-image: url(${foodOne})`);
  pageFoodOne.setAttribute("class", "pageFood");
  paraFoodOne.setAttribute("class", "paraFood");
  paraFoodOne.textContent =
    "Italian pizza, a culinary masterpiece, boasts a thin crust sturdy as a Roman colosseum and toppings as diverse as a disco of flamingos. It's a flavor explosion that makes your taste buds dance the cha-cha and your heart exclaim, 'Mamma mia!' Each bite is like a crispy cloud kissed by the sun, and its tomato-red, gelato-creamy, and spicier-than-a-Sicilian-soap-opera toppings will have you imagining gondoliers serenading you on a pizza-lined Grand Canal. It's not just food; it's a carnival of absurdly delicious flavors that'll make you shout, 'Oh la la!'";

  foodTwoContainer.setAttribute("class", "pageFoodContainer");
  foodTwoHeader.textContent = "Amazing Pasta";
  pageFoodTwo.setAttribute("style", `background-image: url(${foodTwo})`);
  pageFoodTwo.setAttribute("class", "pageFood");
  paraFoodTwo.setAttribute("class", "paraFood");
  paraFoodTwo.textContent =
    "Italian pasta, the true diva of the dinner table, waltzes onto your plate with grace and flavor that'll make your taste buds tango. Imagine pasta as tender as a love letter, dressed in sauces richer than a Renaissance painting, and garnished with herbs fresher than a Mediterranean breeze. It's like a culinary symphony conducted by pasta angels, where every twirl of your fork is a note in a delicious opera that sings to your soul.";

  foodThreeContainer.setAttribute("class", "pageFoodContainer");
  foodThreeHeader.textContent = "Outrageous Arancini";
  pageFoodThree.setAttribute("style", `background-image: url(${foodThree})`);
  pageFoodThree.setAttribute("class", "pageFood");
  paraFoodThree.setAttribute("class", "paraFood");
  paraFoodThree.textContent =
    "Arancini, those golden orbs of delight, are like edible treasures straight from an Italian fairy tale. Imagine crispy, golden rice balls with a surprise inside, each one like a culinary magic trick waiting to unfold. As you bite into them, they reveal a symphony of flavors, with creamy risotto, oozy cheese, and a flavorful surprise at the center, all seasoned to perfection. These bite-sized wonders are like the crown jewels of Italian cuisine, a crunchy exterior protecting the flavorful secrets within.";

  foodFourContainer.setAttribute("class", "pageFoodContainer");
  foodFourHeader.textContent = "Forbidden Focaccia";
  pageFoodFour.setAttribute("style", `background-image: url(${foodFour})`);
  pageFoodFour.setAttribute("class", "pageFood");
  paraFoodFour.setAttribute("class", "paraFood");
  paraFoodFour.textContent =
    "Italian dough is so good that it needed a special bread to homage it. Focaccia is an oven-baked Italian bread in between flatbread and pizza. Depending on the region, it may look different, it may have different ingredients and toppings, and even a different name.";

  foodFiveContainer.setAttribute("class", "pageFoodContainer");
  foodFiveHeader.textContent = "Common Italian Cheese";
  pageFoodFive.setAttribute("style", `background-image: url(${foodFive})`);
  pageFoodFive.setAttribute("class", "pageFood");
  paraFoodFive.setAttribute("class", "paraFood");
  paraFoodFive.textContent =
    "There’s so much in the Italian cheese culture that it needs its own list. Cheese has been around the Italian Peninsula for centuries. Ancient Romans created a vast variety of cheeses and experimented with them by smoking, melting, and aging them, giving us the basis of many famous cheeses found today. Strong, soft, creamy, grained, sweet, or salty, how can anyone say no to a good piece of cheese?";

  // appending children to parents
  container.appendChild(pageContainer);
  pageContainer.appendChild(contentContainer);
  contentContainer.appendChild(pageHead);
  contentContainer.appendChild(pageImage);
  contentContainer.appendChild(pagePara);

  contentContainer.appendChild(foodOneContainer);
  foodOneContainer.appendChild(foodOneHeader);
  foodOneContainer.appendChild(pageFoodOne);
  foodOneContainer.appendChild(paraFoodOne);

  contentContainer.appendChild(foodTwoContainer);
  foodTwoContainer.appendChild(foodTwoHeader);
  foodTwoContainer.appendChild(pageFoodTwo);
  foodTwoContainer.appendChild(paraFoodTwo);

  contentContainer.appendChild(foodThreeContainer);
  foodThreeContainer.appendChild(foodThreeHeader);
  foodThreeContainer.appendChild(pageFoodThree);
  foodThreeContainer.appendChild(paraFoodThree);

  contentContainer.appendChild(foodFourContainer);
  foodFourContainer.appendChild(foodFourHeader);
  foodFourContainer.appendChild(pageFoodFour);
  foodFourContainer.appendChild(paraFoodFour);

  contentContainer.appendChild(foodFiveContainer);
  foodFiveContainer.appendChild(foodFiveHeader);
  foodFiveContainer.appendChild(pageFoodFive);
  foodFiveContainer.appendChild(paraFoodFive);
}

export default menuPage;
