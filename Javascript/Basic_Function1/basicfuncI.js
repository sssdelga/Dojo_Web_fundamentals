// Basic Function I

// console.log("#1");
// function a(){
//     return 35;
// }
// console.log(a())

// console.log("#2");
// function a(){
//     return 4;
// }
// console.log(a()+a());

// console.log("#3");
// function a(b){
//     return b;
// }
// console.log(a(2)+a(4));

// console.log("#4");
// function a(b){
//         console.log(b);
//         return b*3;
//     }
//     console.log(a(3));

// console.log("#5");
// function a(b){
//     return b*4;
//     console.log(b);
// }
// console.log(a(10));

// console.log("#6");
// function a(b){
//     if(b<10) {
//         return 2;
//     }
//     else     {
//         return 4;
//     }
//     console.log(b);
// }
// console.log(a(15));

// console.log("#7");
// function a(b,c){
//     return b*c;
// }
// console.log(10,3);
// console.log( a(3,10) );

// console.log("#8");
// function a(b){
//     for(var i=0; i<10; i++){
//         console.log(i);
//     }
//     return i;
// }
// console.log(3);
// console.log(4);

// console.log("#9");
// function a(){
//     for(var i=0; i<10; i++){
//         i = i +2;
//         console.log(i);
//     }
// }
// a();

// console.log("#10");
// function a(b,c){
//     for(var i=b; i<c; i++) {
//         console.log(i);
//     }
//     return b*c;
// }
// a(0,10);
// console.log(a(0,10));

// console.log("#11");
// function a(){
//     for(var i=0; i<10; i++){
//         for(var j=0; j<10; j++){
//             console.log(j);
//         }
//         console.log(i);
//     }
// }

// console.log("#12");
// function a(){
//     for(var i=0; i<10; i++){
//         for(var j=0; j<10; j++){
//             console.log(i,j);
//         }
//         console.log(j,i);
//     }
// }

// console.log("#13");
// var z = 10;
// function a(){
//     var z = 15;
//     console.log(z);
// }
// console.log(z);

// console.log("#14");
// var z = 10;
// function a(){
//     var z = 15;
//     console.log(z);
// }
// a();
// console.log(z);

console.log("#15");
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);