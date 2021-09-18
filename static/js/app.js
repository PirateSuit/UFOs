// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
filters = {}

// Create function to handle a button click to filter by date
function filterOnAKey(data, key) {
  let filter = d3.select("#" + key).property("value");

  // Check to see if a date was entered and filter the
  // data using that date.
  if (filter) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    data = data.filter(row => row[key] === filter);
  }

  return data;
}


// 3. Use this function to update the filters. 
function updateFilters() {
  var filterList = ['datetime', 'city', 'state', 'country', 'shape'];

  let filteredData = tableData;

  filterList.forEach(filterKey => {
    filteredData = filterOnAKey(filteredData, filterKey);
  });

  // let date = d3.select("#datetime").property("value");
  // let state = d3.select("#stateID").property("value");

  // 4a. Save the element that was changed as a variable.
  // 4b. Save the value that was changed as a variable.
  // 4c. Save the id of the filter that was changed as a variable.
  // if (filters) {

  // }


  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.


  // 6. Call function to apply all filters and rebuild the table
  buildTable(filteredData);

}

// // 7. Use this function to filter the table when data is entered.
// function filterTable() {

//   // 8. Set the filtered data to the tableData.


//   // 9. Loop through all of the filters and keep any data that
//   // matches the filter values


//   // 10. Finally, rebuild the table using the filtered data

// }

// 2. Attach an event to listen for changes to each filter


// Build the table when the page loads
buildTable(tableData);
