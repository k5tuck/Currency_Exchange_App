const ajax = (url, callback, method='GET')=>{
    if(!url) return console.error("Request Required")
    if(!callback) return console.error("Callback Required")
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", evt=>{
        let req = evt.target;
        if(req.readyState !== 4) return;
        if(req.status === 200) return callback(req.response)
        callback("")
    })
    request.open(method,url)


    //Setting some headers...Don't sweat it right now
    // request.setRequestHeader("X-Requested-With","XMLHttpRequest");
    // request.setRequestHeader("Access-Control-Allow-Origin","*");
    
    // request.setRequestHeader("Content-Type","application/json");
    // request.setRequestHeader("Accept","application/json");
    //Use above for APIs in the future
    
    request.send()}

ajax("https://api.exchangeratesapi.io/latest?base=USD&symbols=", (data)=>{
    let parsed_data = JSON.parse(data)
    console.log(parsed_data)
    let rates = parsed_data.rates
    console.log(parsed_data.base)
    console.log(parsed_data.date)
    console.log(rates)

    for(let i=0;i<rates;i++){
        console.log(rates[i])
        // if (parsed_data[i] === "rates"){
        //     for (element in parsed_data.rates){
        //         console.log(element)
        //     }
            // console.log(startingInput.append(addCurrencies(element)))
            // console.log(targetInput.append(addCurrencies(element)))
            // console.log(baseInput.append(addCurrencies(element)))
    }
        // createCard(element)
    }
)

const selectOption = (input) =>{
    let selectChoice = makeElements("option", {value: ""})
    selectChoice.innerText = "--Please Select Your Currency--";
    input.append(selectChoice)
}

const addCurrencies = (item) => {
    let currencyOptions = makeElements("option", {value: item})
    currencyOptions.innerText = item;
    return currencyOptions
}
// export const addCurrencies = (input, item) => {
//     let currencyOptions = makeElements("option", {value: item})
//     currencyOptions.innerText = item;
//     input.append(currencyOptions)
// }


const inputField = () => {
    // Query Container
    let queryContainer = makeElements("div", {class: "query"})
    // Creating Base Currency
    let baseLabel = makeElements("label", {for: "base"})
    baseLabel.innerText = "Measuring Currency"
    let baseInput = makeElements("select",{id: "base", name:"base"})
    // Creating Starting Input
    let startingLabel = makeElements("label", {for: "start"})
    startingLabel.innerText = "Starting Currency"
    let startingInput = makeElements("select",{id: "start", name:"start"})
    // Creating Target Input
    let targetLabel = makeElements("label", {for: "target"})
    targetLabel.innerText = "Target Currency"
    let targetInput = makeElements("select",{id: "target", name: "target"})
    // Wrapped Inputs in DIV Class currency-selection
    let inputContainers = makeElements("div", {class: "currency-selection", id: "cs"})
    let grabButton = makeElements("button", {innerText: "Grab Rates", id: "grab-rates", name: "grab-rates"})
    
    selectOption(startingInput)
    selectOption(targetInput)
    
    inputContainers.append(startingLabel, startingInput, targetLabel, targetInput, grabButton)
    queryContainer.append(inputContainers, baseInput)
    b.append(queryContainer)
}
inputField

function createCard (input) {
    let b = getElements("body");
    let card = makeElements("div", {class: "card"})
    let start$ = makeElements("div")
    let base = input.base
    if(base === input.rates.name){
        let start$Label = base
        let start$Value = input.rates.name.value
        start$.append(start$Label, start$Value)
    }
    let target$ = makeElements("div")
    if (targetInput.value === input.rates.name){
        let target$Label = targetInput.value
        let target$Value = input.rates.name.value
    }
    
    card.append(start$, target$)

    let flagContainer = makeElements("div", {class: "card-container"})
    let startFlag = makeElements("div", {id: "start-flag"})
    let targetFlag = makeElements("div", {id: "target-flag"})
    flagContainer.append(startFlag, targetFlag)

    card.append(flagContainer)
}