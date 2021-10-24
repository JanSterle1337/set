

class Queue {

    constructor() {
         this.arr = [];
         console.log("constructing class object");
    }

    print() {
        for (let item of this.arr) {
            console.log(item);
        }
    }

    enqueue(element) {
        this.arr.push(element);
    }

    dequeue() {
        let dequeuedElement = this.arr.slice(0,1).shift();
        this.arr.splice(0,1);
        console.log("Returned item " + dequeuedElement);
        return dequeuedElement;
    }

    getFront() {
        let firstElement = this.arr.slice(0,1).shift();
        return firstElement;
    }

    isEmpty() {
        if (this.arr.length === 0) {
            console.log("This queue is empty");
            return true;
        } else {
            console.log("This queue is not empty");
            return false;
        }
    }

   
}


let Queue1 = new Queue();
Queue1.enqueue(1);
Queue1.enqueue(2);
Queue1.enqueue(3); 
Queue1.dequeue();
console.log("Getfront: " + Queue1.getFront());
Queue1.print();
Queue1.isEmpty();
