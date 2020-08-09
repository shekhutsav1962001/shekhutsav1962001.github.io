const add = (incdec) => {
    var itemval = document.getElementById(incdec);
    itemval.value = parseInt(itemval.value) + 1;
}

const sub = (incdec) => {
    var itemval = document.getElementById(incdec);
    if(itemval.value>1)
    {
        itemval.value = parseInt(itemval.value) - 1;
    }
}
