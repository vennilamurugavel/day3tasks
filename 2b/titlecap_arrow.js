
let title=(word)=>
{
word=word.toLowerCase().split(" ");
for(var i=0;i<word.length;i++)
{
    word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1); 
}
return word.join("");
}
console.log(title("BANANA"));
