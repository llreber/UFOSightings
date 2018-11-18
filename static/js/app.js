// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

tableData.forEach(function(row){
        var newRow = d3.select("tbody").append("tr");
        Object.entries(row).forEach(function([key, value]){
           // console.log(key, value);
            var cell = newRow.append("td");
            cell.text(value);
        });  
});

submit.on("click", function() {
    // Clear the existing table
    var selectTable = d3.select("tbody");
    selectTable.html(""); 

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
   // console.log(inputElement);

    // Get the value property of the input element
    var inputDate = inputElement.property("value");
    //console.log(inputDate);
    
    // Use the form input to filter the data by date
    tableData.forEach(function(row){
        //console.log(row.datetime);
        if(row.datetime == inputDate){
            var newRow = selectTable.append("tr");
            Object.entries(row).forEach(function([key, value]){
                //console.log(key, value);
                var cell = newRow.append("td");
                cell.text(value);
            });
        }
    });
  
  });