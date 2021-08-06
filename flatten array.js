function MixedArray(array) {
    let FlatArray = []; 
    let main = array, initial;
    while(main.length > 0) {  
        initial = main[0];
       if(Array.isArray(initial)) { 
       Array.prototype.splice.apply(main, [0, 1].concat(initial));
    } else {
        FlatArray.push(initial);
       main.splice(0, 1);
    }
 }
    return FlatArray;
 }
 console.log(MixedArray([9,'a','b',[1,2,3],5,56,'d']));