let count = 0; // Initialize count to 0

function increaseCount(){
    count++; //incrementa la variable +1
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML = count;//Muestra el último valor del contador
}

function checkCountValue(){
    if (count===10){
        alert("Tu publicacion de instagram gano 10 seguidores");
    }else if (count===20){
        alert("Tu publicacion de instagram gano 20 seguidores");
    }
}