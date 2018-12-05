var gauss = require('./gauss');

function test() {
	$A = [[1, 1, 1], [2, 1, 2], [1, 2, 3]];
    $x = [6, 10, 14];
    $result = gauss($A, $x);
    console.log($result); 
}

test();