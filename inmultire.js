/* 

    FACTORII   a & b    {
                        // a = numarul de unde incepe                       ***
                        // b = numarul cu care se va inmultii               ***
                        // repetare = de cate ori se va inmultii            ***
                        }

*/                
var a = 1;         // incepem de la numarul 1 
var b = 5;         // inmultim cu numarul 5 
var repetare = 10; // se va repeta inmultirea de la 1 la 20
var dwd = 22;
document.write("<h1 style=color:green;margin:20px;font-size:2em;> Inmultim cu "+ `"`+b+`":`+ "</h1>");     // Info 
while (a <= repetare ) {
    document.write( "<h2 style=color:red;margin-left:60px;font-size:2em;> " +a+" x "+b+"= "+a*b + "</h2>")
    a++;
}


