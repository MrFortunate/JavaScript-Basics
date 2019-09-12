var v = [];
var counter = 0;
function f1(a, b) {
    console.log("entering function f1");
    var f2=function() {
        console.log("Entering function f2");
        var c = 30;
        var d = 40;
        a++;
        b++;
        c++;
        d++;
        console.log("a=" + a);
        console.log("b=" + b);
        console.log("c=" + c);
        console.log("d=" + d);
        console.log("Leaving function f2");
    }
    v[counter++] = f2;
    var f3 = ()=> {
        console.log("Entering the function f3");
        var e = 50;
        var f = 60;
        a++;
        b++;
        e++;
        f++;
        console.log("a=" + a);
        console.log("b=" + b);
        console.log("e=" + e);
        console.log("f=" + f);
        console.log("Leaving function f3");

    }
    v[counter++]=f3;

    console.log("a="+a);
    console.log("b="+b); 
}

f1(1,2);
f1(10,20);
v[0]();
v[1]();
v[2]();
v[3]();

for(var x in v){
    v[x]();
}/*
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })*/
  
  readline.question(`What's your name?`, (name) => {
    console.log(`Hi ${name}!`)
    readline.close()
  })