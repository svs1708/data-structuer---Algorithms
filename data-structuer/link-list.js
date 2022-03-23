class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default  class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //   add to head
  add(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  //   add to last
  addLast(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // find value
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        console.log(true);
      } else {
        console.log(false);
      }
      current = current.next;
    }
  }

  //   insert at index
  insert(value, index) {
    if (index > 0 && this.size >= index) {
      if (index === 0) {
        this.head = new Node(value, this.head);
        this.size++;
        return;
      }
      let count = 0;
      let current, previous;
      const node = new Node(value);
      current = this.head;
      while (count < index) {
        previous = current;
        count++;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
      this.size++;
      one.print();
    } else {
      console.log("can't find index");
    }
  }

  //   get value by index
  show(index) {
    if (index >= 0 && this.size > index) {
      let count = 0;
      let current = this.head;
      while (!(count === index)) {
        current = current.next;
        count++;
      }
      console.log(current.value);
    } else {
      console.log("please enter valid index number");
    }
  }

  //  delete by index
  delete(index) {
    if (index >= 0 && this.size - 1 >= index) {
      let count = 0;
      let current = this.head;
      let previous;
      if (index === 0) {
        this.head = current.next;
        this.size--;
        this.print();
        return;
      }

      while (!(count === index)) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
    this.print();
  }

  // find index of value
  indexOfValue(value) {
    let count = 0;
    let current = this.head;

    while (!(current.value === value)) {
      count++;

      if (this.size - 1 < count) {
        console.log("can't find this value of this index");
        return;
      }
      current = current.next;
    }
    console.log(count);
  }

  //   print only value
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

