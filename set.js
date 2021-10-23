class mySet {

    

    constructor() {
        this.tab = [];
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

    findIntersection(otherSet) {
        let intersectionSet = new mySet();

        for (let i = 0; i < this.tab.length; i++) {
            let temp = this.tab[i];

            if (otherSet.tab.indexOf(temp) >= 0) {
                intersectionSet.addValue(temp);
            }
            
        }

        return intersectionSet;
    }

    findDifference(otherSet) {                  
        let differenceSet = new mySet();     //didnt work when I initialised default values to it -->look constructor
                                            //took me two hours to realize that it had default values so the comparison didnt work
        

        let sumTab = this.tab.concat(otherSet.tab);

        
        sumTab.sort(function(a,b){
            return a-b;
        });

        console.log("Summed tab: ");
        for (let i = 0; i < sumTab.length; i++) {
            console.log(sumTab[i]);
        }


        for (let i = 0; i < sumTab.length-1; i++) {
           let temp = sumTab[i];
           let pos = sumTab.indexOf(temp,i+1);
           let pos2 = differenceSet.tab.indexOf(temp,0);
           console.log("pos1: " + pos);
           console.log("pos2: " + pos2);
           if (pos === -1 && pos2 === -1) {
            differenceSet.addValue(temp);
            differenceSet.print();
           } 
        }

        return differenceSet;        
    }


}

let dataSet = new mySet();
let dataSet2 = new mySet();
dataSet.addValue(3);
dataSet.addValue(5);
dataSet.addValue(17);
dataSet2.addValue(11);
dataSet2.addValue(17);
console.log("print of set1: ");
dataSet.print();
console.log(dataSet.getValues());
/*dataSet.deleteValue(2); //deletes it in the set if it finds the value */
console.log("print of set2: ");
dataSet2.print();

Union = dataSet.createUnion(dataSet2);  //creates an object of set that includes elements of set1 and set2
console.log("print of union set: ");
Union.print();

Intersection = dataSet.findIntersection(dataSet2);
console.log("print of intersection set: ");
Intersection.print();  //it works just fine...we deleted 

Difference = dataSet.findDifference(dataSet2);
console.log("print of difference set: ");
Difference.print();
