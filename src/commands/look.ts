/**
 * Implementing Command that shows info about the current room to
 * the user
 * 
 * @author  Bugslayer
 * @version 2017.03.30
 */
class Look extends Command {

    /**
     * Print out some information about the current room.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    execute(game: Game, params : string[]) : boolean {
        if(params.length > 1) {
            game.out.println("Look what?");
            return false;
        }
        if (params.length == 1) {
            let name = params[0];
            if (name == "bag") {
                this.lookInventory(game);
            } else {
                this.lookItem(game, params[0]);
            }
        } else {
            game.out.println(game.currentRoom.getLongDescription());
        }
        return false;
    }

    /**
     * For internal use only 
     * @param game 
     * @param name 
     */
    private lookItem(game: Game, name : string) : boolean {
        let item = game.currentRoom.items.get(name);
        if (item == null) {
            game.out.println("Look what?");
            return false;
        }
        game.out.println("You see " + item.description);
        return false;
    }

    /**
     * For internal use only 
     * @param game 
     */
    private lookInventory(game: Game) {
        game.out.println(game.inventory.getItemsString());
    }

    /**
     * Returns a help text
     * @return a help text
     */
    getHelp() : string {
        return "look [itemname]|bag: When you typed ' bag'  I will take a look in my bag to see what's in there. " +
            "Otherwise I will inspect the item you mentioned. That item must be in the current room though.";
    }

}