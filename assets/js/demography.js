
// Load google charts
google.charts.load('current', {'packages':['corechart']});
// Draw chart per Gender
google.charts.setOnLoadCallback(drawGender);
// Draw chart per Age
google.charts.setOnLoadCallback(drawAge);

// Draw the chart and set the chart values
function drawGender() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Gender') ;
  data.addColumn('number', 'Number of Cases') ;
  data.addRows([
    ['Male', 18000],
    ['Female', 5000]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Cases Per Gender', 'width':550, 'height':400, is3D: true};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('gender'));
  
  chart.draw(data, options);
}


//Chart for Age Demography
function drawAge() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Age Group') ;
  data.addColumn('number', 'Number of Cases') ;
  data.addRows([
    ['0 to 20', 1],
    ['21 to 40', 5],
    ['41 to 55', 10],
    ['56 and above', 100]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Cases Per Age', 'width':550, 'height':400, is3D: true};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('age-group'));
  chart.draw(data, options);
}


