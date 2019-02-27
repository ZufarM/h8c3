for(i = 0; i < swapiObj.results.length; i++){
    var no = i+1;
    
    console.log(no + " " + swapiObj.results[i].name); // "Name"
    console.log(swapiObj.results[i].terrain); // "terrain"
}

var inputLabel = document.getElementById('inputLabel');
inputLabel.innerHTML = swapiObj.results[0].name;