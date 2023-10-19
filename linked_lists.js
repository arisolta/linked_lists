class Node {
    constructor(value) {
      this.value = value;
      this.nextNode = null;
    }
  }
  
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Append a new node containing the value to the end of the list
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.nextNode = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    // Prepend a new node containing the value to the start of the list
    prepend(value) {
      const newNode = new Node(value);
      newNode.nextNode = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
      this.size++;
    }
  
    // Return the total number of nodes in the list
    getSize() {
      return this.size;
    }
  
    // Return the first node in the list
    getHead() {
      return this.head;
    }
  
    // Return the last node in the list
    getTail() {
      return this.tail;
    }
  
    // Return the node at the given index
    at(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.nextNode;
      }
      return current;
    }
  
    // Remove the last element from the list
    pop() {
      if (this.size === 0) {
        return;
      }
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let current = this.head;
        while (current.nextNode !== this.tail) {
          current = current.nextNode;
        }
        current.nextNode = null;
        this.tail = current;
      }
      this.size--;
    }
  
    // Returns true if the passed-in value is in the list, otherwise returns false
    contains(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.nextNode;
      }
      return false;
    }
  
    // Returns the index of the node containing value, or null if not found
    find(value) {
      let current = this.head;
      let index = 0;
      while (current) {
        if (current.value === value) {
          return index;
        }
        current = current.nextNode;
        index++;
      }
      return null;
    }
  
    // Represents the LinkedList as a string
    toString() {
      let result = '';
      let current = this.head;
      while (current) {
        result += `(${current.value}) -> `;
        current = current.nextNode;
      }
      result += 'null';
      return result;
    }
  }

// TESTING

  // Create a new linked list
const myList = new LinkedList();

// Test 1: Append values to the list and check the size
myList.append(10);
myList.append(20);
myList.append(30);
console.log("Size after appending 10, 20, 30:", myList.getSize()); // Should print 3

// Test 2: Prepend a value and check the size and head
myList.prepend(5);
console.log("Size after prepending 5:", myList.getSize()); // Should print 4
console.log("Head after prepending 5:", myList.getHead().value); // Should print 5

// Test 3: Get the tail and check its value
console.log("Tail:", myList.getTail().value); // Should print 30

// Test 4: Get a node at a specific index
console.log("Node at index 1:", myList.at(1).value); // Should print 10

// Test 5: Check if the list contains a value
console.log("Contains 20:", myList.contains(20)); // Should print true
console.log("Contains 15:", myList.contains(15)); // Should print false

// Test 6: Find the index of a value
console.log("Index of 20:", myList.find(20)); // Should print 1
console.log("Index of 15:", myList.find(15)); // Should print null

// Test 7: Pop the last element and check the size
myList.pop();
console.log("Size after popping:", myList.getSize()); // Should print 3
console.log("Tail after popping:", myList.getTail().value); // Should print 20

// Test 8: Test the toString method
console.log("LinkedList as a string:", myList.toString()); // Should print (5) -> (10) -> (20) -> null