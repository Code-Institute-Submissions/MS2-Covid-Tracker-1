// Load google charts
google.charts.load('current', {'packages':['corechart']});
// Draw chart per Gender
google.charts.setOnLoadCallback(drawGID);

function drawGID() {
      var queryString = ('Select F, G');

      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1bwSz6riHEh_12zDDn4Q7tMYs2yYOSGEBn2Kv3JQ_5fs/edit#?range=F2:G28');   

      query.send(handleQueryResponse);
    }

    function handleQueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

      var data = response.getDataTable();
      var chart = new google.visualization.Piechart(document.getElementById('chart_div'));
      chart.draw(data, { height: 400, height: 240, is3D: true });
    }

