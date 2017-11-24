/**
 * Implementing Command that tries to put an item into the users bag.
 * 
 * @author  Bugslayer
 * @version 2017.03.31
 */
class Grab extends Command {

    /** 
     * "grab" was entered. 
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    execute(game: Game, params : string[]) : boolean {
        if(params.length == 0) {
            game.out.println("Grab what?");
            return false;
        }
        let item = game.currentRoom.items.remove(params[0]);
        if (item == null) {
            game.out.println("Can't find " + params[0]);
            return false;
        }        
        game.inventory.add(item);
        game.out.println(item.name + " is put in your bag");
        return false;
    }

    /**
     * Returns a help text
     * @return a help text
     */
    getHelp() : string {
        return "grab [itemname]: Try to take the item from the current room, an put it into your bag.";
    }

}