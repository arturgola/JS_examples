// mod3

let helloCounter = 0;
function sayhello(name) {
    console.log("Moro", name);
    helloCounter++;
    if (helloCounter > 3) {
        clearInterval(timer)
    }
}

setTimeout(sayhello, 3000, 'Iines');
sayhello('Matti');

const timer = setInterval(sayhello, 2000, 'Roope');
