var a=[10,20,30,40,30];

console.log("Enter the number you want to get frequency of it");
var readline=require('readline-sync');
var i =readline.question("Enter the number to get its frequency");
var j=0;
var l=0;
while(l<a.length){
if(a[l]==i){
 j++;
 l++;

}else{
    l++;
}


}
if(j>0){
    console.log("The frequency of number "+i+" is "+ j);
}else{
    console.log("Number not yet found");
}

console.log("Now to get the average of the given array element");

l=0;
sum=0;
while(l<a.length){

    sum=sum+a[l];
    l++;
}
 
var ans=sum/a.length;
console.log("The Average of elements in array is "+ans);
l=0;
var y =[];
var x =[];
var z=[10,20,30,40,50,60,70,80,90];
while(l<z.length/2){
   y[l]=z[l];
   l++;
}
i=0;
while(l<z.length){
x[i]=z[l];
l++;
i++;
}
j=0;
console.log("Now printing the two separated arrays");
console.log("The element of first part is");
for(j in y){
console.log(y[j]);
}
console.log("The element of second part is");
j=0;
for(j of x){
    console.log (j);
}

