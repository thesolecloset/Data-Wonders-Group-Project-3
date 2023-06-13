  // Create data arrays for each ticker
var cclData = [
  { Year: 2017, Price: 20 },
  { Year: 2018, Price: 20 * (58.12938507809582 / 58.12938507809582) },
  { Year: 2019, Price: 20 * (47.87778283679296 / 58.12938507809582) },
  { Year: 2020, Price: 20 * (20.788848754445556 / 58.12938507809582) },
  { Year: 2021, Price: 20 * (24.050476165044877 / 58.12938507809582) },
  { Year: 2022, Price: 20 * (13.252111567918998 / 58.12938507809582) },
  { Year: 2023, Price: 20 * (10.166543189390206 / 58.12938507809582) }
];

var dalData = [
  { Year: 2017, Price: 20 },
  { Year: 2018, Price: 20 * (52.06347212468486 / 52.06347212468486) },
  { Year: 2019, Price: 20 * (54.26047721741691 / 52.06347212468486) },
  { Year: 2020, Price: 20 * (34.925436366688125 / 52.06347212468486) },
  { Year: 2021, Price: 20 * (42.81670640006898 / 52.06347212468486) },
  { Year: 2022, Price: 20 * (35.4519921109021 / 52.06347212468486) },
  { Year: 2023, Price: 20 * (36.38592576391903 / 52.06347212468486) }
];

var hltData = [
  { Year: 2017, Price: 20 },
  { Year: 2018, Price: 20 * (77.23936924421454 / 77.23936924421454) },
  { Year: 2019, Price: 20 * (90.32021119859483 / 77.23936924421454) },
  { Year: 2020, Price: 20 * (88.03823594707745 / 77.23936924421454) },
  { Year: 2021, Price: 20 * (127.17485067579481 / 77.23936924421454) },
  { Year: 2022, Price: 20 * (135.33490962906188 / 77.23936924421454) },
  { Year: 2023, Price: 20 * (141.1857790534879 / 77.23936924421454) }
];

var marData = [
  { Year: 2017, Price: 20 },
  { Year: 2018, Price: 20 * (124.88880497905838 / 124.88880497905838) },
  { Year: 2019, Price: 20 * (126.4518276093498 / 124.88880497905838) },
  { Year: 2020, Price: 20 * (103.5836795460094 / 124.88880497905838) },
  { Year: 2021, Price: 20 * (142.83121311853802 / 124.88880497905838) },
  { Year: 2022, Price: 20 * (157.95808866584443 / 124.88880497905838) },
  { Year: 2023, Price: 20 * (166.17261627574027 / 124.88880497905838) }
];

var ualData = [
  { Year: 2017, Price: 20 },
  { Year: 2018, Price: 20 * (77.2564541790115 / 77.2564541790115) },
  { Year: 2019, Price: 20 * (86.82575377206953 / 77.2564541790115) },
  { Year: 2020, Price: 20 * (42.65442683103056 / 77.2564541790115) },
  { Year: 2021, Price: 20 * (49.43198411426847 / 77.2564541790115) },
  { Year: 2022, Price: 20 * (41.221394398297925 / 77.2564541790115) },
  { Year: 2023, Price: 20 * (46.79172836115331 / 77.2564541790115) }
];

// Combine all ticker data into a single array
var data = [];

// Loop through each year
for (var i = 0; i < cclData.length; i++) {
  var year = cclData[i].Year;

  // Sum the prices for each ticker in the given year
  var sum = cclData[i].Price + dalData[i].Price + hltData[i].Price + marData[i].Price + ualData[i].Price;

  // Create a combined data point for the year
  var combinedDataPoint = {
    Year: year,
    Price: sum
  };

  // Add the combined data point to the data array
  data.push(combinedDataPoint);
}

// Create an array of years
var years = data.map(item => item.Year);

// Create an array of prices
var prices = data.map(item => item.Price);

// Create a single trace for the combined data
var trace = {
  x: years,
  y: prices,
  mode: 'lines',
  name: 'Combined',
  line: {
    color: 'purple'
  }

};

