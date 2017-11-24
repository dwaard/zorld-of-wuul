/**
 * Class Player - a player in an adventure game.
 *
 * This class is part of the "Zorld of Wuul" application. 
 * "Zorld of Wuul" is a very simple, text based adventure game.  
 *
 * A "Player" represents the state of the user of the game.  
 * 
 * @author  Michael Kölling, David J. Barnes and Bugslayer
 * @version 2017.03.30
 */
class Player {
    
    /**
     * The text that describes the room. This will be printed when the 
     * user enters the room or looks in the room.
     */
    name : string;

    /**
     * The list of items in the room.
     */
    items : Inventory = new Inventory();
    
    /**
     * The current location of the player
     */
    currentRoom : Room;

    /**
     * Create a player
     * 
     * @param name The room's description.
     */
    constructor(name : string) {
        this.name = name;
    }


}
    
    