import {
	METHODS as pickerFunc
} from './lib/picker.js'
import {
	METHODS as simpleFunc
} from './lib/simple.js'
import {
	METHODS as jsonFunc
} from './lib/json.js'
import {
	METHODS as timeFunc
} from './lib/time.js'

import {
	METHODS as listFunc
} from './lib/list.js'

const defaultMethods = {
	'usage': {
		func: function() {

		},
		usage: "Select other function to view its usage. More details on wiki page by click (?)."
	}
}

var hub = {

}

function loadFuncs() {
	hub = Object.assign({}, defaultMethods, pickerFunc,
		simpleFunc, jsonFunc, timeFunc, listFunc);
	return Object.keys(hub);
}

function mapFunc(name) {
	return hub[name].func
}

function mapUsage(name) {
	return hub[name].usage
}

export {
	loadFuncs,
	mapFunc,
	mapUsage
}