
// ---------------------------------
// Q1 
// var x = prompt("enter a randome number :");
// console.log(Number(x));


// ---------------------------------
// Q2

// var y = prompt("enter any number ?");
// if ( y%3==0 && y%4==0){
//     console.log("Output Yes")
// } else {
//     console.log("Output No")
// }


// ---------------------------------
// Q3

// var f = prompt("Enter your first number ?")
// var s = prompt("Enter your scind number ?")
// if(f < s){
//     console.log( Number(s) );
// } else{
//     console.log(Number(f));
// };


// ---------------------------------
// Q4

// var n = prompt("enter an number :")
// if (n < 0 ){
//     console.log("negtive")
// } else {
//     console.log("postive")
// }


// ---------------------------------
// Q5

// var max = prompt("enter your max value ?")
// var mid = prompt("enter your midlle value ?")
// var min = prompt("enter your min value ?")

// if(max > mid && max < min ){

//     console.log(min + " big")
//     console.log(mid + " small")
// }else if(mid > max && mid < min){

//     console.log(min + " big")
//     console.log(max + " small")
    
// }else if(min > max && min < mid){

//     console.log(mid + " big")
//     console.log(max + " small")
// }else if(mid < max && mid > min){

//     console.log(min + " small")
//     console.log(max + " big")
// }else if(max < mid && max > min ){

//     console.log(min + " small")
//     console.log(mid + " big")
// }else if(min < max && min > mid){

//     console.log(mid + " small")
//     console.log(max + " big")
// }


// ---------------------------------
// Q6 -7

// var ov = prompt("enter an number ?")
// if (ov % 2 == 0){
//     console.log("even")
// }else{
//     console.log("odd")
// }


// ---------------------------------
// Q8

// var vow = prompt("enter a chars : ")
// var vo = ["a" , "e" , "i" , "o" , "u" , "A" , "E" , "I" , "O" , "U"];

// if ( vow == vo[0]){
//     console.log("vowel")
// }else if ( vow == vo[1]){
//     console.log("vowel")
// }else if (vow == vo[2]){
//     console.log("vowel")
// }else if (vow == vo[3]){
//     console.log("vowel")
// }else if (vow == vo[4]){
//     console.log("vowel")
// }else if ( vow == vo[5]){
//     console.log("vowel")
// }else if ( vow == vo[6]){
//     console.log("vowel")
// }else if (vow == vo[7]){
//     console.log("vowel")
// }else if (vow == vo[8]){
//     console.log("vowel")
// }else if (vow == vo[9]){
//     console.log("vowel")
// }else {
//     console.log("Consnant")
// }


// ---------------------------------
// Q9 

// var b = prompt("enter a number :")
// for (i = 0 ; i <= b ; i++){
//     console.log(i)
// }


// ---------------------------------
// Q10

// var m = prompt("enter a number :")
// for(i = 0 ; i <= 12 ; i++){
//     console.log(m * i)
// }


// ---------------------------------
// Q11

// var w =prompt("enter a number")
// for(i = 0 ; i < w ; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }


// ---------------------------------
// Q12

// var n1 = prompt("enter a number ");
// var n2 = prompt("enter a number ");
// var ruselt = n1**n2;
// console.log(ruselt)


// ---------------------------------
// Q13

// var one = prompt("enter a first number ")
// var two = prompt("enter a sicend number ")
// var three = prompt("enter a therd number ")
// var four = prompt("enter a fourth number ")
// var five = prompt("enter a fifth number ")
// var total = Number(one) + Number(two) + Number(three) + Number(four) + Number(five);
// var average = total / 5 ;
// var percnt = average / 100 * 100;
// console .log ("Total marks = " + total)
// console .log ("average marks = " + average)
// console .log ("percentage = " + percnt + "%")


// ---------------------------------
// Q14 

// var month = prompt("wrait a month number ?")
// if (month == 1){
//     for(i = 0 ; i <= 31 ; i++){
//         console.log(i)
//     }
// }else if ( month == 2){
//     for(i = 0 ; i <= 28 ; i++){
//         console.log(i)
//     }
// }else if ( month == 3){
//     for(i = 0 ; i <= 31 ; i++){
//         console.log(i)
//     }
// }else if ( month == 4){
//     for(i = 0 ; i <= 30 ; i++){
//         console.log(i)
//     }
// }else if ( month == 5){
//     for(i = 0 ; i <= 31 ; i++){
//         console.log(i)
//     }
// }else if ( month == 6){
//     for(i = 0 ; i <= 30 ; i++){
//         console.log(i)
//     }
// }else if ( month == 7){
//     for(i = 0 ; i <= 31 ; i++){
//         console.log(i)
//     }
// }else if ( month == 8){
//     for(i = 0 ; i <= 30 ; i++){
//         console.log(i)
//     }
// }else if ( month == 9){
//     for(i = 0 ; i <= 31 ; i++){
//         console.log(i)
//     }
// }else if ( month == 10){
//     for(i = 0 ; i <= 30 ; i++){
//         console.log(i)
//     }
// }else if ( month == 11){
//     for(i = 0 ; i <= 30 ; i++){
//         console.log(i)
//     }
// }else if ( month == 12){
//     for(i = 0 ; i <= 31 ; i++){
//         console.log(i)
//     }
// }else{
//     console.log("there isn't other month ya kdab !!")
// }


