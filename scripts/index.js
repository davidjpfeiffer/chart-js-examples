(function () {
  'use strict';

  var chartOptions = { responsive: true };

  var barChart = document.getElementById("bar-chart-canvas").getContext("2d");
  var doughnutChart = document.getElementById("doughnut-chart-canvas").getContext("2d");
  var lineChart = document.getElementById("line-chart-canvas").getContext("2d");
  var pieChart = document.getElementById("pie-chart-canvas").getContext("2d");
  var polarAreaChart = document.getElementById("polar-area-chart-canvas").getContext("2d");
  var radarChart = document.getElementById("radar-chart-canvas").getContext("2d");

  function loadBarChart() {
    new Chart(barChart).Bar(window.dataService.getBarChartData(), chartOptions);
  }

  function loadDoughnutChart() {
    new Chart(doughnutChart).Doughnut(window.dataService.getDoughnutChartData(), chartOptions);
  }

  function loadLineChart() {
    new Chart(lineChart).Line(window.dataService.getLineChartData(), chartOptions);
  }

  function loadPieChart() {
    new Chart(pieChart).Pie(window.dataService.getPieChartData(), chartOptions);
  }

  function loadPolarAreaChart() {
    new Chart(polarAreaChart).PolarArea(window.dataService.getPolarAreaChartData(), chartOptions);
  }

  function loadRadarChart() {
    new Chart(radarChart).Radar(window.dataService.getRadarChartData(), chartOptions);
  }

  window.onload = function () {
    loadBarChart();
    loadDoughnutChart();
    loadLineChart();
    loadPieChart();
    loadPolarAreaChart();
    loadRadarChart();
  };

  $('.js-reload-bar-chart-btn').on('click', loadBarChart);
  $('.js-reload-doughnut-chart-btn').on('click', loadDoughnutChart);
  $('.js-reload-line-chart-btn').on('click', loadLineChart);
  $('.js-reload-pie-chart-btn').on('click', loadPieChart);
  $('.js-reload-polar-area-chart-btn').on('click', loadPolarAreaChart);
  $('.js-reload-radar-chart-btn').on('click', loadRadarChart);

} ());