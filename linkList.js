// class for constructing a Node
class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
  }
}



// class for constructing a linkedList
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }


  // add item to the first in the linked list
  prepend(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }


  // add item to the last in the linked list
  append(data) {
    let currentNode = this.head;
    while(currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    
    currentNode.nextNode = new Node(data);
    this.size++;
  }


  // gives the length of the linked list
  length() {
    return this.size;
  }

  
  // returns the first node in the linked list
  start() {
    return this.head;
  }


  // returns the last node in the linked list
  tail() {
    let currentNode = this.head;
    while(currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }


  // returns the node at given index
  at(index) {
    let i = 0;
    let currentNode = this.head;
    if (index >= this.size) {
      return `Index: ${index} is not available as the size is ${this.size}.`;
    }

    while (i <= index) {
      if (i === index) {
        return currentNode;
      }

      currentNode = currentNode.nextNode;
      i++;
    }
  }


  // removes the last element from the linked list
  pop() {
    let currentNode = this.head;
    while(currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = null;
    this.size--;
  }


  // checks for the value in the list
  contains(value) {
    let currentNode = this.head;
    if (currentNode.data == value) {
      return true;
    }

    while(currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      if (currentNode.data === value) {
        return true;
      }
    }

    return false;
  }

  
  // returns the index of the given value
  find(value) {
    let i = 0;
    let currentNode = this.head;

    while(currentNode.nextNode !== null) {
      if (currentNode.data === value) {
        return `The index of this node is ${i}.`;
      }

      currentNode = currentNode.nextNode;
      i++;
    }

    if (currentNode.nextNode === null && currentNode.data === value) {
      return `The index of this node is ${i}.`;
    }

    return `There is no such value in this list.`
  }

  // represents the linked list in string format
  // (value) -> (value) -> (value) -> null
  toString() {
    let string = '"';
    let currentNode = this.head;
    while(currentNode.nextNode !== null) {
      string += `(${currentNode.data}) -> `;
      currentNode = currentNode.nextNode;
    }

    if (currentNode.nextNode === null) {
      string += `(${currentNode.data}) -> null"`;
    }

    return string;
  }


  // inserts a node at given index
  insertAt(data, index) {
    let i = 0;
    let currentNode = this.head;
    let previousNode;
    if (index < 0) {
      return `Please provide a valid index.`
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    while(currentNode.nextNode !== null) {
      if (i === index) {
        previousNode.nextNode = new Node(data, previousNode.nextNode);
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      i++;
      this.size++;
    }

    if (currentNode.nextNode === null && i === index) {
      previousNode.nextNode = new Node(data, previousNode.nextNode);
      return;
    } 
  }


  // removes a node at given index
  removeAt(index) {
    let i = 0;
    let currentNode = this.head;
    let previousNode;
    if (index < 0) {
      return `Please provide a valid index.`
    }

    if (index === 0) {
      this.head = currentNode.nextNode;
      currentNode.nextNode = null;
      return;
    }

    while(currentNode.nextNode !== null) {
      if (i === index) {
        previousNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = null;
        this.size--;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      i++;
    }

    if (currentNode.nextNode === null && i === index) {
      previousNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = null;
      this.size--;
      return;
    }
  }
}

