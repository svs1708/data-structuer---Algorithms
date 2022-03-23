import LinkList from './link-list.js';
// const linklist = require("./link-list")


class Queue {
    constructor() {
        this.linklist = new LinkList()
    }

enQueue(value){
    this.linklist.add(value)
}
print(){
    this.linklist.print()
}
deQueue(){
   if(!this.isEmpty()){
        this.linklist.delete(0)
    }else{
        console.log("empty Queue")
    }
}
isEmpty(){
    if(this.linklist.head === null){
        return true
    }
    return false
}
front(){
    console.log(this.linklist.head.value)
}
}

