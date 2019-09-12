let a = [10,20,40,50];

function sumq(a)
{
  console.log("Entering function");
  let sum = arguments[0]+arguments[2];
  console.log("The sum of a & b is --> " + sum);
  console.log("Leaving function");
}



function sum(...a)
{
  let r = 0;
  console.log("Entering function");
  for(let i=0;i<a.length;i++)
  {
    r = r + a[i];
  }
  console.log("Leaving function");
  return r;
}

let result = sum(10,...a);//sum(10,20,30,40);

console.log("The sum is --> " + result);

function sum(a,b)
{
  console.log("Entering function");
  let r = a + b;
  console.log("Leaving function");
  return r;
}

let v1 = sum(1,2);
let v2 = sum(v1,sum(3,4));
let v3 = sum(sum(1,2),sum(sum(1,2),sum(1,2)));
let v4 = v3 + sum(1,1) + sum(v2,sum(sum(4,5),sum(6,7)));

console.log("The value of v1 is --> ",v1);
console.log("The value of v2 is --> ",v2);
console.log("The value of v3 is --> ",v3);
console.log("The value of v4 is --> ",v4);

function objects(){

    let r ={
        'auto':10,
        '1':20,
        '2':30
    };
 
    console.log(r[0]);
    return r;
}
let {2:v10,1:v20,auto:v30}=objects();
console.log(v20);

let g={
    '0':10,
    '1':20,

}
g.n='Hello';

console.log(g.n);
console.log(g);
for(var i of g){
    console.log(g[i]);
}