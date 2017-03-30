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
        if(params.length > 0) {
            game.out.println("Look what?");
            return false;
        }
        game.out.println(game.currentRoom.getLongDescription());
        return false;
    }

}