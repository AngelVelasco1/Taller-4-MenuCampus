let menu = '';
menu += "1. Leer Datos\n";
menu += "2. Crear Objeto\n";
menu += "3. Mostrar Objeto\n";
menu += "4. Crear Array\n";
menu += "5. Mostrar Array\n";
menu += "6. Eliminar primer elemento del Array\n";
menu += "7. Eliminar ultimo elemento del Array\n";
menu += "8. Eliminar cualquier elemento del Array\n";
menu += "9. Agregar elemento al inicio del Array\n";
menu += "10. Agregar elemento al final del array\n";
menu += "11. Crear array con objetos\n";
menu += "12. Iterar array con objetos usando For\n";
menu += "13. Iterar array con objetos usando ForEach\n";
menu += "14. Iterar array con objetos usando Map\n";
menu += "15. Proceso personal\n";
menu += "0. Salir\n"

let choose = prompt(menu);

function read() {
    do {
        let user = prompt("Write:");
        alert(user);
    } while (confirm("Do you want to continue?"));
    choose;
}

let newElement;

function newObject() {
    let value = prompt("Ingresa el valor del objeto");
    newElement = { value };

}
function showObject() {
    if (newElement) {
        alert(`The object was created, the value is ${newElement.value}`)
    } else if (confirm("There aren't a created object, do you wanna to create one?")) {
        newObject();
        alert(`The object was created, the value is ${newElement.value}`)
    }
    else {
        alert("No object was created.");
    }
}

let array = [];
function newArray() {
    array = [];
    do {
        let newElementArray = prompt("Ingrese un nuevo elemento al array:");
        array.push(newElementArray);

    } while (confirm("Do you wanna other array element?"))
}
function showArray() {
    if (array.length === 0) {
        if (confirm("There arent an array, do you want create one?")) {
            newArray();
            alert(`The created array has ${array.length} elements and are: ${array}`)
        } else {
            alert("No array was created.");
        }
    }
}

function deleteFirst() {
    if (array.length === 0) {
        if (confirm("There arent an array, do you want create one?")) {
            newArray();
            let eliminated = array.shift();
            alert(`The created array has ${array.length} elements and are: ${ array }. The eliminated element is ${eliminated}`)
        } else {
            alert("No array was created.");
        }
    }
}

function deleteLast() {
    if(array.length === 0) {
        if (confirm("There arent an array, do you want create one?")) {
            newArray();
            let eliminated = array.pop();
            alert(`The created array has ${array.length} elements and are: ${ array } .The last eliminated element is ${eliminated}`)
        } else {
            alert("No array was created.");
        }
    }
}

function deleteRandom() {
    if(array.length === 0) {
        if (confirm("There arent an array, do you want create one?")) {
            newArray();
            let random = Math.floor(Math.random() * array.length);
            let eliminated = array.splice(random, 1);

            alert(`The created array has ${array.length} elements and are: ${ array } The random eliminated element is ${eliminated}`)
        } else {
            alert("No array was created.");
        }
    }
}
switch (choose) {
    case "1":
        read();
        break;
    case "2":
        newObject();
    case "3":
        showObject();
        break;
    case "4":
        newArray();
    case "5":
        showArray();
        break;
    case "6":
        deleteFirst();
    case "7":
        deleteLast();
        break;
    case "8":
        deleteRandom();
        break;
    case "9":
        break;
    case "10":
        break;
    case "11":
        break;
    case "12":
        break;
    case "13":
        break;
    case "14":
        break;
    case "15":
        break;
    case "0":
        break;


}
