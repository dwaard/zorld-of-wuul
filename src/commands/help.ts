/**
 * Implementing Command that shows help to the user
 * 
 * @author  Bugslayer
 * @version 2017.03.30
 */
class Help extends Command {

    /**
     * Print out some help information.
     * Here we print some stupid, cryptic message and a list of the 
     * command words.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    execute(game: Game, params : string[]) : boolean {
        if(params.length > 0) {
            game.out.println("Help what?");
            return false;
        }
        game.out.println("You are lost. You are alone. You wander around at the university.");
        game.out.println();
        game.out.println("Your command words are:");
        game.out.println(game.parser.showCommands());
        return false;        
    }

}