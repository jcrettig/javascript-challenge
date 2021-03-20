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

    // // Step 1: loop thorugh filtered data
    // filteredData.forEach((ufoSighting) => {
    // console.log(ufoSighting)
    // })

    // //Step 2 use d3 to append table rows
    // filteredData.forEach((ufoSighting) => {
    //     var row = tbody.append('tr')
    //     console.log(ufoSighting)
    //  })

    // // Step 3 use 'Object.entries' to console.log each ufo sighting value
    // filteredData.forEach((ufoSighting) => {
    //     var row = tbody.append('tr')
    //     console.log(ufoSighting)
    //     Object.entries(ufoSighting).forEach(([key,value])=>{
    //     console.log(key,value)
    //     })             
    // })

    // //Step 4 Use d3 to append one cell per ufosighting value
    // filteredData.forEach((ufoSighting) => {
    //     var row = tbody.append('tr')
    //     console.log(ufoSighting)
    //     Object.entries(ufoSighting).forEach(([key,value])=>{
    //     console.log(key,value)
    //         var cell = row.append('td')
    //     })             
    // })

    // Step 5 use d3 to update each cells test with the filtered ufo sightings
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append('tr')
        console.log(ufoSighting)
        Object.entries(ufoSighting).forEach(([key,value])=>{
        console.log(key,value)
            var cell = row.append('td')
            cell.text(value)
        })             
    })





}



// // Get a reference to the table body
// var tbody = d3.select('tbody')

// // Step 1: loop thorugh filtered data
// filteredData.forEach((ufoSighting) => {
//     console.log(ufoSighting)



// })
