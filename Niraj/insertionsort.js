var a = [30, 20, 10, 5, 1];
var n=5;
var m=Insertionsort(a,n);
for(var j in m){
console.log(m[j]);
}

function Insertionsort(a,n) {

    for(var j in a){
    console.log(a[j]);
    }
    
    for (var i = 1; i < a.length ; i++) {
        var value = a[i];
        var hole = i;
           while(hole>0 && a[hole-1]>value){
               a[hole]=a[hole-1];
               hole=hole-1;
           }
           a[hole]=value;
     
    
        }

        return a;


}