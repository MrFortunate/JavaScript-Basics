var pg1=require("./Queue");

pg1.add(10);
pg1.add(20);
pg1.add(30);
pg1.add(40);
pg1.add(50);
pg1.add(60);
pg1.add(60);
pg1.add(60);
pg1.print();
pg1.remove();

pg1.remove();
pg1.remove();
pg1.remove();
pg1.remove();
pg1.remove();
pg1.remove();
pg1.remove();
pg1.print();