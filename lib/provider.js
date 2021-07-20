'use babel';

class Provider {
    constructor() {
        this.selector = '.source.haskell';
        this.inclusionPriority = 1;
        this.suggestionPriority = 2;
        this.sortSuggestions = true;
        this.sources = ['Prelude'];
        this.data = require('../data/haskell_keywords.json');
    }

    registerModules(text) {
        if (!text) {
            return;
        }
        // for (let i of text.split(' ')) {
        for (let i of text.split('\n')) {
            for (let j of i.split(' ')) {
                if (this.data.hasOwnProperty(j)) {
                    this.sources.push(j);
                }
            }
        }
    }

    registerEveryModule() {
        this.sources = [];
        for (let i in this.data) {
            this.sources.push(i);
        }
    }

    getSuggestions({prefix}) {
        suggestions = [];
        for (let i of this.sources) {
            for (let j in this.data[i]) {
                if (j.startsWith(prefix)) {
                    suggestions.push({
                        text: j,
                        leftLabel: i === 'Prelude' ? null : i,
                        rightLabel: this.data[i][j]
                    })
                }
            }
        }
        return suggestions;
    }
}

module.exports = new Provider();
