console.log("Welcome to PiggyBank");

var a = [];
var b = [];
var lt = [];
lt.length = 10;
var c = [];


function deposit(amnt, accountno) {

    if (amnt >= 0) {
        if (a[accountno] == undefined) {
            a[accountno] = 0;
            b[accountno] = 0;
            c[accountno] = lt;
            for (var i = 0; i <= 9; i++) {
                c[accountno][i] = 0;
            }
        }

        a[accountno] = a[accountno] + amnt;
        b[accountno] = amnt;
        
        i = 0;
        while (c[accountno][i] != 0 && i != 10) {
            i++;
        }


        if(i==10){
            
        
           c[accountno][0]=c[accountno][1];
           c[accountno][1]=c[accountno][2];
           c[accountno][2]=c[accountno][3];
           c[accountno][3]=c[accountno][4];
           c[accountno][4]=c[accountno][5];
           c[accountno][5]=c[accountno][6];
           c[accountno][6]=c[accountno][7];
           c[accountno][7]=c[accountno][8];
           c[accountno][8]=c[accountno][9];
           
         /*
            for(var v=0;v<9;v++){

            c[accountno][v]=c[accountno][v++];
            
        }*/
        i--;
        }
    
        c[accountno][i] = amnt;

    }

    else {
        console.log("Sorry Negative amount is not allowed");
    }
}


function withdraw(amnt, accountno) {
    if (a[accountno] == undefined) {
        console.log("ERROR 369 This Account is not registered..!");
    }
    else {
        if (a[accountno] > amnt) {
            a[accountno] = a[accountno] - amnt;
            b[accountno] = -amnt;
            var i=0;
            while (c[accountno][i] != 0 && i != 10) {
                i++;
            }
            if(i==10){
            
        
                c[accountno][0]=c[accountno][1];
                c[accountno][1]=c[accountno][2];
                c[accountno][2]=c[accountno][3];
                c[accountno][3]=c[accountno][4];
                c[accountno][4]=c[accountno][5];
                c[accountno][5]=c[accountno][6];
                c[accountno][6]=c[accountno][7];
                c[accountno][7]=c[accountno][8];
                c[accountno][8]=c[accountno][9];
                
              /*
                 for(var v=0;v<9;v++){
     
                 c[accountno][v]=c[accountno][v++];
                 
             }*/
             i--;
             }
            c[accountno][i] = -amnt;

        } else {
            console.log("Sorry Insufficient Balance");
        }
    }
}
function undo(accountno){
    var n=a[accountno];
    a[accountno]=n-b[accountno];

}


function statement(accountno) {
    if (a[accountno] == undefined) {
        console.log("ERROR 369 This Account is not registered...");

    } else {
        console.log("Your Balance is " + a[accountno]);
        console.log("Your Last Transaction was " + b[accountno]);
        console.log("Your Last Transaction record is:");

        for (var v of c[accountno]) {
            if (v != 0) {
                console.log(v);
            }
        }
    }
}


module.exports.deposit = deposit;
module.exports.withdraw = withdraw;
module.exports.statement=statement;
module.exports.undo=undo;