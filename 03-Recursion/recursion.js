// el 3ad el tnazly (countdown): awl ttbe' ll recursion

function countdown(i) {
    //1. bn3ml base case w hwa shrt el twkf 7ta la ystmr el code ela ma la nhaya
    if (i <= 0) {
        return;
    }
    //ntb3 elrkm el7ale
    console.log(i);

    //2. hna b'a el recursive case w hya el dala ele btnade nfsha brkm asghr
    countdown(i-1);
}

//ngrb el kod
countdown(5)


//for fun 
//m7akat fkrt el snade' gwa b3dha

const box = {
    hasKey: false,
    innerBox: {
        hasKey:false,
        innerBox: {
            hasKey: true //kda el mfta7 f elsando' el talt
        }
    }
};

function lookForKey(currentBox){


//base case: l'ena el mfta7
if (currentBox.hasKey) {
    console.log("found the key");
    return;
}
//recursive case en e7na nft7 elsando' ele gwa 
console.log("openning inner box....")
lookForKey(currentBox.innerBox);
}
lookForKey(box);



//gz' el call stack
function greet2(name){
    console.log("how are you, " + name + "?");
}
function bye(){
    console.log("ok,bye.");
}
function greet(name){
    console.log("hello, " + name + "!");
    greet2(name); //kda bdt5l el stack fo' el greet w t5ls el awl
    console.log("getting ready to say bye ...");
    bye(); //btdghl el stack w t5ls b3den
}
greet("moaz");

//gz' 7sab el mdrob (factorial)
function fact(x) {
    //1.base case hna mdrob el 1 hwa 1 f hna el dala btbtl tbade nfsha w tbd' trg3 el natg
    if (x == 1){
        return 1;
    }
    //2. recursive case hna b'a elrkm elmdrob f mdrob el rkm ele 'ablo
    else{
        return x * fact(x-1);
    }
}
console.log("factorial of 5 is:", fact(5));