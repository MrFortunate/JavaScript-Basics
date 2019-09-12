var rpise = {};
rpise.rl = require('readline');
rpise.console = rpise.rl.createInterface(process.stdin, process.stdout
    , function (sub) {
        return [['push', 'pop', 'print', 'quit'], sub];
    });

rpise.stack = {
    stk: new Array(10),
    que: new Array(10),
    sp: 10,
    rear: -1,
    front: -1,
    push: function (v) {
        if (this.sp == 0) {
            console.log("Overflow");
            throw 'Overflow';
        }
        else {
            this.sp = this.sp - 1;
            this.stk[this.sp] = v;
        }
    },
    pop: function () {
        if (this.sp == 10) {
            console.log("Underflow");
            throw 'Underflow';
        } else {
            this.sp = this.sp + 1;
            return this.stk[this.sp - 1];
        }
    },
    print: function () {
        console.log("Printing the stack");
        for (var i = this.sp; i < 10; i++) {
            console.log(this.stk[i]);
        }
    },
    enqueue: function (v) { 
        if (this.rear == 10) {
            console.log("Queue Full");
            throw "OverflowQueue";
        } else if (this.rear == -1 && this.front == -1) {
            this.rear = this.rear + 1;
            this.front = this.front + 1;
            this.que[this.rear] = v;
        } else {
            this.rear = this.rear + 1;
            this.que[this.rear] = v;
        }   
    },
    dequeue: function () {
        if (this.front == -1) {
            console.log("UnderflowQueue");
            throw "Underflow"
        } else {
            this.front = this.front + 1;
            return this.que[this.front - 1];
        }
    },
    printq: function () {
        console.log("Printing Queue");
        for (var i = this.front; i <= this.rear; i++) {
            console.log(this.que[i]);
        }
    }
};

rpise.controller = function (input) {
    switch (input) {
        case 'push': rpise.console.removeAllListeners("line");
            rpise.console.on("line", function pushController(value) {
                try {
                    rpise.stack.push(value);
                    console.log("Thankyou for the input");
                } catch (e) {
                    console.log("Sorry stack is full" + "..pop to create space in stack");
                } finally {
                    rpise.mainPrompt();
                }
            });
            rpise.commandPrompt("push>");
            console.log("Enter the value to be pushed");
            break;

        case 'pop': try {
            console.log("the last value popped is " + rpise.stack.pop());
        } catch (e) {
            console.log("Stack is Empty value cannot be popped");
        } finally {
                rpise.mainPrompt();
            }
            break;
        case 'print':
            rpise.stack.print();
            rpise.mainPrompt();
            break;
        case 'quit':
            rpise.console.close();
            process.stdin.destroy();
            break;

        case 'enqueue':
            rpise.console.removeAllListeners("line");
            rpise.console.on("line", function enqueueController(value) {
                try {
                    rpise.stack.enqueue(value);
                    console.log("Thankyou for the input");
                } catch (e) {
                    console.log("Sorry Queueu is full"+e);
                } finally {
                    rpise.mainPrompt();
                }
            });
            rpise.commandPrompt("enqueue>");
            console.log("Enter the value to be added");
            break;
        case 'dequeue':
            try {
                console.log("The value which has been completed is " + rpise.stack.dequeue());
            } catch (e) {
                console.log("Sorry the Queue is empty now"+e);
            } finally {
                rpise.mainPrompt();
            }
            break;
        case 'printq':
            rpise.stack.printq();
            rpise.mainPrompt();
            break;

        default: console.log("Please enter the proper input");

    }
}

rpise.mainPrompt = function () {
    rpise.console.removeAllListeners("line");
    rpise.console.on("line", rpise.controller);
    rpise.console.setPrompt("rpise stack>", 9);
    rpise.console.prompt();
}

rpise.commandPrompt = function commandPrompt(command) {
    rpise.console.setPrompt(command,3);
    rpise.console.prompt();
}

rpise.boot = function () {
    console.log("Welcome to Rpise DS...");
    rpise.console.close = function () {
        console.log("\nThank you for using Rpise DS..\n");

    }
    rpise.mainPrompt();
}
rpise.boot();