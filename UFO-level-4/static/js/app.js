// from data.js
var tableData = data;

// Select the button
var button = d3.select('#filter-btn')

//Select the form
var form = d3.select('.form-group')

//Select the table body
var tbody = d3.select('tbody')

//Create event handlers
button.on('click',runEnter)
form.on('submit',runEnter)

//Create a list dates to select for dates dropdown
var datesSelect = {}
var tableDataSelect = tableData.filter(function(date){
    if (datesSelect[date.datetime]){
        return false;
    }
    datesSelect[date.datetime] = true;
    return true;
});
console.log(datesSelect)

//Assign date list to HTML
var dateItems = document.getElementById("selDate"),
    dateArray = datesSelect
    for (var i = 0; i < dateArray.length; i++) {
        var opt = dateArray[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        dateItems.appendChild(el)
    }

//Create a list of cities for cities dropdown
var CitiesSelect = {}
var tableDataSelect = tableData.filter(function(city){
    if (CitiesSelect[city.city]){
        return false;
    }
    CitiesSelect[city.city] = true;
    return true;
});
console.log(CitiesSelect)

//Create a list of shapes for shapes dropdown
var ShapesSelect = {}
var tableDataSelect = tableData.filter(function(shape){
    if (ShapesSelect[shape.shape]){
        return false;
    }
    ShapesSelect[shape.shape] = true;
    return true;
});
console.log(ShapesSelect)

//Complete the event handler function for the form
function runEnter(){

    //Prevent the page from refreshing
    d3.event.preventDefault()
    
    //Select the input element and get the raw HTML node
    var inputElement = d3.select('#datetime')
    var inputElementCity = d3.select('#city')
    var inputElementShape = d3.select('#shape')

    //Get the value property of the input element
    var inputValue = inputElement.property('value')
    var inputValueCity = inputElementCity.property('value')
    var inputValueShape = inputElementShape.property('value')

    //Use the form input to filter the data by date and/or city
    var filteredData = tableData.filter(date => date.datetime == inputValue)
    var filteredDataCity = tableData.filter(city => city.city == inputValueCity)
    var filteredDataShape = tableData.filter(shape => shape.shape == inputValueShape)
    var filteredDataDC = filteredData.filter(city =>city.city == inputValueCity)
    var filteredDataDS = filteredData.filter(shape =>shape.shape == inputValueShape)
    var filteredDataDCS = filteredDataDC.filter(shape =>shape.shape == inputValueShape)
    var filteredDataCS = filteredDataCity.filter(shape =>shape.shape == inputValueShape)
    var filteredDataDCS = filteredDataDC.filter(shape =>shape.shape == inputValueShape)

    //if statement to determine what results to push to the web page
   

    if (inputValue !== "" && inputValueCity == "" && inputValueShape == "") {
            l3filteredData = filteredData;
        }
    else if (inputValue == "" && inputValueCity !== "" && inputValueShape == ""){
         l3filteredData = filteredDataCity;
    }
    else if (inputValue == "" && inputValueCity == "" && inputValueShape !== ""){
         l3filteredData = filteredDataShape;
    }
    else if (inputValue !== "" && inputValueCity !== "" && inputValueShape == ""){
         l3filteredData = filteredDataDC;
    }
    else if (inputValue == "" && inputValueCity !== "" && inputValueShape !== ""){
         l3filteredData = filteredDataCS;
    }
    else {
            l3filteredData = filteredDataDCS
    }   

    //----------------------------------------------
    // console to test functions
    //=============================================


    console.log(inputValue)
    console.log(inputValueCity)
    console.log(tableData)  
    console.log(filteredData)
    console.log(filteredDataCity)
    console.log(filteredDataShape)
    console.log(filteredDataDC)
    console.log(filteredDataDS)
    console.log(filteredDataCS)
    console.log(filteredDataDCS)


    // ------------------------------------------------------
    // Set UP Table on web page
    // ------------------------------------------------------

    l3filteredData.forEach((ufoSighting) => {
        var row = tbody.append('tr')
        Object.entries(ufoSighting).forEach(([key,value])=>{
            var cell = row.append('td')
            cell.text(value)
        })             
    })
}




