import * as vscode from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient/node';
import * as path from 'path';
import * as os from 'os';
import { execSync } from 'child_process';

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {
    // Determine server path based on platform
    let serverCommand: string;
    const platform = os.platform();
    
    if (platform === 'win32') {
        serverCommand = 'psharp-lsp.exe';
    } else {
        serverCommand = 'psharp-lsp';
    }

    let serverOptions: ServerOptions = {
        command: serverCommand,
        args: [],
    };

    let clientOptions: LanguageClientOptions = {
        documentSelector: [
            { scheme: 'file', language: 'psharp' }
        ],
        synchronize: {
            fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
        }
    };

    client = new LanguageClient(
        'psharpLanguageServer',
        'P# Language Server',
        serverOptions,
        clientOptions
    );

    client.start();

    // Command: Execute P# file
    let executeFileCommand = vscode.commands.registerCommand('psharp.executeFile', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor');
            return;
        }

        const filePath = editor.document.fileName;
        try {
            const result = execSync(`psharp "${filePath}"`, { encoding: 'utf-8' });
            const terminal = vscode.window.createOutputChannel('P# Output');
            terminal.append(result);
            terminal.show();
        } catch (error) {
            vscode.window.showErrorMessage(`Error executing P# file: ${error}`);
        }
    });

    // Command: Execute P# selection
    let executeSelectionCommand = vscode.commands.registerCommand('psharp.executeSelection', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor');
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);
        
        if (!text) {
            vscode.window.showErrorMessage('No selection');
            return;
        }

        try {
            // Write temporary file and execute
            const fs = require('fs');
            const tmpFile = path.join(os.tmpdir(), 'psharp_temp.ps');
            fs.writeFileSync(tmpFile, text);
            
            const result = execSync(`psharp "${tmpFile}"`, { encoding: 'utf-8' });
            const terminal = vscode.window.createOutputChannel('P# Output');
            terminal.append(result);
            terminal.show();
            
            fs.unlinkSync(tmpFile);
        } catch (error) {
            vscode.window.showErrorMessage(`Error executing P# selection: ${error}`);
        }
    });

    context.subscriptions.push(executeFileCommand);
    context.subscriptions.push(executeSelectionCommand);
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
