(function () {
  'use strict';

  var chartOptions = { responsive: true };

  var barChart;
  var doughnutChart;
  var lineChart;
  var pieChart;
  var polarAreaChart;
  var radarChart;

  var barChartElement = document.getElementById("bar-chart-canvas").getContext("2d");
  var doughnutChartElement = document.getElementById("doughnut-chart-canvas").getContext("2d");
  var lineChartElement = document.getElementById("line-chart-canvas").getContext("2d");
  var pieChartElement = document.getElementById("pie-chart-canvas").getContext("2d");
  var polarAreaChartElement = document.getElementById("polar-area-chart-canvas").getContext("2d");
  var radarChartElement = document.getElementById("radar-chart-canvas").getContext("2d");

  function loadAllCharts() {
    barChart = new Chart(barChartElement).Bar(window.dataService.getBarChartData(), chartOptions);
    doughnutChart = new Chart(doughnutChartElement).Doughnut(window.dataService.getDoughnutChartData(), chartOptions);
    lineChart = new Chart(lineChartElement).Line(window.dataService.getLineChartData(), chartOptions);
    pieChart = new Chart(pieChartElement).Pie(window.dataService.getPieChartData(), chartOptions);
    polarAreaChart = new Chart(polarAreaChartElement).PolarArea(window.dataService.getPolarAreaChartData(), chartOptions);
    radarChart = new Chart(radarChartElement).Radar(window.dataService.getRadarChartData(), chartOptions);
  }

  function reloadBarChartData() {
    for (var i = 0; i < barChart.datasets.length; i++) {
      for (var j = 0; j < barChart.datasets[i].bars.length; j++) {
        barChart.datasets[i].bars[j].value = window.utilityService.getRandomScalingFactor();
      }
    }

    barChart.update();
  }

  function reloadDoughnutChartData() {
    for (var i = 0; i < doughnutChart.segments.length; i++) {
      doughnutChart.segments[i].value = window.utilityService.getRandomScalingFactor();
    }

    doughnutChart.update();
  }

  function reloadLineChartData() {
    for (var i = 0; i < lineChart.datasets.length; i++) {
      for (var j = 0; j < lineChart.datasets[i].points.length; j++) {
        lineChart.datasets[i].points[j].value = window.utilityService.getRandomScalingFactor();
      }
    }

    lineChart.update();
  }

  function reloadPieChartData() {
    for (var i = 0; i < pieChart.segments.length; i++) {
      pieChart.segments[i].value = window.utilityService.getRandomScalingFactor();
    }

    pieChart.update();
  }

  function reloadPolarAreaChartData() {
    for (var i = 0; i < polarAreaChart.segments.length; i++) {
      polarAreaChart.segments[i].value = window.utilityService.getRandomScalingFactor();
    }

    polarAreaChart.update();
  }

  function reloadRadarChartData() {
    for (var i = 0; i < radarChart.datasets.length; i++) {
      for (var j = 0; j < radarChart.datasets[i].points.length; j++) {
        radarChart.datasets[i].points[j].value = window.utilityService.getRandomScalingFactor();
      }
    }

    radarChart.update();
  }

  function scrollToChart(chart) {
    $('html, body').animate({ scrollTop: $(chart + '-wrapper').offset().top - 70 }, 'slow');
  }

  $('.js-reload-bar-chart-btn').on('click', reloadBarChartData);
  $('.js-reload-doughnut-chart-btn').on('click', reloadDoughnutChartData);
  $('.js-reload-line-chart-btn').on('click', reloadLineChartData);
  $('.js-reload-pie-chart-btn').on('click', reloadPieChartData);
  $('.js-reload-polar-area-chart-btn').on('click', reloadPolarAreaChartData);
  $('.js-reload-radar-chart-btn').on('click', reloadRadarChartData);

  $('#bar-chart-header').on('click', function () { scrollToChart('#bar-chart'); });
  $('#doughnut-chart-header').on('click', function () { scrollToChart('#doughnut-chart'); });
  $('#line-chart-header').on('click', function () { scrollToChart('#line-chart'); });
  $('#pie-chart-header').on('click', function () { scrollToChart('#pie-chart'); });
  $('#polar-area-chart-header').on('click', function () { scrollToChart('#polar-area-chart'); });
  $('#radar-chart-header').on('click', function () { scrollToChart('#radar-chart'); });

  function getCurrentChart() {
    var params = window.location.href.split('/');

    for (var i = 0; i < params.length; i++) {
      if (params[i][0] == '#') return params[i];
    }

    return null;
  }

  window.onload = function () {
    loadAllCharts();
    var currentChart = getCurrentChart();
    if (currentChart) scrollToChart(currentChart);
  };

} ());