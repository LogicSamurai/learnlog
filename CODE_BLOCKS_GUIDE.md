# Code Blocks & Syntax Highlighting Guide

This guide explains how to use code blocks effectively in your Docusaurus site.

## 📋 Table of Contents
- [Basic Code Blocks](#basic-code-blocks)
- [Line Numbers](#line-numbers)
- [Highlighting Lines](#highlighting-lines)
- [Language Support](#language-support)
- [Best Practices](#best-practices)

---

## Basic Code Blocks

Use triple backticks with the language name for syntax highlighting:

````
```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}
```
````

**Result:**
```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}
```

---

## Line Numbers

Add `showLineNumbers` to display line numbers:

````
```javascript showLineNumbers
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('World');
```
````

**Result:**
```javascript showLineNumbers
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('World');
```

---

## Highlighting Lines

### Single Line Highlight
Add `highlight-next-line` comment before the line you want to highlight:

````
```javascript
function greet(name) {
    // highlight-next-line
    console.log(`Hello, ${name}!`);
}
```
````

**Result:**
```javascript
function greet(name) {
    // highlight-next-line
    console.log(`Hello, ${name}!`);
}
```

### Block Highlight
Use `highlight-start` and `highlight-end` comments:

````
```javascript
function calculateSum(a, b) {
    // highlight-start
    const sum = a + b;
    return sum;
    // highlight-end
}
```
````

**Result:**
```javascript
function calculateSum(a, b) {
    // highlight-start
    const sum = a + b;
    return sum;
    // highlight-end
}
```

### Focus Lines
Use `focus-start` and `focus-end` to dim non-focused lines:

````
```javascript
function example() {
    const x = 10;
    // focus-start
    const y = 20;
    const result = x + y;
    // focus-end
    return result;
}
```
````

---

## Language Support

Your site supports syntax highlighting for:

- **Java**: `java`
- **Python**: `python`
- **JavaScript**: `javascript` or `js`
- **TypeScript**: `typescript` or `ts`
- **JSX**: `jsx`
- **TSX**: `tsx`
- **CSS**: `css`
- **Bash**: `bash` or `shell`
- **JSON**: `json`
- **YAML**: `yaml` or `yml`
- **Markdown**: `markdown` or `md`
- **Go**: `go`
- **Rust**: `rust`
- **C++**: `cpp`
- **C**: `c`
- **SQL**: `sql`

**Example:**

````
```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```
````

**Result:**
```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

---

## Best Practices

### 1. Always Specify Language
Always include the language name for proper syntax highlighting:

✅ **Good:**
````
```javascript
const x = 10;
```
````

❌ **Bad:**
````
```
const x = 10;
```
````

### 2. Use Line Numbers for Long Code
For code blocks with more than 5 lines, use `showLineNumbers`:

✅ **Good:**
```javascript showLineNumbers
function complexAlgorithm(data) {
    const processed = data.map(item => {
        return item * 2;
    });
    return processed.filter(x => x > 10);
}
```

### 3. Highlight Key Parts
Use line highlighting to draw attention to important code:

```javascript
// Important configuration
const API_KEY = 'your-api-key'; // highlight-next-line
const API_URL = 'https://api.example.com';
```

### 4. Keep Code Concise
If code is too long, consider:
- Breaking it into multiple smaller blocks
- Using comments to explain omitted parts
- Showing only the relevant portions

### 5. Use Descriptive Comments
Add comments within code blocks to explain complex logic:

```javascript
// Calculate factorial using recursion
function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n <= 1) return 1;
    
    // Recursive case
    return n * factorial(n - 1);
}
```

---

## Customization

Your site uses the **VS Dark** theme for syntax highlighting, which provides:
- Professional color scheme
- Excellent readability
- Seamless line number integration
- Support for all major programming languages

To customize colors or styling, edit:
- `docusaurus.config.js` - Prism theme configuration
- `src/css/custom.css` - Custom CSS overrides

---

## Tips & Tricks

### Inline Code
Use single backticks for inline code: `const x = 10;`

### File Paths in Code Blocks
You can add a title to show the filename:

````markdown
```bash title="Terminal"
npm install
```
````

### Copy Button
All code blocks automatically have a copy button on hover.

---

## Troubleshooting

**Problem: Line numbers have different background**
- **Solution**: This is now fixed! The VS Dark theme handles this automatically.

**Problem: Syntax highlighting not working**
- **Solution**: Make sure you're using a supported language identifier

**Problem: Code too wide**
- **Solution**: Code blocks automatically scroll horizontally when needed

---

## Quick Reference

| Feature | Syntax |
|---------|--------|
| Basic code block | ` ```language ` |
| With line numbers | ` ```language showLineNumbers ` |
| Highlight next line | ` // highlight-next-line ` |
| Highlight block | ` // highlight-start ` ... ` // highlight-end ` |
| Focus block | ` // focus-start ` ... ` // focus-end ` |

---

**Need more help?** Check the [Docusaurus documentation](https://docusaurus.io/docs/markdown-features/code-blocks)
