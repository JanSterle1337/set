class mySet {

    

    constructor() {
        this.tab = [1,2,3,4];
        console.log("constructing class object");
    }


    addValue(element) {
        let x = this.includeValue(element);
        console.log(x);
        if (x === false) {
            this.tab.push(element);
        }
       
    }

    includeValue(element) {

        let check = 0;

        for (let i = 0; i <  this.tab.length; i++) {
            
            if (this.tab[i] === element) {
                check++;
                return true;
            }

        }

        return false;
    }

    getValues() {
        return this.tab;
    }

    print() {
        for (let i = 0; i < this.tab.length; i++) {
            console.log(this.tab[i]);
        }
    }

    deleteValue(element) {
        if (this.tab.indexOf(element) !== -1) {
            for (let i = 0; i < this.tab.length; i++){
                if (this.tab[i] === element) {
                    this.tab.splice(i,1);
                }
            }
        }
    }


}

let dataSet = new mySet();

dataSet.addValue(3);
dataSet.print();
console.log(dataSet.getValues());
dataSet.deleteValue(2); //deletes it in the set if it finds the value
dataSet.print();
