$(function() {

    var url = "https://pomber.github.io/covid19/timeseries.json";
    var nowConfirmed = selectedCountry[(selectedCountry.length) - 1].confirmed;
    var nowDeaths = selectedCountry[(selectedCountry.length) - 1].deaths;
    var nowRecovered = selectedCountry[(selectedCountry.length) - 1].recovered;
    $("#nowConfirmed").append(nowConfirmed);
    $("#nowDeaths").append(nowDeaths);
    $("#nowRecovered").append(nowRecovered);

});