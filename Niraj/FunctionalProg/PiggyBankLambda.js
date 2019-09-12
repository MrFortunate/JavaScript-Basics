var standard_input = process.stdin;
standard_input.setEncoding('utf-8');
var PiggyBank = function (f) {
  balance = 0;
  lt = 0;
  var deposit = (v) => {
    balance = balance + v;
    lt = v;
  }
  var withdraw = (v) => {
    if (balance >= v) {
      balance = balance - v;
      lt = -v;
    }
  }
  var statement = () => {
    console.log("Balance is :" + balance);
    console.log("Last Transaction is :" + lt);
  }

  f();
  /*
  deposit(d);
  statement();
  withdraw(w);
  statement();
  /*
  var obj={
      deposit:deposit,
      withdraw:withdraw,
      statement:statement
  }
  return obj;
  */
}
var bool = false;
var j=0;
var pg1 = PiggyBank(() => {
  do {
    console.log("********HOME*********");
    console.log("1.Deposit");
    console.log("2.Withdraw");
    console.log("3.Statement");
    console.log("4.Exit");
    console.log("Enter your  choice ");
    standard_input.on('data', function (data) {
    
      switch (data) {
        case 1: console.log("Welcome to Deposit portal");
          standard_input.on('depo',function(depo){
            deposit(depo);
          })
          bool = true;
          break;
        case 2: console.log("welcome to Withdrawal portal");
        standard_input.on('withdrw',function(withdrw){
          withdraw(withdrw);
        })
          bool = true;
          break;
        
        case 3: console.log("Welcome to Statement portal");
               statement();
               bool=true;
               break;
        
        case 4: bool=false;
                break;
        default:console.log("Please Choose any options first then proceed");
      }
      
    })

  } while (bool!=false);
});

/*
pg1.deposit(100);
pg1.statement();
pg1.withdraw(25);
pg1.statement();
//pg1.hasOwnProperty('prototype');

var pg2= PiggyBank();
pg2.deposit(3000);
pg2.statement();
pg2.withdraw(2000);
pg2.statement();*/