let option;
let counter = 0;

do{

    option = prompt("1.- Increment counter\n2.- Decrement counter\n3.- Exit\n\nIngresa un valor")
    console.log(option)

    let opcion = parseInt(option)
    console.log(opcion)

    switch (opcion) {
        case 1:
            counter += 1
            console.log(counter)
            alert("counter = "+counter)
        break;

        case 2:
            counter -= 1
            console.log(counter)
            alert("counter = "+counter)
        break;

        default:
            break;
    }
    
}while( option != 3)
alert("Good bye 👋")