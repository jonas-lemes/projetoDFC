function geraGrafico2(dados) {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = new google.visualization.DataTable();

        data.addColumn('number', 'x');
        data.addColumn('number', 'u');

        for (x = 1; x <= 999; x++) {
            data.addRow([x, dados[x]]);
        }

        var options = {
            title: 'Método Projeto2',
            curveType: 'function',
            backgroundColor: {fill: 'transparent'},
            legend: {position: 'bottom'},
            height: 500
        };
        var chart = new google.visualization.LineChart(document.getElementById('graficoProjeto2'));
        chart.draw(data, options);
    }
}