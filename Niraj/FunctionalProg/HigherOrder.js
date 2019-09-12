console.log("Welcome to the world of Higher order function");

function Server(f){
    console.log("Task EnteringV1");
      f(78);
   console.log("Task Exiting V2");
}



function Client1(){
    console.log("Task V1");
    Server(v=>{
    console.log("Task v1 is here");
    console.log(`Value given is ${v}`);
    });
    console.log("Task V2");
}
function Client2(){
    console.log("Task V1");
    
    Server((v)=>{
        console.log("Task v2 is here");
        console.log(`Value given is `+v);
    });
    console.log("Task V2");
}

function Client3(){
    console.log("Task V1");
    Server(
        v=> {
            console.log("Task v3 is here");
            console.log(`Value given is ${v}`);
        }
    );
    console.log("Task V2");
}

Client1();
Client2();
Client3();