// from data.js
var tableData = data;

// Select the button
var button = d3.select('#filter-btn')

//Select the form
var form = d3.select('.form-group')

//Select the table body
var tbody = d3.select('tbody')

var datetimeDropdown = d3.select('#datetime')
var citiesDropdown = d3.select('#city')
var shapesDropdown = d3.select('#shape')

//Create event handlers
button.on('click', runEnter)
form.on('submit', runEnter)

//Create a list of dates to select for dates dropdown
var datesSelect = []
var citiesSelect = []
var shapesSelect = []


tableData.forEach(ufoSighting => {
    if (datesSelect.includes(ufoSighting.datetime) === false) {
        datesSelect.push(ufoSighting.datetime)
        datetimeDropdown.append("option").text(ufoSighting.datetime).property("value", ufoSighting.datetime)
    }
    if (citiesSelect.includes(ufoSighting.city) === false) {
        citiesSelect.push(ufoSighting.city)
        citiesDropdown.append("option").text(ufoSighting.city).property("value", ufoSighting.city)
    }
    if (shapesSelect.includes(ufoSighting.shape) === false) {
        shapesSelect.push(ufoSighting.shape)
        shapesDropdown.append("option").text(ufoSighting.shape).property("value", ufoSighting.shape)
    }
});

//Complete the event handler function for the form
function runEnter() {

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
    var filteredDataDC = filteredData.filter(city => city.city == inputValueCity)
    var filteredDataDS = filteredData.filter(shape => shape.shape == inputValueShape)
    var filteredDataDCS = filteredDataDC.filter(shape => shape.shape == inputValueShape)
    var filteredDataCS = filteredDataCity.filter(shape => shape.shape == inputValueShape)
    var filteredDataDCS = filteredDataDC.filter(shape => shape.shape == inputValueShape)

    //if statement to determine what results to push to the web page


    if (inputValue !== "" && inputValueCity == "" && inputValueShape == "") {
        l3filteredData = filteredData;
    }
    else if (inputValue == "" && inputValueCity !== "" && inputValueShape == "") {
        l3filteredData = filteredDataCity;
    }
    else if (inputValue == "" && inputValueCity == "" && inputValueShape !== "") {
        l3filteredData = filteredDataShape;
    }
    else if (inputValue !== "" && inputValueCity !== "" && inputValueShape == "") {
        l3filteredData = filteredDataDC;
    }
    else if (inputValue == "" && inputValueCity !== "" && inputValueShape !== "") {
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
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append('td')
            cell.text(value)
        })
    })
}




