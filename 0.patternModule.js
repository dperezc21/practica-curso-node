function sum(a, b) {
    return a + b;
}

function palindromo(text) {
    const split = text.toLowerCase().split("").reverse();
    let polindromaText = "";
    console.log(split);
    split.forEach(element => {
        if(element != " ") polindromaText += element;
    });

    return polindromaText == text;
}

module.exports = {
    sum, 
    palindromo
};