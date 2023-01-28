
function generer() {
    let lettres = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    let random1 = Math.ceil(Math.random() * 52);
    let random2 = Math.ceil(Math.random() * 52);
    let random3 = Math.ceil(Math.random() * 52);
    let random4 = Math.ceil(Math.random() * 52);
    let random5 = Math.ceil(Math.random() * 52);
    let random6 = Math.ceil(Math.random() * 52);

    let lettreRandom1 = lettres[random1];
    let lettreRandom2 = lettres[random2];
    let lettreRandom3 = lettres[random3];
    let lettreRandom4 = lettres[random4];
    let lettreRandom5 = lettres[random5];
    let lettreRandom6 = lettres[random6];

    let code1 = Math.floor(Math.random(99) * 99);
    let code2 = Math.floor(Math.random(99) * 99);
    let code3 = Math.floor(Math.random(99) * 99);
    let code4 = Math.floor(Math.random(99) * 99);
    let code5 = Math.floor(Math.random(99) * 99);


    let codeFinal = lettreRandom1 + code1 + lettreRandom2 + code2 + lettreRandom3 + code3 + lettreRandom4 + code4 + lettreRandom5 + code5 + lettreRandom6;
    
    console.log(codeFinal);
    //document.writeln(`<p>${codeFinal}<p>`);

    var text = document.getElementById("code");
    text.innerHTML = codeFinal;
}

//Autheur : Malo Berry