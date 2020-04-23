$(function() {
    var url = "https://pomber.github.io/covid19/timeseries.json";
    $.getJSON(url, function(result) {
        console.log(result);
        var no = 1;
        var all = 0;
        for (var country in result) {
            var selectedCountry = result[country];
            var total = selectedCountry.length;
            all = all + selectedCountry[total - 1].confirmed;
        }
        console.log(all);
        $("#totalconfirm").append(all);

        for (var country in result) {
            var selectedCountry = result[country];
            var total = selectedCountry.length;
            all = all + selectedCountry[total - 1].deaths;
        }
        console.log(all);
        $("#totaldeaths").append(all);

        for (var country in result) {
            var selectedCountry = result[country];
            var total = selectedCountry.length;
            all = all + selectedCountry[total - 1].recovered;
        }
        console.log(all);
        $("#totalrecovered").append(all);
    });
});