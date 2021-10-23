class mySet {

    

    constructor() {
        this.tab = [1,500,100,4];
        console.log("constructing class object");
    }


    addValue(element) {
        let x = this.includeValue(element);
        
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

    createUnion(otherSet) {
        /*  !!!NOTE!!! first method of making an union set
       let unionTab = [...this.tab, ...otherSet.tab];

       let unionStack = new  mySet();
       unionStack.tab = [ ...new Set(unionTab)]
       return unionStack; */
       


        /*  second method of making an union set */

       let unionSet = new mySet();

       for (let i = 0; i < this.tab.length; i++) {
           unionSet.addValue(this.tab[i]);
       }

       for (let j = 0; j < otherSet.tab.length; j++)  {
            unionSet.addValue(otherSet.tab[j]);
      
        }

        return unionSet;

    }




}

let dataSet = new mySet();
let dataSet2 = new mySet();
dataSet.addValue(3);
dataSet2.addValue(999);
dataSet2.addValue(500);
console.log("print of set1: ");
dataSet.print();
console.log(dataSet.getValues());
dataSet.deleteValue(2); //deletes it in the set if it finds the value
console.log("print of set2: ");
dataSet.print();

Union = dataSet.createUnion(dataSet2);  //creates an object of set that includes elements of set1 and set2
console.log("print of union set: ");
Union.print();


