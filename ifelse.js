//=igual !=diferente >maior <menor >=maior ou igual <=menor ou igual
var n1 = 10;
var n2 = 5;
var n3 = 5;
var n4 = 9;
var nm = 4;
var media;

media = (n1+n2+n3+n4)/nm
/*if(media >=7){
    console.log ("aprovado sua nota é: "+ media)
}
else{
    console.log ("reprovado")
}*/

if(media >=7){
       console.log ("aprovado sua nota é: "+ media);
   }
   else if (media >=5){
       console.log ("recuperação " + media );
   }
   else {
       console.log ("reprovado " + media);
   }

