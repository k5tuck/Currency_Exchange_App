// Get Elements
export const getElements = (tag) => {
    let el = document.querySelectorAll(tag)
    if(el.length == 0) return null;
    if(el.length == 1) return el[0];
    return el;
}

// Create Elements
export const makeElements = (tag, options={})=>{
    let el = document.createElement(tag)
    for(let [key,value] of Object.entries(options)){
        el[key] = value;
    }
    return el;
}