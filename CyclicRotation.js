// 100%
function solution(A, K) {
	
	function cyclic(b, l) {
		// if cycle is 0 or array is empty
		if(l === 0 || b.length === 0) return b;

		let last = b.pop();
		b.unshift(last);
		l--;
		return cyclic(b, l);
	}

	return cyclic(A, K);
}


console.log(solution([], 3));