'use babel';

import provider from './provider';

import {CompositeDisposable} from 'atom';


module.exports = {
    activate() {
        this.subscriptions = new CompositeDisposable();
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'haskell-autocompletion:register_every_module': () => provider.registerEveryModule()
        }));
        atom.workspace.getTextEditors().forEach((editor) => {
            editor.onDidInsertText(() => {
                provider.registerModules(editor.getText());
            });
        });
    },
    deactivate() {
        this.subscriptions.dispose();
    },
    registerModules() {
        const editor = atom.workspace.getActiveTextEditor();
        if (editor) {
            provider.registerModules(editor.getSelectedText());
        }
    },
    getProvider() {
        return provider;
    }
};
