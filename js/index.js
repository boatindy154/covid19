$(function() {
    var url = "https://pomber.github.io/covid19/timeseries.json";
    $.getJSON(url, function(result) {
        console.log(result);
        var no = 1;
        var all = 0;
        for (var country in result) {
            var row = `<tr>
            var selectedCount = result[country];
            var total = selectedCountry.length;
            all = all + selectedCountry[total - 1].confirmed;
            ${all}
            </tr>`;
            $("#data").append(row);
        }
        console.log(all);
    });
});