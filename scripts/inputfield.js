import { makeElements, getElements } from "./elements.js";
import ajax from "./ajax.js";
import createCard from "./card.js";

ajax("https://api.exchangeratesapi.io/latest?base=USD&symbols=", (data) => {
  let parsed_data = JSON.parse(data);
  console.log(parsed_data);
  console.log(parsed_data.rates.KRW);
  inputField(parsed_data);
});

const inputField = (data) => {
  // Query Container
  let queryContainer = makeElements("div", { class: "query" });
  // Creating Base Currency
  let baseLabel = makeElements("label", { for: "base" });
  baseLabel.innerText = "Measuring Currency";
  let baseInput = makeElements("select", { id: "base", name: "base" });
  // Creating Starting Input
  let startingLabel = makeElements("label", { for: "start" });
  startingLabel.innerText = "Starting Currency";
  let startingInput = makeElements("select", { id: "start", name: "start" });
  // Creating Target Input
  let targetLabel = makeElements("label", { for: "target" });
  targetLabel.innerText = "Target Currency";
  let targetInput = makeElements("select", { id: "target", name: "target" });
  // Wrapped Inputs in DIV Class currency-selection
  let inputContainers = makeElements("div", {
    class: "currency-selection",
    id: "cs",
  });
  let grabButton = makeElements("button", {
    innerText: "Grab Rates",
    id: "grab-rates",
    name: "grab-rates",
  });
  inputContainers.append(
    startingLabel,
    startingInput,
    targetLabel,
    targetInput,
    baseLabel,
    baseInput,
    grabButton
  );

  let body = getElements("body");
  queryContainer.append(inputContainers);
  body.append(queryContainer);

  selectOption(startingInput, data);
  selectOption(targetInput, data);
  selectOption(baseInput, data);

  grabButton.addEventListener("click", () => {
    ajax(
      `https://api.exchangeratesapi.io/latest?base=${baseInput.value}&symbols=${startingInput.value},${targetInput.value}`,
      (data) => {
        let newData = JSON.parse(data);
        createCard(startingInput, targetInput, newData);
      }
    );
  });
};
inputField;

// Creating Functions to add Currencies to Base and Target Inputs
export const selectOption = (input, item) => {
  let selectChoice = makeElements("option", { value: "" });
  selectChoice.innerText = "--Please Select Your Currency--";
  input.append(selectChoice);
  for (item in item.rates) {
    let currencyOptions = makeElements("option", { value: item });
    currencyOptions.innerText = item;
    input.append(currencyOptions);
  }
};

// Function to grab rates
// const getRates = grabButton.addEventListener("submit",() => {
//     let results = [...evt.target.elements]
//     .filter(param=>param.name)
//     .map(p=>({name:p.name, value:p.value}))
//     // let base = Need id.value of base currency id:base
//     // Let start = Need id.value of starting currency id:start
//     // let target = Need id.value of targetInput id:target
//     for (i=0;i < results.length;i++){

//     }

//     ajax(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${start}${target}`, (data) => {
//     let parsed_data = JSON.parse(data).rates
//     let rates = parsed_data.rates
//     for (value in rates){
//         if(value === startingInput){"append rates[value] to card display"}
//         if(value === targetInput){"append rates[value] to card display"}
//     };
//     console.log(parsed_data);
// })})

// let optArray = ["Male", "Female"];
// let select = document.createElement("select");
// select.append(
//   ...optArray.map((g) => {
//     let opt = document.createElement("option");
//     opt.value = g;
//     opt.innerText = g;
//     return opt;
//   })
// );
// let button = document.createElement("button");
// button.innerText = "Add User";
// button.addEventListener("click", () => {
//   ajax(corsFix + `https://randomuser.me/api/?gender=${select.value}`, (res) =>
//     JSON.parse(res).results.forEach(makeCard)
//   );
// });
// const root = document.querySelector("#root");
// root.append(select, button);
