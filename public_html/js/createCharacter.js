var characterForm = document.getElementById('characters');
characterForm.addEventListener('submit', createCharacter);

function createCharacter(e) {
    e.preventDefault();
    let inputs = characterForm.elements;
    let character = {};
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name !== "") {
            character[inputs[i].name] = inputs[i].value;
        }
    }

    fetch()

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 201) {
            let created = JSON.parse(this.responseText);
            console.log(created);
        }
    }
    xmlhttp.open("POST", "http://localhost:3005/people", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(character));
}