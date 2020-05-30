//Crear un gráfico de barras utilizando los valores de las primeras 2 columnas como X and Y
function myFunction() {
  var spread = SpreadsheetApp.openById("poselid");
  var sheetChart = spread.getSheets()[0];
  
  var chart = sheetChart.newChart()
  .setChartType(Charts.ChartType.BAR)
  .addRange(sheetChart.getRange("A1:B12"))
  .setPosition(5,5,0,0)
  .build(); 
  
  sheetChart.insertChart(chart);
 }
function onOpen(){
 myFunction();
  
}
