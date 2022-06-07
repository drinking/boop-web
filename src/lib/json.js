const METHODS = {
    'Stringify': {
        func: function (text) {
            return JSON.stringify(text);
        },
        usage: "Transform JSON text to string"
    },
    'JSONify': {
        func: function (text) {
            let formated = text.trim();
            if (text[0] !== '"') {
                formated = '"' + formated;
            }

            if (text[text.length - 1] !== '"') {
                formated = formated + '"';
            }

            return JSON.parse(formated);
        },
        usage: "Transform text to JSON"
    },
    'JSONFormat': {
        func: function (text) {
            try {
                return JSON.stringify(JSON.parse(text), null, 2);
            } catch (error) {
                return "error"
            }
        },
        usage: "Format JSON text"
    }
};

export {
    METHODS
}