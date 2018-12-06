function geraGraficoLax(pArr,ro,vel) {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = new google.visualization.DataTable();

        data.addColumn('number', 'x');
        data.addColumn('number', 'P');
		//data.addColumn('number', 'ρ');
		//data.addColumn('number', 'Velocidade');

        for (x = 1; x <= 999; x++) {
            
data.addRow([x, pArr[x]]);
//data.addRow([x, pArr[x],ro[x],vel[x]]);
        }

        var options = {
            title: 'Tubo de choque Upwind',
            curveType: 'function',
            backgroundColor: {fill: 'transparent'},
            legend: {position: 'bottom'},
            height: 500
        };
        var chart = new google.visualization.LineChart(document.getElementById('graficoTuboDeChoqueLax'));
        chart.draw(data, options);
    }
}