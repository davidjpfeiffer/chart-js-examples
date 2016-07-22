window.dataService = (function () {
  'use strict';

  var chartData = {
    getBarChartData: getBarChartData,
    getDoughnutChartData: getDoughnutChartData,
    getLineChartData: getLineChartData,
    getPieChartData: getPieChartData,
    getPolarAreaChartData: getPolarAreaChartData,
    getRadarChartData: getRadarChartData
  };

  return chartData;

  function getBarChartData() {
    return {
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
  }

  function getDoughnutChartData() {
    return [
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
  }

  function getLineChartData() {
    return {
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
  }

  function getPieChartData() {
    return [
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
  }

  function getPolarAreaChartData() {
    return [
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
  }

  function getRadarChartData() {
    return {
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
  }

} ());