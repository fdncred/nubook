import * as vscode from 'vscode';
import { NuShellNotebookProvider } from './nubookProvider';

export function activate(context: vscode.ExtensionContext) {
	const nubookProvider = new NuShellNotebookProvider();
	context.subscriptions.push(vscode.notebook.registerNotebookContentProvider('nushell-nubook', nubookProvider));
	// context.subscriptions.push(registerLanguageProvider(projectContainer, octokit));
	// context.subscriptions.push(registerCommands(projectContainer, notebookProvider));
}

// this method is called when your extension is deactivated
export function deactivate() {}
