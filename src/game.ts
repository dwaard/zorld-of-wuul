/**
 * 
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
 * 
 */
class Game {
    parser : Parser;
    out : Printer;

    isOn : boolean;

    world : World;

    player : Player;

    /**
     * Create the game and initialise its internal map.
     */
    constructor(output: HTMLElement, input: HTMLInputElement) {
        this.parser = new Parser(this, input);
        this.out = new Printer(output);
        this.isOn = true;
        this.world = new World();
        this.player = this.world.spawnPlayer();
        this.printWelcome();
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
        this.out.println(this.player.currentRoom.getLongDescription());
        this.out.print(">");
    }
}