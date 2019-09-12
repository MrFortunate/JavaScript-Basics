var line="This website is aw3som3.";
var vowels=0;

line=line.toLowerCase();
console.log(line);
var count=0;
for(var i=0;i<line.length;i++){

    var ch=line.charAt(i);
    
    if(ch=='a' || ch=='e'|| ch=='i'|| ch=='o'|| ch=='u'){
        
        count++;

    }
    
}
    console.log("The number of vowels are "+count);
    
    
