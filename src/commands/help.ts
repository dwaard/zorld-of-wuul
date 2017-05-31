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
        if(params.length > 1) {
            game.out.println("Help what?");
            return false;
        }
        if(params.length == 1) {
            return this.helpCommand(game, params[0]);
        }
        game.out.println("You are lost. You are alone. You wander around at the university.");
        game.out.print("You carry a bag which seems to ")
        if (game.inventory.length > 0) {
            game.out.println("have something inside it.");
        } else {
            game.out.println("be emtpy.");
        }
        game.out.println();
        game.out.println("Your command words are:");
        game.out.println(game.parser.showCommands());
        game.out.println("Type 'help [command word]' if you want help on a specific command.");
        return false;        
    }

    private helpCommand(game : Game, word : string) : boolean {
        let cmd = game.parser.commands[word];
        if (cmd == null) {
            game.out.println("This command is not known.");
        }
        game.out.println(cmd.getHelp());
        return false;
    }

    /**
     * Returns a help text
     * @return a help text
     */
    getHelp() : string {
        return "Do you really need help on the help command?";
    }

}