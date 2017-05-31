/**
 * Class Room - a room in an adventure game.
 *
 * This class is part of the "Zorld of Wuul" application. 
 * "Zorld of Wuul" is a very simple, text based adventure game.  
 *
 * A "Room" represents one location in the scenery of the game.  It is 
 * connected to other rooms via exits.  The exits are labelled north, 
 * east, south, west.  For each direction, the room stores a reference
 * to the neighboring room, or null if there is no exit in that direction.
 * 
 * @author  Michael Kölling, David J. Barnes and Bugslayer
 * @version 2017.03.30
 */
class Room {

    /**
     * The text that describes the room. This will be printed when the 
     * user enters the room or looks in the room.
     */
    description : string;

    /**
     * The available exits of the room.
     */
    exits : { [direction: string] : Room} = {};

    /**
     * The list of items in the room.
     */
    items : Inventory = new Inventory();
    
    /**
     * Create a room described "description". Initially, it has
     * no exits. "description" is something like "a kitchen" or
     * "an open court yard".
     * @param description The room's description.
     */
    constructor(description : string) {
        this.description = description;
    }

    /**
     * Define an exit from this room.
     * @param direction The direction of the exit.
     * @param neighbor  The room to which the exit leads.
     */
    setExit(direction : string, neighbor : Room) : void {
        this.exits[direction] = neighbor;
    }

    /**
     * Return a description of the room in the form:
     *     You are in the kitchen.
     *     Exits: north west
     * 
     * @return A long description of this room
     */
    getLongDescription() : string {
        return "You are " + this.description + ".<br/>" + this.items.getItemsString() + ".<br/>" + this.getExitString();
    }

    /**
     * Return a string describing the room's exits, for example
     * "Exits: north west".
     * @return Details of the room's exits.
     */
    getExitString() : string {
        let returnString : string = "Exits:";
        for(let direction in this.exits) {
            returnString += " " + direction;
        }
        return returnString;
    }

    /**
     * Return the room that is reached if we go from this room in direction
     * "direction". If there is no room in that direction, return null.
     * @param direction The exit's direction.
     * @return The room in the given direction.
     */
    getExit(direction : string) : Room {
        return this.exits[direction];
    }

}

