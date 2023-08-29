let num = [1,4,3,2];

function invertirCadena(num) {
    var i = num.length;

    while(num[i] != null)
        i++;
    while(i >= 0) {
        console.log(num[i--]+" ");
    }
    
}


function invertirCadena2(num){

    var alreves = num.slice().reverse();

    alreves.forEach(element => {
        console.log(element);
    });
}

// console.log(typeof(invertirCadena));
invertirCadena(num);
console.log("\n");
invertirCadena2(num);