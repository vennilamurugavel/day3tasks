let arr=[11,13,22,24,27];
let oddnumbers=function(){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        console.log(arr[i]);
    }
}
oddnumbers();