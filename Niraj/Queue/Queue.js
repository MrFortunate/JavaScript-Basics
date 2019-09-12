var queue=[];
var front=-1;
var rear=-1;
queue.length=5;
function add(add){
    if(front==-1 && rear==-1){
   rear++;
   front++;
    queue[rear]=add;
    }
    else if(rear!=5){
        rear++;
        queue[rear]=add;
        
    }else {
        console.log("Array is now full Overflow");
    }
}
function remove(){
    if(front>5){
        console.log("Queue is Empty Now UnderFlow");
    }else{
    console.log("The Element Deleted is:"+queue[front]);
    delete(queue[front]);
    front++;
    }
}
function print(){
    if(queue[rear]==undefined){
        console.log("Array is Empty");
    }else{
    console.log("The Elements of the queue are as follow");
    for(var v of queue){
        if(v!=undefined)
        console.log(v);
    }
}
}



module.exports.add=add;
module.exports.remove=remove;
module.exports.print=print;