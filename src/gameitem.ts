/**
 * This class is part of the "Zorld of Wuul" application. 
 * "Zorld of Wuul" is a very simple, text based adventure game.  
 * 
 * This class represents the supertype of all doors, keys, food
 * and other items in the game. Some items can be picked up by the
 * user. Items can be part of a Room or in the player's inventory.
 * 
 * @author  Bugslayer
 * @version 2017.03.31
 */
class GameItem {

    /**
     * A <b>unique</b> name of the item. During development, the programmer 
     * must make sure the same name is not used more than once.
     */
    name : string;

    /**
     * The text that describes the item. This will be printed when the 
     * user looks at the item.
     */
    description : string;

    /**
     * Contructs the item.
     * @param name the unique name of the item
     * @param description the description of the item
     */
    constructor(name : string, description : string = "") {
        this.name = name;
        this.description = description;
    }

    use(game : Game) : boolean {
        game.out.println("You played with it for a while, but it doesn't seem to be useful in any kind. Finally you put it back in your bag.");
        return false;
    }

}