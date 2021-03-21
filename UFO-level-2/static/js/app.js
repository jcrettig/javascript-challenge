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
    var inputElementCity = d3.select('#city')

    //Get the value property of the input element
    var inputValue = inputElement.property('value')
    var inputValueCity = inputElementCity.property('value')

    //Use the form input to filter the data by date and/or city
    var filteredData = tableData.filter(date => date.datetime == inputValue)
    var filteredDataCity = tableData.filter(city => city.city == inputValueCity)
    var filteredDataBoth = filteredData.filter(city =>city.city == inputValueCity )

    //if statement to determine what results to push to the web page

    if (inputValue = ""){
            l2filtedData = filteredDataCity;
        }
    else if (inputValueCity = ""){
            l2filteredData = filteredData;
    }
    else {
            l2filteredData = filteredDataBoth
    }   

    //----------------------------------------------
    // console to test functions
    //=============================================


    console.log(inputValue)
    console.log(inputValueCity)
    console.log(tableData)  
    console.log(filteredData)
    console.log(filteredDataCity)
    console.log(filteredDataBoth)

    // ------------------------------------------------------
    // Set UP Table on web page
    // ------------------------------------------------------

    l2filteredData.forEach((ufoSighting) => {
        var row = tbody.append('tr')
        Object.entries(ufoSighting).forEach(([key,value])=>{
            var cell = row.append('td')
            cell.text(value)
        })             
    })
}




