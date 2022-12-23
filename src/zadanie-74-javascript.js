let l1_pol = parseInt(prompt("Podaj liczbe 1 z przedzialu od 20 do 60: ", ""));
let l2_pol = parseInt(prompt("Podaj liczbe 2 z przedzialu od 20 do 60: ", ""));
let pocz_pol = parseInt(prompt("Podaj poczatkowa wartosc: ", ""));
let text = prompt("Podaj text: ");

if (l2_pol > l1_pol) var append = 5;
else var append = -5;

for (; ((pocz_pol > 0) && (pocz_pol < 100)); pocz_pol += append) {
	document.write("<p style=\"font-size:"+pocz_pol+"px; color: black;\"><br>"+text+"<br></p>");
}
