'use babel';

import provider from './provider';

import {CompositeDisposable} from 'atom';

module.exports = {
    activate() {
        this.subscriptions = new CompositeDisposable();
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'haskell-autocompletion:register_modules': () => this.registerModules()
        }));
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'haskell-autocompletion:register_every_module': () => provider.registerEveryModule()
        }));
    },
    deactivate() {
        this.subscriptions.dispose();
    },
    registerModules() {
        let editor;
        if (editor = atom.workspace.getActiveTextEditor()) {
            provider.registerModules(editor.getSelectedText());
        }
    },
    getProvider() {
        return provider;
    }
};
