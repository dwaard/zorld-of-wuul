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

    static readonly NORTH = "north";
    static readonly EAST  = "east";
    static readonly SOUTH = "south";
    static readonly WEST  = "west";
    static readonly UP    = "up";
    static readonly DOWN  = "down";
    
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
        if (neighbor == null) {
            delete this.exits[direction];
        } else {
            this.exits[direction] = neighbor;
        }
    }

    /**
     * Define multiple exits from this room. This method accepts a variable length array of Room object in a certain order. 
     * The order is exactly: NORTH, EAST, SOUTH, WEST, UP, DOWN. Non existing exits can be specified by null. 
     * @param neighbors An array of exits in a specific order.
     */
    setExits(neighbors : Room[]) : void {
        if (neighbors == null || neighbors.length < 1)
            return;
        this.setExit(Room.NORTH, neighbors[0]);
        if (neighbors.length < 2)
            return;
        this.setExit(Room.EAST, neighbors[1]);
        if (neighbors.length < 3)
            return;
        this.setExit(Room.SOUTH, neighbors[2]);
        if (neighbors.length < 4)
            return;
        this.setExit(Room.WEST, neighbors[3]);
        if (neighbors.length < 5)
            return;
        this.setExit(Room.UP, neighbors[4]);
        if (neighbors.length < 6)
            return;
        this.setExit(Room.DOWN, neighbors[5]);
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

