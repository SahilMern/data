class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push operation
    push(element) {
      this.items.push(element);
    }
  
    // Pop operation
    pop() {
      if (this.isEmpty()) {
        return "Underflow"; // Stack empty hai
      }
      return this.items.pop();
    }
  
    // Peek operation
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get stack size
    size() {
      return this.items.length;
    }
  
    // Clear the stack
    clear() {
      this.items = [];
    }
  }
  
  // Stack ka use
  const stack = new Stack();
  
  stack.push(10); // Stack me 10 add kiya
  stack.push(20); // Stack me 20 add kiya
  stack.push(30); // Stack me 30 add kiya
  
  console.log(stack.peek()); // 30 (Top element)
  console.log(stack.pop());  // 30 (Stack se 30 remove kiya)
  console.log(stack.size()); // 2 (Ab stack me 2 elements hain)
  