// ---------------------------------
// Q15

// var ph = prompt ("Physics marks :");
// var ch = prompt ("Chemistry marks :");
// var bi = prompt ("Biology marks :");
// var mm = prompt ("Mathematics marks :");
// var co = prompt ("Computer marks :");
// var total = Number(ph) + Number(ch) + Number(bi) + Number(mm) + Number(co);
// var Percentage =  total / 5   ;
// if(Number(Percentage) >= 90){
//     console.log("Your percentage "+Percentage + "% : Grad A" )
// }else if (Number(Percentage) >= 80){
//     console.log("Your percentage "+Percentage + "% : Grad B" )
// }else if (Number(Percentage) >= 70){
//     console.log("Your percentage "+Percentage + "% : Grad C" )
// }else if (Number(Percentage) >= 60){
//     console.log("Your percentage "+Percentage + "% : Grad D" )
// }else if (Number(Percentage) >= 40){
//     console.log("Your percentage "+Percentage + "% : Grad E" )
// }else if (Number(Percentage) < 40){
//     console.log("Your percentage "+Percentage + "% : Grad F" )
// }


// ---------------------------------
// Q16  

// var days = prompt("enter a number of a month")
// switch (Number(days)) {
//     case 1:
//         console.log(31)
//         break;
//     case 2:
//         console.log(28)
//         break;
//     case 3:
//         console.log(31)
//         break;
//     case 4:
//         console.log(30)
//         break;
//     case 5:
//         console.log(31)
//         break;
//     case 6:
//         console.log(30)
//         break;
//     case 7:
//         console.log(31)
//         break;
//     case 8:
//         console.log(30)
//         break;
//     case 9:
//         console.log(31)
//         break;
//     case 10:
//         console.log(30)
//         break;
//     case 11:
//         console.log(31)
//         break;
//     case 12:
//         console.log(31)
//         break;
//     default:
//         console.log("kda anta bttsht8l armat")
//         break;
// }


// ---------------------------------
// Q17

// var alphabet = prompt("enter an alphabet :")
// var conson = ["a", "e", "i" , "o",  "u" ,"A", "E", "I" , "O",  "U"]

// switch (alphabet) {
//     case conson[0]:
//         console.log("vowel")
//         break;
//     case conson[1]:
//         console.log("vowel")
//         break;
//     case conson[2]:
//         console.log("vowel")
//         break;
//     case conson[3]:
//         console.log("vowel")
//         break;
//     case conson[4]:
//         console.log("vowel")
//         break;
//     case conson[5]:
//         console.log("vowel")
//         break;
//     case conson[6]:
//         console.log("vowel")
//         break;
//     case conson[7]:
//         console.log("vowel")
//         break;
//     case conson[8]:
//         console.log("vowel")
//         break;
//     case conson[9]:
//         console.log("vowel")
//         break;
//     default:
//         console.log("consonant")
//         break;
// }


// ---------------------------------
// Q17 

// var max = prompt("enter a number fr")
// var min = prompt("enter a number sc")
// var total = Number(max) == Number(min)
// switch (total){
//     case Number(max) < Number(min):
//         console.log(Number(max) + " is Biggest Than " + Number(min));
//         break;
//     case Number(min) < Number(max):
//         console.log(Number(min) + " is Biggest Than " + Number(max));
//         break;
//     }


// ---------------------------------
// Q18 

// var nb = prompt("enter an number .....");
// var r = nb % 2 ;

// switch (r) {
//     case  0:
//         console.log("even")
//         break;
//     default:
//         console.log("odd")
//         break;
// }


// ---------------------------------
// Q19 Write a program to check whether a number is positive or negative or zero

// var x = prompt("enter any number")

// switch(true){
//     case  (x == 0):
//         console.log("it's zero")
//         break
//     case (x > 0):
//         console.log("it's pos")
//         break;
//     case (x < 0):
//         console.log("it's nig")
//         break;
//     default :
//         console.log("Btsht8liny ??")
//         break;
// }


// ---------------------------------
// Q20 

// var one =prompt("enter first number ");
// var calc =prompt("enter your calc operation");
// var two =prompt("enter scend number");

// var plus = Number(one) + Number(two);
// var min = Number(one) - Number(two);
// var mlt = Number(one) * Number(two);
// var dviv = Number(one) / Number(two);

// switch (calc) {
//     case "+":
//         console.log(plus)
//         break;
//     case "-":
//         console.log(min)
//         break;
//     case "*":
//         console.log(mlt)
//         break;
//     case "/":
//         console.log(dviv)
//         break;
//     default:
//         console.log("Msh sh8al ya mwlana di 2ala 3la adna ")
//         break;
// }
