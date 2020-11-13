import { makeElements, getElements } from "./elements.js";

// Make Card and Appending to Body
export function createCard(start, trgt, input) {
  let body2 = getElements("body");
  let card = makeElements("div", { class: "card" });
  let begInputValue = start.value;

  let start$ = makeElements("div");
  let start$Label = makeElements("h3");
  // let start$Value = makeElements("h5");
  for (let currency in input.rates) {
    if (currency === begInputValue) {
      start$Label.innerText = currency;
      break;
    }
  }
  let start$Value = `${input.rates.begInputValue}`;
  // Troubleshooting
  console.log(begInputValue);
  console.log(start$Value);
  start$.append(start$Label, start$Value);

  let target$ = makeElements("div");
  let target$Label = makeElements("h3");
  let target$Value = makeElements("h3");
  // let b = input.base;
  for (let currency in input.rates) {
    if (currency === trgt.value) {
      target$Label.innerText = currency;
      target$Value = input.rates.currency;
      break;
    }
  }
  target$.append(target$Label, target$Value);

  let remove = makeElements("button");
  remove.innerText = "x";
  remove.addEventListener("click", (evt) => {
    evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
  });

  card.append(remove, start$, target$);
  console.log(start$Label, target$Label);
  body2.append(card);
  // Flags for currencies
  // let flagContainer = makeElements("div", { class: "card-container" });
  // let startFlag = makeElements("div", { id: "start-flag" });
  // let targetFlag = makeElements("div", { id: "target-flag" });
  // flagContainer.append(startFlag, targetFlag);

  // card.append(flagContainer);
}

// ajax("url", res => {
//     let r = JSON.parse(res)
//     r."firsttagname".forEach(makeCardfunction)
// }
// function makeCardfunction(input) {
//   let card = makeElements("div");
//   let name = makeElements("h2");
//   name.innerText = `$(input.firsttagename.secondtagname) $(input.firsttagename.secondtagname)`;

//   let remove = makeElements("button");
//   remove.innerText = "x";
//   remove.addEventListener("onclick", (evt) => {
//     evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
//   });
//   // Adding attributes to card
//   card.append(name, remove);
//   // adding card to body
//   b.append(card);
// }
export default createCard;
