function solve(input) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const cat of input) {
        let [name, age] = cat.split(" ");
        let currentCat = new Cat(name, age);
        currentCat.meow();
    }
    

}


solve(
    ['Candy 1', 'Poppy 3', 'Nyx 2']
)