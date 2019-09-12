function Stack(){
    this.top=-1;
    this.a=[];
}

Stack.prototype.pop=pop;
Stack.prototype.push=push;
Stack.prototype.print=print;
Stack.prototype.getData=getData;
function pop(){
    if(this.top==-1){
        console.log("Sorry the stack is empty");
    }
    else{ 
        console.log("The element which is removed is"+this.a[this.top]);
      this.top=this.top-1;
    }
    return this;
}

function push(v){
      if(this.top==10){
          console.log("Sorry Stack is now full come back later");

      }
      else{
          this.top=this.top+1;
          this.a[this.top]=v;
          console.log("Element successflly depositted");
      }
      return this;

}
function print(){
   
    for(var i=0;i<=this.top;i++){
          console.log(""+this.a[i]);     
    }
    return this;
}
var stk1=new Stack();
stk1.push(50).getData((top,a)=>{
    console.log("The Value of top is"+a[top]*2);
}).push(10).print().pop().print().pop().print();

    
function getData(f){
   f(this.top,this.a);
   return this;
}