// Set the layout for the chart
var layout = {
  title: 'Stock Performance With Equal Weight',
  style: {
    fontSize: '16px',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center'},
xaxis: { title: 'Year' },
style: {
  fontSize: '16px',
  fontWeight: 'bold',
  width: '100%'},
yaxis: { title: 'Value' },
style: {
  fontSize: '16px',
  fontWeight: 'bold',
  width: '100%'},
};

// Plot the chart
Plotly.newPlot('chartContainer3', [trace], layout);

  // Create chart with 70% hotels and 30% airline and cruiseline
  var cclData = [
    { Year: 2017, Price: 10 },
    { Year: 2018, Price: 10 * (58.12938507809582 / 58.12938507809582) },
    { Year: 2019, Price: 10 * (47.87778283679296 / 58.12938507809582) },
    { Year: 2020, Price: 10 * (20.788848754445556 / 58.12938507809582) },
    { Year: 2021, Price: 10 * (24.050476165044877 / 58.12938507809582) },
    { Year: 2022, Price: 10 * (13.252111567918998 / 58.12938507809582) },
    { Year: 2023, Price: 10 * (10.166543189390206 / 58.12938507809582) }
  ];
  
  var dalData = [
    { Year: 2017, Price: 10 },
    { Year: 2018, Price: 10 * (52.06347212468486 / 52.06347212468486) },
    { Year: 2019, Price: 10 * (54.26047721741691 / 52.06347212468486) },
    { Year: 2020, Price: 10 * (34.925436366688125 / 52.06347212468486) },
    { Year: 2021, Price: 10 * (42.81670640006898 / 52.06347212468486) },
    { Year: 2022, Price: 10 * (35.4519921109021 / 52.06347212468486) },
    { Year: 2023, Price: 10 * (36.38592576391903 / 52.06347212468486) }
  ];
  
  var hltData = [
    { Year: 2017, Price: 35 },
    { Year: 2018, Price: 35 * (77.23936924421454 / 77.23936924421454) },
    { Year: 2019, Price: 35 * (90.32021119859483 / 77.23936924421454) },
    { Year: 2020, Price: 35 * (88.03823594707745 / 77.23936924421454) },
    { Year: 2021, Price: 35 * (127.17485067579481 / 77.23936924421454) },
    { Year: 2022, Price: 35 * (135.33490962906188 / 77.23936924421454) },
    { Year: 2023, Price: 35 * (141.1857790534879 / 77.23936924421454) }
  ];
  
  var marData = [
    { Year: 2017, Price: 35 },
    { Year: 2018, Price: 35 * (124.88880497905838 / 124.88880497905838) },
    { Year: 2019, Price: 35 * (126.4518276093498 / 124.88880497905838) },
    { Year: 2020, Price: 35 * (103.5836795460094 / 124.88880497905838) },
    { Year: 2021, Price: 35 * (142.83121311853802 / 124.88880497905838) },
    { Year: 2022, Price: 35 * (157.95808866584443 / 124.88880497905838) },
    { Year: 2023, Price: 35 * (166.17261627574027 / 124.88880497905838) }
  ];
  
  var ualData = [
    { Year: 2017, Price: 10 },
    { Year: 2018, Price: 10 * (77.2564541790115 / 77.2564541790115) },
    { Year: 2019, Price: 10 * (86.82575377206953 / 77.2564541790115) },
    { Year: 2020, Price: 10 * (42.65442683103056 / 77.2564541790115) },
    { Year: 2021, Price: 10 * (49.43198411426847 / 77.2564541790115) },
    { Year: 2022, Price: 10 * (41.221394398297925 / 77.2564541790115) },
    { Year: 2023, Price: 10 * (46.79172836115331 / 77.2564541790115) }
  ];
  
  // Combine all ticker data into a single array
  var data = [];
  
  // Loop through each year
  for (var i = 0; i < cclData.length; i++) {
    var year = cclData[i].Year;
  
    // Sum the prices for each ticker in the given year
    var sum = cclData[i].Price + dalData[i].Price + hltData[i].Price + marData[i].Price + ualData[i].Price;
  
    // Create a combined data point for the year
    var combinedDataPoint = {
      Year: year,
      Price: sum
    };
  
    // Add the combined data point to the data array
    data.push(combinedDataPoint);
  }
  
  // Create an array of years
  var years = data.map(item => item.Year);
  
  // Create an array of prices
  var prices = data.map(item => item.Price);
  
  // Create a single trace for the combined data
  var trace = {
    x: years,
    y: prices,
    mode: 'lines',
    name: 'Combined',
    line: {
      color: 'maroon'
    }
  };
  
  // Set the layout for the chart
  var layout = {
    title: {
      text: 'Stock Performance:<br>70% Hotels, 30% Airlines & Cruiseline',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        textAlign: 'center'
      }
    },
    xaxis: { title: 'Year' },
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      width: '100%'},
    yaxis: { title: 'Value' },
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      width: '100%'},
  };
  
  // Plot the chart
  Plotly.newPlot('chartContainer4', [trace], layout);