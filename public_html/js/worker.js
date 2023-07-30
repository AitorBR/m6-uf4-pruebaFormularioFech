var previous = 0;
var current = 1;
var sequence = "";

function temp() {
    if (!previous) {
        sequence += " " + current;
    } else {
        sequence += " - " + current;
    }
    
    postMessage(sequence);
    
    let aux = previous + current;
    previous = current;
    current = aux;
}

setInterval(temp, 500);

