let array=[1,2,3,4,5];
let oddarr=()=>
{
    for(let i=0;i<array.length;i++)
    {
        if(array[i]%2!=0)
        console.log(array[i]);
    }
   
}
oddarr();