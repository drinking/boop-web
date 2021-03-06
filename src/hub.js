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

import {
    METHODS as leetcodeFunc
} from './lib/leetcode.js'

import {
    METHODS as csFunc
} from './lib/cheat-sheet.js'

const defaultMethods = {
    'Usage': {
        func: function () {

        }, usage: "Select other function to view its usage. More details on wiki page by click (?)."
    }, 'Hi': {
        func: function (text) {
            return 'Hi ' + text + ', why not append UpperCase above?'
        }, usage: "Hello World Example!"
    }, 'Redirect': {
        func: function (text) {
            return text;
        }, usage: "Redirect the output as input and clear current functions"
    }
}

let hub = {};

function loadFunctions() {
    hub = Object.assign({}, defaultMethods, pickerFunc, leetcodeFunc, simpleFunc, jsonFunc, timeFunc, listFunc, templateFunc, csFunc);
    return Object.keys(hub);
}

function mapFunc(name) {
    return hub[name].func
}

function mapUsage(name) {
    return hub[name].usage
}

function needArgument(name) {
    return true === hub[name].argument
}

export {
    loadFunctions, mapFunc, mapUsage, needArgument
}