function solution(A) {
	let len = A.length + 1;
	let data = new Set(A);
	let i=1;
	while( i <= len ){
		if(!data.has(i)){
			return i;
		}
		i++;
	}
}


console.log(solution([2,3,1,5]));