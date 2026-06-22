# P# for Visual Studio Code

Complete Visual Studio Code extension for P# shell language with:

- Syntax highlighting with TextMate grammar
- Language Server Protocol integration
- Auto-completion for keywords and built-in functions
- Hover information
- Execute P# file (Ctrl+Shift+R)
- Execute P# selection

## Installation

1. Clone repository
2. Run `npm install`
3. Run `npm run esbuild`
4. Install the extension in VSCode: `code --install-extension psharp-0.1.0.vsix`

## Features

### Syntax Highlighting
- Keywords, operators, strings, numbers
- Proper bracket matching
- Comment support

### IntelliSense
- Auto-completion for P# keywords
- Auto-completion for built-in functions
- Parameter hints
- Hover documentation

### Commands
- **Execute P# File**: Ctrl+Shift+R - Run the current file
- **Execute P# Selection**: Runs selected text

### Language Configuration
- Proper indentation rules
- Auto-closing brackets
- Surrounding pairs

## Requirements

- P# compiler (`psharp`) in PATH
- P# Language Server (`psharp-lsp`) in PATH

## Release Notes

### 0.1.0
- Initial release
- Full syntax highlighting
- LSP integration
- Execute commands
