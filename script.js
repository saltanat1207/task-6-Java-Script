document.body.style.margin = "0";
document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.fontFamily = "https://fonts.google.com/specimen/Outfit"
document.body.fontWeight ='300, 400, 600';
document.body.fontSize = "18px";
//wrapper
let wrapper = document.createElement('div');
wrapper.id = "wrapper"
wrapper.style.margin = "0 auto";
wrapper.style.maxWidth = "1440px";
wrapper.style.display = "flex";
wrapper.style.justifyContent = "center";
wrapper.style.marginTop = "100px";
//card
let card = document.createElement('div');
card.className= "card";
card.style.padding = "20px 20px";
card.style.borderRadius = "20px";
card.style.backgroundColor = "hsl(216, 50%, 16%)";
card.style.boxShadow = "3px 12px 20px rgba(0,0,0,0.25), 5px 12px 12px rgba(0,0,0,0.22)";
//img
let cardImage = document.createElement("img");
cardImage.className = "card-image";
cardImage.src="image-equilibrium.jpg";
cardImage.style.maxWidth = "300px";
cardImage.style.borderRadius = "10px";
cardImage.style.marginBottom = "15px";
//title
let title = document.createElement("h3");
title.className = "card-title";
title.innerText = "Equilibrium #3429";
title.style.margin = "0";
title.style.color = "hsl(0, 0%, 100%)";
title.style.marginBottom ="17px";
//subtitle
let subtitle = document.createElement("p");
subtitle.className = "card-subtitle";
subtitle.innerText = "Our Equilibrium collection promotes balance and calm";
subtitle.style.margin = "0";
subtitle.style.maxHeight = "300px";
subtitle.style.color = "hsl(215, 51%, 70%)";
subtitle.style.fontSize = "300";
subtitle.style.lineHeight = "25px";
subtitle.style.marginBottom = "15px";

let items = document.createElement("div");
items.style.display = "flex";
items.style.justifyContent = "space-between";

let value = document.createElement("div");
value.className = "card-value";

let icon = document.createElement("img");
icon.className = "icon-value";
icon.src = "icon-ethereum.svg";
icon.style.marginRight="5px";

let valueText = document.createElement("p");
valueText.className = "value-text";
valueText.innerHTML="0.041 ETH";
valueText.style.margin = "0";
valueText.style.display = "inline-block";
valueText.style.color = "hsl(178, 100%, 50%)";
valueText.style.fontWeight = "bold";

let timeItems = document.createElement("div");
timeItems.className = "time";
timeItems.style.display = "flex";
timeItems.style.alignItems = "center";
timeItems.style.marginBottom = "17px"

let timeImage = document.createElement("img");
timeImage.className= "time-img";
timeImage.src = "icon-clock.svg";
timeImage.style.marginRight = "5px";

let timeItem = document.createElement("time");
timeItem.className = "time-item";
timeItem.innerHTML = "3 days left";
timeItem.style.color = "hsl(215, 51%, 70%)";

let line = document.createElement("hr");
line.style.borderColor = "hsl(215, 32%, 27%)";

let user = document.createElement("div");
user.className = "user";
user.style.marginTop = "22px";
user.style.display = "flex";
user.style.alignItems = "center";

let userImg = document.createElement("img");
userImg.className = "avatar";
userImg.src="image-avatar.png";
userImg.style.maxWidth = "45px";
userImg.style.marginRight = "15px";
userImg.style.border = "2px solid white";
userImg.style.borderRadius = "50%";

let userText = document.createElement("span");
userText.className = "user-text";
userText.innerHTML = "Creation of";
userText.style.color = "hsl(215, 51%, 70%)";
userText.style.textAlign = "center";
let userName = document.createElement("span");
userName.className = "userName";
userName.innerHTML = " Jules Wyvern"
userName.style.color = "white";
  
document.body.appendChild(wrapper);
wrapper.appendChild(card);
card.appendChild(cardImage);
card.appendChild(title);
card.appendChild(subtitle);
card.appendChild(items);
items.appendChild(value);
value.appendChild(icon);
value.appendChild(valueText);
items.appendChild(timeItems);
timeItems.appendChild(timeImage);
timeItems.appendChild(timeItem)
card.appendChild(line);
card.appendChild(user);
user.appendChild(userImg);
user.appendChild(userText);
userText.appendChild(userName);

console.log(card);
alert("Я оцениваю свою работу на 100 баллов")


























