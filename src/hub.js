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

import {
	METHODS as templateFunc
} from './lib/template.js'

const defaultMethods = {
	'Usage': {
		func: function() {

		},
		usage: "Select other function to view its usage. More details on wiki page by click (?)."
	},
  'Hi': {
    func: function(text) {
      return 'Hi ' + text + ', why not try UpperCase above?'
    },
    usage: "Hello World Example!"
  }
}

var hub = {

}

function loadFuncs() {
	hub = Object.assign({}, defaultMethods, pickerFunc,
		simpleFunc, jsonFunc, timeFunc, listFunc, templateFunc);
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