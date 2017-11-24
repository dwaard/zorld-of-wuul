/**
 * Implementing Command that tries to remove an item from the users bag and
 * places it into the current room
 * 
 * @author  Bugslayer
 * @version 2017.03.31
 */
class Drop extends Command {

    /** 
     * "drop" was entered. 
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    execute(game: Game, params : string[]) : boolean {
        if(params.length == 0) {
            game.out.println("Drop what?");
            return false;
        }
        let item = game.player.items.remove(params[0]);
        if (item == null) {
            game.out.println("There is no " + params[0] + " in your bag!");
            return false;
        }        
        game.player.currentRoom.items.add(item);
        game.out.println(item.name + " is dropped");
        return false;
    }

    /**
     * Returns a help text
     * @return a help text
     */
    getHelp() : string {
        return "drop [itemname]: Try to remove the item form your bag and leave it into the current room.";
    }

}