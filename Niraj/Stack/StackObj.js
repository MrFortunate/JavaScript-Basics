/*var base={
    push:push,
    pop:pop,
    print:print
}

let stk1={
    top:10,
    stck:[],
    __proto__:base
}

let stk2={
    top:10,
    stck:[],
    __proto__:base
}*/

function push(Add){
    if(this.top===0){
        console.log("Sorry Stack is now full Overflow");
    }
    else{
        this.top--;
        this.stck[this.top]=Add;
    }
}

function pop(){
    if(this.stck[this.top]==undefined){
       console.log("Nothing is present in the Stack");
    }else{
        console.log("Element deleted is "+this.stck[this.top]);
        delete(this.stck[this.top]);
       this.top++;
    }
}

function print(){
    if(this.stck[this.top]!=undefined){
    for(var i=0;i<=9;i++){
        if(this.stck[i]!=undefined){
        console.log(this.stck[i]);
        }
    }}
    else{
        console.log("Stack is empty");
    }
}

function PiggyBank(){
    
        this.top=10,
        this.stck=[],
        this.push=push,
        this.pop=pop,
        this.print=print
    
    
}
/*
function push2(Add){
    if(stk2.top===0){
        console.log("Sorry Stack is now full Overflow");
    }
    else{
        stk2.top--;
        stk2.stck[stk2.top]=Add;
    }
}

function pop2(){
    if(stk2.stck[stk2.top]==undefined){
       console.log("Nothing is present in the Stack");
    }else{
        console.log("Element deleted is "+stk2.stck[stk2.top]);
        delete(stk2.stck[stk2.top]);
        stk2.top++;
    }
}

function print2(){
    if(stk2.stck[stk2.top]!=undefined){
    for(var i=0;i<=9;i++){
        if(stk2.stck[i]!=undefined){
        console.log(stk2.stck[i]);
        }
    }}
    else{
        console.log("Stack is empty");
    }
}
*/
var stk1=new PiggyBank();
stk1.push(10);
stk1.push(20);
stk1.push(30);
stk1.print();
stk1.pop();
stk1.pop();
stk1.pop();
stk1.pop();
stk1.pop();
stk1.pop();  
stk1.print();

var stk2=new PiggyBank();
stk2.push(100);
stk2.push(200);
stk2.print();
stk2.pop();
stk2.print();