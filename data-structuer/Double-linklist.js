class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Double {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // add to last
  add(value) {
    let node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
      this.size++;
      return;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.size++;
  }

  // add top
  addTop(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.size++;
    }

    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  //   find by index number

  show(index) {
    if (index >= 0 && index < this.size) {
      let count = 0;
      let current = this.head;
      while (count < index) {
        current = current.next;
        count++;
      }
      console.log(current.value);
    } else {
      console.log("invalid index number");
    }
  }

  //   find index nuber of given value
  findIndexOf(value) {
    let count = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        console.log(count);
        return;
      }
      current = current.next;
      count++;
    }
    console.log("Invalid values");
  }

  delete(index) {
    if (index >= 0 && this.size - 1 >= index) {
      let count = 0;
      let current = this.head;
      if (index === 0) {
        let del = current;
        let nextnode = del.next;
        this.head = nextnode;
        this.size--;
        this.print();
        return;
      }
      if (index === this.size - 1) {
        const delnode = this.tail;
        const prevnode = delnode.prev;
        prevnode.next = null;
        this.tail = prevnode;
        this.size--;
        this.print();
        return;
      }
      while (current) {
        if (count === index) {
          const delnode = current;
          const prevnode = delnode.prev;
          const nextnode = delnode.next;

          prevnode.next = nextnode;
          nextnode.prev = prevnode;
          this.size--;
          this.print();
          return;
        }
        current = current.next;
        count++;
      }
    }
  }

  deleteByValue(value) {
    let current = this.head;
    let count = 0;
    if (this.head.value === value) {
      const delnode = current;
      const nextnode = delnode.next;
      nextnode.prev = null;
      this.head = nextnode;
      this.size--;
      this.print();
      return;
    }
    if (this.tail.value === value){
        const delnode = this.tail
        const prevnode = delnode.prev;
        prevnode.next = null;
        this.tail = prevnode;
        this.size--;
        this.print();
        return;
        
    }
    while (current) {
        if(current.value = value){
            const delnode = current;
          const prevnode = delnode.prev;
          const nextnode = delnode.next;

          prevnode.next = nextnode;
          nextnode.prev = prevnode;
          this.size--;
          this.print();
          return;
        }
        current = current.next;
        count++;

    }
  }

  // print values
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

