/**
 * Implementing Command that tries to quit the game.
 * 
 * @author  Bugslayer
 * @version 2017.03.30
 */
class Quit extends Command {

    /** 
     * "Quit" was entered. Check the rest of the command to see
     * whether we really quit the game.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    execute(game: Game, params : string[]) : boolean {
        if(params.length > 0) {
            game.out.println("Quit what?");
            return false;
        }

        game.parser.input.disabled = true;
        game.isOn = false;
        game.out.println("Thank you for playing.  Good bye.");
        game.out.println("Hit F5 to restart the game");
        
        return true;  // signal that we want to quit
    }

}