
var deposit=function(v){
    this.balance=this.balance+v;
    this.lt=v;
}
var withdraw=function(v){
      if(this.balance>=v){
          this.balance=this.balance-v;
          this.lt=-v;
      }
}
var statement=function(){
    console.log("Balance is :"+this.balance);
    console.log("Last Transaction is :"+this.lt);
}

var obj={
    deposit:deposit,
    withdraw:withdraw,
    statement:statement
}
function PiggyBank(){
    this.balance=0;
    this.lt=0;
}
PiggyBank.prototype.deposit=deposit;
PiggyBank.prototype.withdraw=withdraw;
PiggyBank.prototype.statement=statement;

var pg1=new PiggyBank();

pg1.deposit(100);
pg1.statement();
pg1.hasOwnProperty('prototype');

var pg2=new PiggyBank();
pg2.deposit(3000);
pg2.statement();
pg2.withdraw(2000);
pg2.statement();