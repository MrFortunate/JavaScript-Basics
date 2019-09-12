var a=[1,2,3];
var b=[];
var min=a[0];
for(var i=0;i<=a.length;i++){
     
    while(a[i]>a[i+1]){
          i=i+1;                  
        min=a[i];
        a[a.length]=min;
        console.log(min);
    }
        
    
    }
    

b[0]=min;

console.log(min);
if(b==null){
    console.log("Everything is all right");


}
else{
    console.log("Cool we detect the fault!");
 
    for(var i of a){
        console.log(i);
    }
}