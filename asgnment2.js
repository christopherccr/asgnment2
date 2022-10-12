var vg_1 = "map.json";
vegaEmbed("#map", vg_1).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "line.json";
vegaEmbed("#line_chart", vg_2).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "combinedchart.json";
vegaEmbed("#combine_chart", vg_3).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
