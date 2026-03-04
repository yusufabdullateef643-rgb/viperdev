const inc = document.getElementById("inc")
const re = document.getElementById("re")
const dec = document.getElementById("dec")
const bold = document.getElementById("bold")

let count = 0;
inc.onclick = function(){
    count++;
    bold.textContent = count;
}

re.onclick = function(){
    count=0;
    bold.textContent = count;
}

dec.onclick = function(){
    count --;
    bold.textContent = count;
}

