var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function() {
    var data = JSON.parse(this.response);
    foo(data);
};
xhr.send();

function foo(values) {
    for (i = 0; i < values.length; i++) {
        console.log(values[i].flag);
    }

}
=============================================================
    
    
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function() {
    var data = JSON.parse(this.response);
    foo(data);
};
xhr.send();

function foo(values) {
    for (i = 0; i < values.length; i++) {
        let value = values[i];
        console.log(value.name, value.region, value.subregion, value.population);
    }

}
