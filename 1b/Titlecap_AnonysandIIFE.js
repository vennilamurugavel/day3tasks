let titleCase=function([str]) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase(["apple"]));

(function (str1) {
    str1 = str1.toLowerCase().split(' ');
    for (var i = 0; i < str1.length; i++) {
      str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1); 
    } 
    console.log(str1.join(' '));
  })("banana");