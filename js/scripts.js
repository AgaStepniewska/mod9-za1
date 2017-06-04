
function getTriangleArea(a, h) {
	if ( ( a <= 0) || (h <= 0) ) {
		return 'Incorrect ' + 'data';
	}
	else {
		return a*h/2;
	}
}
var triangle1Area = getTriangleArea(10, 15);
console.log( triangle1Area );
var triangle2Area = getTriangleArea(0, 4);
console.log( triangle2Area );
var triangle3Area = getTriangleArea(3, 8);
console.log( triangle3Area );
