function trocaVirgula(inputValue){
    if(inputValue.includes(',')){
        inputValue = inputValue.replace(/,/g,'.');
    }
    return inputValue;
}