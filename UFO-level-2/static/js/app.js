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

//Complete the event handler function for the form
function runEnter(){

    //Prevent the page from refreshing
    d3.event.preventDefault()

    //Select the input element and get the raw HTML node
    var inputElement = d3.select('#datetime')

    //Get the value property of the input element
    var inputValue = inputElement.property('value')

    //Use the form input to filter the data by date
    var filteredData = tableData.filter(date => date.datetime == inputValue)

    console.log(inputValue)
    console.log(tableData)  
    console.log(filteredData)

    // ------------------------------------------------------
    // Set UP Table on web page
    // ------------------------------------------------------

    filteredData.forEach((ufoSighting) => {
        var row = tbody.append('tr')
        Object.entries(ufoSighting).forEach(([key,value])=>{
            var cell = row.append('td')
            cell.text(value)
        })             
    })
}




