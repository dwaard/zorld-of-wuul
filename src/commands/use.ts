/**
 * Implementing Command that tries to use an item that is in the users bag.
 * 
 * @author  Bugslayer
 * @version 2017.03.31
 */
class Use extends Command {

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
        let item = game.inventory.get(params[0]);
        if (item == null) {
            game.out.println("Can't find " + params[0]);
            return false;
        }
        return item.use(game);
    }

    eat(game : Game, item : GameItem) : boolean {
        game.out.print("Omnomnomnomnom");
        game.inventory.remove(item.name);
        return false;
    }

    /**
     * Returns a help text
     * @return a help text
     */
    getHelp() : string {
        return "use [itemname]: Try to use the item. The item must be in your bag. So, you might grab it first.";
    }

}