/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val); // create a new node with the value passed in

    if(!this.head){ //if there is no head: if the linked list is empty
      this.head = newNode; //set the head to the new node
      this.tail = this.head; //set the tail to the head
    } else { //if there is a head : if the linked list is not empty
      this.tail.next = newNode; //set the next node after the tail new node
      this.tail = newNode; //set the tail to the new node
    }
    this.length += 1; //increment the length of the linked list

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val); //create a new node with the value passed in 

    if(this.head === null){ //if the head is null : if the linked list is empty
      this.head = newNode; //set the head to the new node
    } else {
      newNode.next = this.head; //
      this.head = newNode; //set the head to the new node
    }
    if (this.length === 0){ //if the length of the linked list is 0
      this.tail = this.head; //then set the tail to the head
    }
    this.length += 1; //increment the length of the linked list
  }

  

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1); 
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx >= this.length || idx < 0){ //if the index is greater than the length of the linked list or less than 0
      throw new Error("Index error"); //throw an error
    }
    return this._getAt(idx).val; //return the value of the node at the index passed in

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >=this.length || idx < 0){ //if the index is greater than the length of the linked list or less than 0
      throw new Error("Index error"); //throw an error
    }
    let cur = this._get(idx); //set the current node to the node at the index passed in
    cur.val = val; //set the value of the current node to the value passed in
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx > this.length || idx < 0){ //if the index is greater than the length of the linked list or less than 0
      throw new Error("Index error"); //throw an error
    }
    if (idx === 0){//if the index is 0
      this.unshift(val); //use the unshift method to add the value to the beginning of the linked list
    }
    if (idx === this.length){ //if the index is the length of the linked list
    return this.push(val); //use the push method to add the value to the end of the linked list
    }

    let prev = this._get(idx - 1); //get the node before the index passed in

    let newNode = new Node(val); //create a new node with the value passed in
    newNode.next = prev.next; //set the next node of the new node to the next node of the previous node
    prev.next = newNode; //set the next node of the previous node to the new node

    this.length += 1; //increment the length of the linked list

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0){ //if the index is greater than the length of the linked list or less than 0
      throw new Error("Index error"); //throw an error
    }

    //remove first item
    if (idx === 0){ //if the index is 0
      let val = this.head.val; //set the value to the value of the head
      this.head = this.head.next; //set the head to the next node
      this.length -= 1; //decrement the length of the linked list
      if (this.length < 2){
        this.tail = this.head;
      }
      return val; 
    }
    let prev = this._get(idx -1);

    //remove the tail
    if (idx === this.length - 1){  
      let val = prev.next.val; //
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }

    //remove any node 
    let val = prev.next.val; 
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0){
      return 0;
    }
    let total = 0;
    let current = this.head;

    while(current){
      total += current.val;
      current = current.next;
    }
    return total / this.length;  
  }
}

module.exports = LinkedList;
