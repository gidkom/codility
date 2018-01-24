// 100%

function solution(X, Y, D) {
	// Y-X is actual distance to cover with jumps
	if ((Y - X) % D == 0) {
	    return Math.floor((Y - X) / D);
	}
	return Math.floor((Y - X) / D + 1);
}

console.log(solution(10, 85, 30));