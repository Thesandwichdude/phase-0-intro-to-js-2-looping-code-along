
function writeCards(name){
    let cards = []
    for (let i = 0; i < name.length; i++){
        cards.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return cards;
}

function countDown(numbers) {
    let countDown = numbers
    while (countDown >= 0) {
        console.log(countDown);
        countDown--
    }
}