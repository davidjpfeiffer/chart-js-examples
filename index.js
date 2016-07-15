(function () {

    var barChartData = {
        "labels": ["January", "February", "March", "April", "May", "June", "July"],
        "datasets": [
            {
                "fillColor": "#ffa500",
                "strokeColor": "rgba(220,220,220,0.8)",
                "highlightFill": "rgba(220,220,220,0.75)",
                "highlightStroke": "rgba(220,220,220,1)",
                "data": window.utilityService.getRandomDataArray()
            },
            {
                "fillColor": "rgba(151,187,205,0.5)",
                "strokeColor": "rgba(151,187,205,0.8)",
                "highlightFill": "rgba(151,187,205,0.75)",
                "highlightStroke": "rgba(151,187,205,1)",
                "data": window.utilityService.getRandomDataArray()
            }
        ]
    };

    var doughnutChartData = [
        {
            value: window.utilityService.getRandomScalingFactor(),
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: window.utilityService.getRandomScalingFactor(),
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: window.utilityService.getRandomScalingFactor(),
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },
        {
            value: window.utilityService.getRandomScalingFactor(),
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        },
        {
            value: window.utilityService.getRandomScalingFactor(),
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        }
    ];

    var lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: window.utilityService.getRandomDataArray()
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: window.utilityService.getRandomDataArray()
            }
        ]
    };

    var pieChartData = [
        {
            value: window.utilityService.getRandomScalingFactor(),
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: window.utilityService.getRandomScalingFactor(),
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: window.utilityService.getRandomScalingFactor(),
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },
        {
            value: window.utilityService.getRandomScalingFactor(),
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        },
        {
            value: window.utilityService.getRandomScalingFactor(),
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        }
    ];

    var polarAreaChartData = [
        {
            value: window.utilityService.getRandomScalingFactor(),
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: window.utilityService.getRandomScalingFactor(),
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: window.utilityService.getRandomScalingFactor(),
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },
        {
            value: window.utilityService.getRandomScalingFactor(),
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        },
        {
            value: window.utilityService.getRandomScalingFactor(),
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        }
    ];

    var radarChartData = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: window.utilityService.getRandomDataArray()
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: window.utilityService.getRandomDataArray()
            }
        ]
    };

    var chartOptions = { responsive: true };

    var barChart = document.getElementById("bar-chart-canvas").getContext("2d");
    var doughnutChart = document.getElementById("doughnut-chart-canvas").getContext("2d");
    var lineChart = document.getElementById("line-chart-canvas").getContext("2d");
    var pieChart = document.getElementById("pie-chart-canvas").getContext("2d");
    var polarAreaChart = document.getElementById("polar-area-chart-canvas").getContext("2d");
    var radarChart = document.getElementById("radar-chart-canvas").getContext("2d");

    window.onload = function () {
        new Chart(barChart).Bar(barChartData, chartOptions);
        new Chart(doughnutChart).Doughnut(doughnutChartData, chartOptions);
        new Chart(lineChart).Line(lineChartData, chartOptions);
        new Chart(pieChart).Pie(pieChartData, chartOptions);
        new Chart(polarAreaChart).PolarArea(polarAreaChartData, chartOptions);
        new Chart(radarChart).Radar(radarChartData, chartOptions);
    };

} ());