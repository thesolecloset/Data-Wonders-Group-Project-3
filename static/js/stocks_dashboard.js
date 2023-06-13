

  $.ajax({
    // url: '/api/v1.0/ticker',
    // url: '/api/v1.0/volume',
    //url: '/api/v1.0/maxminaveragevolume',
    url:'/api/v1.0/maxminaverageprice',
    method: 'GET',
    success: function(data) {
      // Use the data in your JavaScript code
      console.log(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      // Handle error if the request fails
      console.error(textStatus, errorThrown);
    }
  });

  // Initialize the dashboard
function init() {

  // Create dropdown menu using D3

  let dropDownMenu = d3.select("#selDataset");

  // Retrieve ticker names and populate dropdown menu
  d3.json("/api/v1.0/maxminaverageprice").then((data) => {
    // Extract unique ticker names from the data
    let tickerNames = Array.from(new Set(data.map((item) => item.Ticker)));

    // Append options to the dropdown menu
    dropDownMenu
      .selectAll("option")
      .data(tickerNames)
      .enter()
      .append("option")
      .text((d) => d)
      .attr("value", (d) => d);

    // Call a function to handle the dropdown menu change event
    dropDownMenu.on("change", handleDropdownChange);

    // Initialize the chart with the default ticker
    let defaultTicker = tickerNames[0];
    createChart1(defaultTicker);
    createChart2(defaultTicker);
    
  });
}

function handleDropdownChange() {
  // Get the selected ticker from the dropdown menu
  let selectedTicker = d3.select(this).property("value");

  // Update the chart with the selected ticker
  createChart1(selectedTicker);
    createChart2(selectedTicker);
    
  // Read the stock details from the Excel file
    // Stock details from the Excel table
    let stockDetails = [
      { Ticker: "CCL", Name: "Carnival Cruise", "FCF 2022 ($B)": -3.3, "Debt/EBIT": -6.82, EPS: -5.16 },
      { Ticker: "DAL", Name: "Delta Airlines", "FCF 2022 ($B)": -2, "Debt/EBIT": 6.74, EPS: 2.06 },
      { Ticker: "UAL", Name: "United Airlines", "FCF 2022 ($B)": 1.25, "Debt/EBIT": 9.03, EPS: 2.26 },
      { Ticker: "MAR", Name: "Marriot", "FCF 2022 ($B)": 2.03, "Debt/EBIT": 2.72, EPS: 7.27 },
      { Ticker: "HLT", Name: "Hilton", "FCF 2022 ($B)": 1.58, "Debt/EBIT": 3.43, EPS: 4.56 }
    ];
  
    // Filter the data for the selected ticker
    let stockDetail = stockDetails.find(item => item.Ticker === selectedTicker);
  
    // Update the "stock details" box with the details
    d3.select("#stockName").text(stockDetail.Name);
    d3.select("#stockFCF").text(stockDetail["FCF 2022 ($B)"]);
    d3.select("#stockDebtEBIT").text(stockDetail["Debt/EBIT"]);
    d3.select("#stockEPS").text(stockDetail.EPS);
  };
    
    function createChart1(ticker) {
      // Make an AJAX request to fetch the data for the selected ticker
      $.ajax({
        url: '/api/v1.0/maxminaverageprice',
        method: 'GET',
        success: function(data) {
        
          // Filter the data for the selected ticker
          let filteredData = data.filter(item => item.Ticker === ticker);
          
          // Extract x and y values from the filtered data
          let xValues = filteredData.map(item => item.Year);
          let yValues = filteredData.map(item => item.AveragePrice);
          
          // Create the plotly data object
          let plotlyData = [{
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            name: ticker,
            line: {
              color: 'green'
            }
          
          }];
          
          // Create the plotly layout object
          let plotlyLayout = {
            title: 'Stock Price',
            xaxis: {
              title: 'Year'
            },
            yaxis: {
              title: 'Average Price'
            }
          };
          
          // Render the chart using Plotly
          Plotly.newPlot('chartContainer', plotlyData, plotlyLayout);
         },
        error: function(jqXHR, textStatus, errorThrown) {
          // Handle error if the request fails
          console.error(textStatus, errorThrown);
        }
      });
    };
    
function createChart2(ticker) {
      // Make an AJAX request to fetch the data for the selected ticker
      $.ajax({
        url: '/api/v1.0/maxminaveragevolume',
        method: 'GET',
        success: function(data) {
        
          // Filter the data for the selected ticker
          let filteredData = data.filter(item => item.Ticker === ticker);
          
          // Extract x and y values from the filtered data
          let xValues = filteredData.map(item => item.Year);
          let yValues = filteredData.map(item => item.AverageVolume);
          
          // Create the plotly data object
          let plotlyData = [{
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            name: ticker,
            line: {
              color: 'red'
            }
          }];
          
          // Create the plotly layout object
          let plotlyLayout = {
            title: 'Stock Volume',
            xaxis: {
              title: 'Year'
            },
            yaxis: {
              title: 'Average Volume'
            }
            
          };
          
          // Render the chart using Plotly
          Plotly.newPlot('chartContainer2', plotlyData, plotlyLayout);
         },
        error: function(jqXHR, textStatus, errorThrown) {
          // Handle error if the request fails
          console.error(textStatus, errorThrown);
        }
      });
    };
    
    
    
    
    
  // Call the init function to initialize the dropdown menu and chart
  init();



  
