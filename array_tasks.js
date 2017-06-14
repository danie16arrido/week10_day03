Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

Array.prototype.unique = function() {
    var a = [];
    for (var i=0, l=this.length; i<l; i++)
        if (a.indexOf(this[i]) === -1)
            a.push(this[i]);
    return a;
}

var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.insert(index, itemToAdd);
		return arr;
	},

	square: function (arr) {
			return arr.map(function( number ){
				return Math.pow(number, 2);
			});
	},

	sum: function (arr) {
		return arr.reduce(function( total, number ){
			return total + number;
		})
	},

	countOcurrences: function( arr ){
		var counter = {};
		arr.forEach(function( item ){
  		counter[ item ] = counter[ item ] + 1 || 1;
		});
		return counter;
	},

	findDuplicates: function ( arr ) {
		var count = this.countOcurrences( arr );
		var result = [];
		for (var item in count){
			if(count[ item ] > 1){
				result.push( item );
			}
		}
		return result;
	},

	removeAndClone: function (arr, valueToRemove) {
			var count = this.countOcurrences( arr );
			delete count[valueToRemove];
			return Object.keys(count);

	},

	findIndexesOf: function (arr, itemToFind) {
		var indexes = [];
		// arr.forEach(function( item, index ){
  	// 	if (item === itemToFind){
		// 		indexes.push(index);
		// 	}
		// })

		arr.reduce(function ( acc, currentValue, currentIndex ){
			if(currentValue === itemToFind){
				indexes.push(currentIndex);
			}
		}, 0)
		return indexes;
	},

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
