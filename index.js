(function () {

    var barGraphData = {
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

    var doughnutGraphData = [
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

    var lineGraphData = {
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

    var pieGraphData = [
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

    var polarAreaGraphData = [
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

    var radarGraphData = {
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

    var graphOptions = { responsive: true };

    var barGraph = document.getElementById("bar-graph-canvas").getContext("2d");
    var doughnutGraph = document.getElementById("doughnut-graph-canvas").getContext("2d");
    var lineGraph = document.getElementById("line-graph-canvas").getContext("2d");
    var pieGraph = document.getElementById("pie-graph-canvas").getContext("2d");
    var polarAreaGraph = document.getElementById("polar-area-graph-canvas").getContext("2d");
    var radarGraph = document.getElementById("radar-graph-canvas").getContext("2d");

    window.onload = function () {
        new Chart(barGraph).Bar(barGraphData, graphOptions);
        new Chart(doughnutGraph).Doughnut(doughnutGraphData, graphOptions);
        new Chart(lineGraph).Line(lineGraphData, graphOptions);
        new Chart(pieGraph).Pie(pieGraphData, graphOptions);
        new Chart(polarAreaGraph).PolarArea(polarAreaGraphData, graphOptions);
        new Chart(radarGraph).Radar(radarGraphData, graphOptions);
    };

} ());