// 88%
function solution(A) {
	A.sort();
	// console.log(A);
	let result;

	let i = 0;
	if(A.length === 1) return A[0];
	while(i < A.length){
		if( A[i] !== A[i+1]){
			result = A[i];			
			i++;
		}
		else{			
			i += 2;
		}
		
	}

	return result;
}




console.log(solution([7,3,9,3,6,6, 9]));