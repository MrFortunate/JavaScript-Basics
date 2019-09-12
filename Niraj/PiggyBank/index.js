var pg1=require("./PiggyBank");

pg1.deposit(100,1);

pg1.statement(1);
pg1.deposit(1000,1);
pg1.deposit(1300,1);
pg1.deposit(400,1);
pg1.deposit(2344,1);
pg1.deposit(18394,1);
pg1.deposit(243341,1);
pg1.deposit(50000,1);
pg1.deposit(51000,1);
pg1.deposit(2344,1);
pg1.deposit(2344,1);
pg1.deposit(23234,1);
pg1.deposit(3432,1);
pg1.withdraw(5000,1);



pg1.statement(1);
var pg2=require("./PiggyBank");
pg2.deposit(100,2);
pg2.statement(2);
pg2.withdraw(35,2);
pg2.undo(2);
pg2.statement(2);
