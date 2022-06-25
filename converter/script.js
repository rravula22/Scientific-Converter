var Units = {
    "kg":"pound",
    "km":"mile",
    "farenheit": "celcius"
}

quantityChange = (event) => {
    document.querySelector("#qty2").value = Units[event.target.value];
    this.updateValue(document.querySelector("#val1").value);
}
updateValue = (val) => {
    var qt1 = document.querySelector("#qty1");
    switch(qt1.value) {
        case "kg": document.querySelector("#val2").value = 2.2 * Number(val);
            break;
        case "km": document.querySelector("#val2").value = 0.621371 * Number(val);
            break;
        case "farenheit": document.querySelector("#val2").value = (Number(val) - 32)* 0.5556;
            break;
        default:
    }
}