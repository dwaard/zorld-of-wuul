/**
 * This class is part of the "Zorld of Wuul" application. 
 * "Zorld of Wuul" is a very simple, text based adventure game.  
 * 
 * Users can walk around some scenery. That's all. It should really be 
 * extended to make it more interesting!
 * 
 * To play this game, create an instance of this class and call the "play"
 * method.
 * 
 * This main class creates and initialises all the others: it creates all
 * rooms, creates the parser and starts the game.  It also evaluates and
 * executes the commands that the parser returns.
 * 
 * @author  Michael Kölling, David J. Barnes and Bugslayer
 * @version 2017.03.30
 */
class Game {
    parser : Parser;
    out : Printer;

    currentRoom : Room;

    isOn : boolean;

    inventory : Inventory = new Inventory();

    /**
     * Create the game and initialise its internal map.
     */
    constructor(output: HTMLElement, input: HTMLInputElement) {
        this.parser = new Parser(this, input);
        this.out = new Printer(output);
        this.isOn = true;
        this.createRooms();
        this.printWelcome();
    }

    /**
     * Create all the rooms and link their exits together.
     */
    createRooms() : void {
        // create the rooms
        let outside = new Room("outside the main entrance of the university");
        let theater = new Room("in a lecture theater");
        let pub = new Room("in the campus pub");
        let lab = new Room("in a computing lab");
        let office = new Room("in the computing admin office");
        let kitchen = new Room("in the pubs kitchen");
        
        // initialise room exits
        outside.setExit("east", theater);
        outside.setExit("south", lab);
        outside.setExit("west", pub);

        theater.setExit("west", outside);

        pub.setExit("east", outside);
        pub.setExit("south", kitchen);

        kitchen.setExit("north", pub);
        kitchen.setExit("east", lab);

        lab.setExit("north", outside);
        lab.setExit("east", office);
        lab.setExit("west", kitchen);
        
        office.setExit("west", lab);

        // Create the game items
        theater.items.add(new GameItem("book", "an old, torn and stained book about Java programming. It must be hundreds of years old"));
        pub.items.add(new FoodItem("sandwich", "a big, tasty pulled pork sandwich with Blues Hog bbq sauce"));

        // Fill the players inventory
        this.inventory = new Inventory();
        this.inventory.add(new GameItem("key1", "a plastic, round key with some kind of chip inside"));

        // spawn player outside
        this.currentRoom = outside;
    }

    /**
     * Print out the opening message for the player.
     */
    printWelcome() : void {
        this.out.println();
        this.out.println("Welcome to the Zorld of Wuul!");
        this.out.println("Zorld of Wuul is a new, incredibly boring adventure game.");
        this.out.println("Type 'help' if you need help.");
        this.out.println();
        this.out.println(this.currentRoom.getLongDescription());
        this.out.print(">");
    }
}