/**
 * Class World - responsible for maintaining the game world
 *
 * This class is part of the "Zorld of Wuul" application. 
 * "Zorld of Wuul" is a very simple, text based adventure game.  
 *
 * @author  Bugslayer
 * @version 2017.03.30
 */
class World {

    /**
     * The available rooms of the world.
     */
    rooms : { [name: string] : Room} = {};
    
    /**
     * The available items of the world.
     */
    items : Inventory;

    /**
     * constructs and initializes the world.
     */
    constructor()
    {
        this.reset();
    }

    /**
     * Resets the entire world
     */
    reset() : void
    {
        this.createRooms();
        this.setExits();
        this.createItems();
        this.spawnItems();
    }

    /**
     * Spawns a new player in the world. It sets its inventory and places it into a room
     * 
     * @param name optional name of the player
     */
    spawnPlayer(name="player") : Player
    {
        let player = new Player(name);

        // give him some items
        player.items.add(this.items.get("key1"));
        
        // place him somewhere in the world
        player.currentRoom = this.rooms["outside"];

        return player;
    }

    /**
     * Create all the rooms and link their exits together.
     */
    private createRooms() : void 
    {
        this.rooms = {};
        this.rooms["outside"] = new Room("outside the main entrance of the university");
        this.rooms["theater"] = new Room("in a lecture theater");
        this.rooms["pub"]     = new Room("in the campus pub");
        this.rooms["lab"]     = new Room("in a computing lab");
        this.rooms["office"]  = new Room("in the computing admin office");
        this.rooms["kitchen"] = new Room("in the pubs kitchen");        
    }

    private setExits() : void
    {
        this.setExitsOfRoom("outside", [null, "theater", "lab", "pub"]);
        this.setExitsOfRoom("theater", [null, null, null, "outside"]);
        this.setExitsOfRoom("pub"    , [null, "outside", "kitchen", null]);
        this.setExitsOfRoom("kitchen", ["pub", "lab", null, null]);
        this.setExitsOfRoom("lab"    , ["outside", "office", null, "kitchen"]);
        this.setExitsOfRoom("office" , [null, null, null, "lab"]);
    }

    private createItems() : void 
    {
        this.items = new Inventory();
        this.items.add(new GameItem("book"    , "an old, torn and stained book about Java programming. It must be hundreds of years old"));
        this.items.add(new FoodItem("sandwich", "a big, tasty pulled pork sandwich with Blues Hog bbq sauce"));
        this.items.add(new GameItem("key1"    , "a plastic, round key with some kind of chip inside"));
    }

    private spawnItems() : void 
    {
        this.rooms["theater"].items.add(this.items.get("book"));
        this.rooms["pub"].items.add(this.items.get("sandwich"));
    }

    /**
     * Helper method to simplify the process of setting the exits of a specified room
     * 
     * @param roomName the name of the room to set the exits
     * @param exitNames an array containing the names of the neighboring rooms in a certain order
     * @see Room.setExits
     */
    private setExitsOfRoom(roomName: string, exitNames: string[]) : void
    {
        let room = this.rooms[roomName];
        if(room == null) {
            return;
        }
        let neighbors = [];
        for(let name of exitNames) {
            neighbors.push(this.rooms[name]);
        }
        room.setExits(neighbors);
    }

}    