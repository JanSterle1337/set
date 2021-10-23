class mySet {

    

    constructor() {
        this.tab = [];
        console.log("constructing class object");
    }


    setValues() {
        for (let i = 0; i < 10; i++) {
            this.tab[i] = Math.floor(Math.random() * (100-1) + 1);
            console.log(this.tab[i]);
        }
    }
}

let dataSet = new mySet();

dataSet.setValues();
