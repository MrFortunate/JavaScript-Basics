var stack=[];
var i=0;
function pop(){
    if(stack[i]==undefined){
        console.log("Sorry This operation cannot be perform ");

    }else{
        var value = stack[i];
        delete(stack[i]);
        i--;
        console.log("Element Pop out is "+value);
    }
}

function push(data){
  if(stack[i]==undefined){
stack[i]=data;
  }else{
    i++;
    stack[i]=data;
  }

}
function print(){
    console.log("The elements of the stack are as follows:");
    for(var v of stack){
        if(v!=undefined){
        console.log(v);
        }
    }
}

push(40);
push(20);
push(80);
pop();
print();


module.exports.pop=pop;
module.exports.push=push;
module.exports.print=print;
