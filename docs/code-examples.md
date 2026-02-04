# Code Examples - Syntax Highlighting Test

This page showcases the enhanced syntax highlighting with various programming languages, line numbers, and improved visibility.

## ✨ Features

- **Line Numbers**: Automatically added to all code blocks (enabled globally)
- **Enhanced Visibility**: High-contrast colors for maximum readability
- **Interactive**: Hover over lines to highlight them
- **Language Labels**: Display programming language in top-right corner
- **Copy Button**: Appears on hover for easy code copying
- **Custom Light Theme**: VS Code-inspired theme with vibrant colors

## Java Example

```java showLineNumbers
public class HelloWorld {
    public static void main(String[] args) {
        // This is a comment
        System.out.println("Hello, World!");

        String greeting = "Welcome to Java!";
        int number = 42;

        for (int i = 0; i < 5; i++) {
            System.out.println("Count: " + i);
        }
    }
}
```

## Python Example

```python showLineNumbers
def fibonacci(n):
    """Generate Fibonacci sequence"""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Main execution
if __name__ == "__main__":
    for i in range(10):
        print(f"Fibonacci({i}) = {fibonacci(i)}")
```

## JavaScript Example

```javascript showLineNumbers
// Array manipulation
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log('Doubled:', doubled);
console.log('Sum:', sum);

// Async function example
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

## Go Example

```go showLineNumbers
package main

import "fmt"

func main() {
    message := "Hello, Go!"
    fmt.Println(message)

    numbers := []int{1, 2, 3, 4, 5}
    for _, num := range numbers {
        fmt.Printf("Number: %d\n", num)
    }
}
```

## Rust Example

```rust showLineNumbers
fn main() {
    let greeting = "Hello, Rust!";
    println!("{}", greeting);

    let numbers = vec![1, 2, 3, 4, 5];
    for num in numbers {
        println!("Number: {}", num);
    }
}
```

## SQL Example
```sql showLineNumbers
SELECT
    users.name,
    orders.total,
    orders.created_at
FROM users
INNER JOIN orders ON users.id = orders.user_id
WHERE orders.status = 'completed'
ORDER BY orders.created_at DESC
LIMIT 10;
```

## JSON Example

```json showLineNumbers
{
  "name": "LearnLog",
  "version": "1.0.0",
  "description": "A learning documentation site",
  "features": [
    "syntax highlighting",
    "dark mode",
    "responsive design"
  ],
  "settings": {
    "theme": "dark",
    "fontSize": 16
  }
}
```

## Bash Example

```bash showLineNumbers
#!/bin/bash

# Backup script
echo "Starting backup..."

SOURCE_DIR="/home/user/documents"
BACKUP_DIR="/home/user/backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup
tar -czf "$BACKUP_DIR/backup_$DATE.tar.gz" "$SOURCE_DIR"

echo "Backup completed: backup_$DATE.tar.gz"
```

## Inline Code Examples

You can also use `inline code` within sentences. For example, the `console.log()` function is used for debugging in JavaScript.

The `System.out.println()` method is the Java equivalent for printing to the console.

In Python, you use `print()` to display output.

## Highlighted Lines

You can highlight specific lines using magic comments:

```java showLineNumbers
public class Example {
    public static void main(String[] args) {
        int x = 10; // highlight-next-line
        int y = 20; // highlight-start
        int sum = x + y;
        System.out.println("Sum: " + sum);
        // highlight-end
    }
}
```

## Multiple Language Comparison

### For Loop in Different Languages

**Java:**
```java showLineNumbers
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

**Python:**
```python showLineNumbers
for i in range(5):
    print(i)
```

**JavaScript:**
```javascript showLineNumbers
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

**Go:**
```go showLineNumbers
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
```
