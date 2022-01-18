
const METHODS = {
  
  'PickRow': function(text) {

  	var array = text.split('\n')
  	if (array.length < 2) {
  		return ""
  	}

  	var numbers = array[0].match(/\d+/g).map(Number);
  	if (numbers.length < 2) {
  		return ""
  	}

  	const row = numbers[0]
  	const total = numbers[1]

  	var result = []
  	for (var i = 1; i < array.length; i++) {
  		if (i % total == row) {
  			result.push(array[i])
  		}
  	}

	return result.join('\n');
  },
  
  'PickColumn': function(text) {

  	var array = text.replace(/\s\s+/g, ' ').split('\n')
  	if (array.length < 1) {
  		return ""
  	}

  	var numbers = array[0].match(/\d+/g).map(Number);
  	if (numbers.length == 0) {
  		return ""
  	}

  	const column = numbers[0]
  	var result = []
  	for (var i = 1; i < array.length; i++) {
  		var t = array[i];
  		result.push(t.split(' ')[column-1])
  	}

	return result.join('\n');
  }
}

export {METHODS}