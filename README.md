# P# for Visual Studio Code 🎵

Complete Visual Studio Code extension for P# shell language. Write, run, and debug P# scripts directly from VSCode with intelligent IDE features.

---

## 📦 Part of P# Ecosystem

This is one component of the complete P# ecosystem:

| Repository | Purpose |
|-----------|---------|
| [psharp](https://github.com/thomasrayner/psharp) | Core language (Rust) |
| [psharp-lsp](https://github.com/thomasrayner/psharp-lsp) | LSP server for editors |
| **psharp-vscode** (this repo) | VSCode extension |
| [psharp-nvim](https://github.com/thomasrayner/psharp-nvim) | Neovim plugin |
| [psharp-web](https://github.com/thomasrayner/psharp-web) | Web playground & docs |

---

## 🎯 Features

### Syntax Highlighting
- ✨ Keywords (`let`, `fn`, `if`, `for`, etc.)
- 🎨 Operators and punctuation
- 📝 Strings and comments
- 🔢 Numbers and constants
- 🎭 Proper bracket matching

### IntelliSense
- 🤖 **Auto-completion** - Keywords and built-in functions
- 📖 **Hover Info** - Function signatures and documentation
- 💡 **Parameter Hints** - See parameters as you type
- 🔍 **Smart Navigation** - Find references and definitions

### Commands
- ▶️ **Execute P# File** (`Ctrl+Shift+R`) - Run current file
- ▶️ **Execute Selection** - Run selected code
- 🎮 **Interactive REPL** - Built-in terminal

### Language Configuration
- ✓ Auto-indentation
- ✓ Auto-closing brackets
- ✓ Bracket pair colorization
- ✓ Comment support

---

## 📥 Installation

### Option 1: Install from Marketplace (Recommended)

1. Open VSCode
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "P#"
4. Click Install

The extension is now active and ready to use!

### Option 2: Build from Source

```bash
git clone https://github.com/thomasrayner/psharp-vscode
cd psharp-vscode
npm install
npm run esbuild
code --install-extension out/psharp-0.1.0.vsix
```

---

## ⚙️ Configuration

### Requirements

The extension requires:
- ✓ `psharp` compiler (from main psharp repo)
- ✓ `psharp-lsp` server (from psharp-lsp repo)

Both should be in your system PATH.

### Setup

1. **Install P# tools:**
   ```bash
   # Clone and build
   git clone https://github.com/thomasrayner/psharp
   cd psharp
   cargo build --release
   
   # Add to PATH
   export PATH="$PATH:$(pwd)/target/release"
   ```

2. **Install LSP server:**
   ```bash
   git clone https://github.com/thomasrayner/psharp-lsp
   cd psharp-lsp
   cargo build --release
   export PATH="$PATH:$(pwd)/target/release"
   ```

3. **Reload VSCode**
   - Press `Ctrl+Shift+P` and select "Reload Window"

---

## 🚀 Quick Start

### 1. Create a P# File

Create a new file with `.ps` extension:

```bash
touch hello.ps
```

VSCode will automatically recognize it as P# code.

### 2. Write Code

```p#
let greeting = "Hello, P#!"
print(greeting)

let numbers = [1, 2, 3, 4, 5]
for num in numbers {
    print(num * 2)
}
```

### 3. Run Your Script

- **Execute current file:** Press `Ctrl+Shift+R`
- **Execute selection:** Select code and press `Ctrl+Shift+R`
- **Use terminal:** Open terminal and run `psharp hello.ps`

---

## 💡 Usage Examples

### Example 1: IntelliSense

```p#
let arr = [1, 2, 3]
arr.|  ← Completions appear: len, sort, reverse, etc.
    
print(|  ← Parameter hints show
```

### Example 2: Hover Information

```p#
let result = sum([1, 2, 3])
              ↑ Hover to see: "sum(arr: array) -> number"
```

### Example 3: Error Detection

```p#
let x = 5
let y = x +  ← Squiggly line indicates error
              Server shows: "incomplete expression"
```

### Example 4: Command Execution

Select and run code snippet:

```p#
let x = 10
print(x * 2)  ← Select these lines
               Press Ctrl+Shift+R
               Output appears in terminal
```

---

## 🎨 Syntax Highlighting

### Color Scheme

The extension uses a beautiful color scheme:
- 🟣 **Keywords**: Purple (let, fn, if, for)
- 🔵 **Strings**: Blue ("text", 'text')
- 🟢 **Numbers**: Green (42, 3.14)
- 🟡 **Comments**: Gray (# comment)
- ⚪ **Operators**: Default (=, +, -, etc.)

Customize colors in VSCode settings if needed.

---

## 🔑 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+R` | Execute P# file |
| `Ctrl+/` | Toggle comment |
| `Ctrl+[` / `]` | Decrease/increase indent |
| `Alt+Up/Down` | Move line |
| `Ctrl+D` | Select next occurrence |
| `Ctrl+Shift+L` | Select all occurrences |

---

## 📚 Learn More

### Inside VSCode

- Use **Command Palette** (`Ctrl+Shift+P`) to explore commands
- Check **Problems Panel** for diagnostics
- Use **Output Panel** to see debug information

### External Resources

- 🎮 [Interactive Playground](https://thomasrayner.github.io/psharp-web/playground.html)
- 📚 [50+ Examples](https://github.com/thomasrayner/psharp-web/blob/main/EXAMPLES.md)
- 📖 [Cheat Sheet](https://github.com/thomasrayner/psharp-web/blob/main/CHEATSHEET.md)
- 💬 [GitHub Discussions](https://github.com/thomasrayner/psharp/discussions)

---

## 🐛 Troubleshooting

### Extension Not Activating

**Problem:** P# files not recognized  
**Solution:** 
- Reload VSCode: `Ctrl+Shift+P` → "Reload Window"
- Check extension is installed: Ctrl+Shift+X → search "P#"

### IntelliSense Not Working

**Problem:** No completions or hover info  
**Solution:**
- Ensure `psharp-lsp` is in PATH: `which psharp-lsp`
- Check Output panel for LSP connection errors
- Restart VSCode

### Execute Command Not Working

**Problem:** Ctrl+Shift+R doesn't run code  
**Solution:**
- Ensure `psharp` is in PATH: `which psharp`
- Check file has `.ps` extension
- Open terminal and manually run: `psharp filename.ps`

### Error "psharp not found"

**Solution:**
```bash
# Build psharp
git clone https://github.com/thomasrayner/psharp
cd psharp
cargo build --release

# Add to PATH
export PATH="$PATH:$(pwd)/target/release"

# Reload VSCode
```

---

## 🔧 Advanced Configuration

### Settings (settings.json)

```json
{
  "psharp.interpreter": "/path/to/psharp",
  "psharp.lspPath": "/path/to/psharp-lsp",
  "psharp.terminalBackground": "#f5f5f5",
  "[p#]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "psharp.p#"
  }
}
```

### Launch Configuration

For debugging (future feature):

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug P# Script",
      "type": "psharp",
      "request": "launch",
      "program": "${workspaceFolder}/script.ps",
      "console": "integratedTerminal"
    }
  ]
}
```

---

## 🤝 Contributing

### Report Issues

Found a bug? Have a feature request?

→ Post in [GitHub Discussions](https://github.com/thomasrayner/psharp/discussions)

### Contribute Code

1. Fork this repository
2. Create a feature branch
3. Make improvements
4. Submit a pull request

---

## 🔄 Development

### Build Extension

```bash
npm run esbuild          # Build JavaScript
npm run compile          # Compile TypeScript
npm run watch            # Watch for changes
npm run package          # Create .vsix file
```

### Test Extension

```bash
# Open in debug mode
code --extensionDevelopmentPath=$(pwd) .

# Run tests
npm test
```

---

## 📊 Architecture

### File Structure

```
├── src/
│   └── extension.ts          # Main extension code
├── syntaxes/
│   └── p#.tmLanguage.json   # Syntax highlighting rules
├── language-configuration.json # Language config
├── package.json              # Extension manifest
└── README.md                # This file
```

### How It Works

1. **Extension Load** → VSCode loads extension.ts
2. **File Recognition** → Detects `.ps` files
3. **Syntax Highlighting** → Applies tmLanguage.json rules
4. **LSP Connection** → Connects to psharp-lsp server
5. **User Interaction** → Provides completions, hover, etc.
6. **Execute Command** → Runs `psharp` command

---

## 🎵 Philosophy

P# is built on the principle that scripting should be joyful. The VSCode extension enhances this by providing a delightful coding experience with intelligent editor features.

**Your Experience:**
- ✓ Fewer typos with smart completions
- ✓ Better understanding with hover documentation
- ✓ Faster development with helpful features
- ✓ Confidence from real-time diagnostics

---

## 📄 License

MIT - Same as all P# repositories

---

## 🎯 Version History

### 0.1.0 (Current)
- Full syntax highlighting
- LSP integration (completions, hover, navigation)
- Execute file / selection commands
- Language configuration
- Published to VSCode marketplace

### Planned (Future)
- Debug adapter protocol support
- Code formatting
- Snippet support
- Theme improvements
- Performance optimizations

---

## 📚 Related Repositories

- **[Main P# Repository](https://github.com/thomasrayner/psharp)** - Language implementation
- **[P# LSP Server](https://github.com/thomasrayner/psharp-lsp)** - Language intelligence
- **[P# Neovim Plugin](https://github.com/thomasrayner/psharp-nvim)** - Neovim support
- **[P# Web & Docs](https://github.com/thomasrayner/psharp-web)** - Playground, examples, community

---

## 🎮 Get Started

1. Install from VSCode marketplace: Search "P#"
2. Create a `.ps` file
3. Write some P# code
4. Press `Ctrl+Shift+R` to run!
5. Join the community on [GitHub Discussions](https://github.com/thomasrayner/psharp/discussions)

---

**Enjoy coding with P# in VSCode!** 🎵

*Last updated: June 22, 2024*
