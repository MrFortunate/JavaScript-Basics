var v1=[];
var counter=0;
function f1(a,b){
   
    function f2(){
    var c=3;
    var d=4;
    a++;
    b++;
    c++;
    d++;
    console.log("a="+a);
    console.log("b="+b);
    console.log("c="+c);
    console.log("d="+d);
    }
    v1[counter++]=f2;
    function f3(){
        var e=5;
        var f=6;
        a++;
        b++;
        e++;
        f++;
        console.log("a="+a);
        console.log("b="+b);
        console.log("e="+e);
        console.log("f="+f);
    
    }
    v1[counter++]=f3;
    console.log("a="+a);
    console.log("b="+b);

}

f1(1,2);
f1(10,20);
v1[0]();
v1[1]();
v1[2]();
v1[3]();

for(var i in v1){
   v1[i]();
}
