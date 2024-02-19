function fibonacci(num) {
// your code here
	let prevOne = 1;
	let BeforePrevOne = 0;
	let fib;

	for (let i = 3; i <= num; i++) {
		fib = prevOne + BeforePrevOne;
		BeforePrevOne = prevOne;
		prevOne = fib;
	}
	return fib;
}

module.exports = fibonacci;
