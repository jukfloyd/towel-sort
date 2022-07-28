
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (!matrix || matrix.length == 0) return [];
	return matrix.map((item, index) => ((index++)%2 != 0) ? item.reverse().join('.') : item.join('.') ).join('.').split('.');
}
