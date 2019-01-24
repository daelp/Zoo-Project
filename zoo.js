
function run(){
    /* PART ONE
    //sleep("tiger");
    // PART TWO
    //eat("tiger", "meat")
    //eat("tiger", "bacon")
    */
    //PART THREE AND FOUR
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");
    rarity.sleep();
    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    var stinger = new Bee("Stinger");
    stinger.eat("pollen");
    stinger.sleep();


    var zoebot = new Zookeeper("zoe");
    var animals = [tigger,pooh,rarity,gemma,stinger];
    zoebot.feedAnimals(animals,"fish");

    console.log(Animal.getPopulation());

}

/*function sleep(name){
    console.log(name + " sleeps for 8 hours");
}
*/

/*function eat(name, food) {
    console.log(name + " eats " + food);

    food == this.favoriteFood ? console.log("YUM!!! " + name + " wants more " + food): sleep("tigger");
}
*/

var animalPopulation = 0;






class Animal{

    constructor(name,favoriteFood){
            this.name = name;
            this.favoriteFood = favoriteFood;

            animalPopulation++;
    }
    static getPopulation() {
        return animalPopulation;
    }
    sleep(name){
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food){
        console.log(this.name + " eats " + food);

        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food): this.sleep();
    }
}
class Tiger extends Animal{

    constructor(tName){
        super(tName,"meat");
    }
}

class Bear extends Animal{
    constructor(bName){
        super(bName,"fish");
    }
    sleep(){
        console.log(this.name + " hibernates for 4 months");
    }

}

class Giraffe extends Animal{
    constructor(name){
        super(name,"leaves");
    }
    eat(food){
        console.log(this.name + " eats " + food);

        food == this.favoriteFood ? super.eat("leaves"): console.log("YUCK!!!  " + this.name + " will not eat " + food);
    }
}

class Bee extends Animal{
    constructor(name){
        super(name,"pollen");

    }
    sleep(name){
        console.log(this.name + " never sleeps")
    }

    eat(food){
        console.log(this.name + " eats " + food);

        food == this.favoriteFood ? super.eat("pollen"): this.sleep("stinger");

    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name, "marshmallows");

    }
    sleep(name){
        console.log(this.name + " sleeps in a cloud");
    }
    eat(food){
        console.log(this.name + " eats " + food);

        food == this.favoriteFood ? console.log("YUM !!! " + this.name + " wants more " + food) : this.sleep("rarity");

    }

}

class Zookeeper{
    constructor(name){
        this.name= name;
    }
    feedAnimals(animals,food){
        console.log(this.name + " is feeding " + food + " to " + animalPopulation + " total animals.");

        for(var i =0; i <animals.length; i++){
            animals[i].eat(food);
        }
    }
}