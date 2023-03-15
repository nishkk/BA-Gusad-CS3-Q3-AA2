var a = 1;

while(a <= 60){
	document.writeln(a+1);
	a+=2;
}

//========

document.writeln("<br>");

var b = 1;

do{
	document.writeln(b+2);
	b+=3;
}
while(b<=60);

//========

document.writeln("<br>");

for(var c = 5; c<=50; c=c+5){
	document.writeln(c);
}