/**
 * Implementing Command that tries to move the player into one direction.
 * 
 * @author  Bugslayer
 * @version 2017.03.30
 */
class Go extends Command {

    /** 
     * Try to go in one direction. If there is an exit, enter
     * the new room, otherwise print an error message.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    execute(game: Game, params : string[]) : boolean {
        if(params.length == 0) {
            // if there is no second word, we don't know where to go...
            game.out.println("Go where?");
            return;
        }

        let direction = params[0];

        // Try to leave current room.
        let nextRoom = game.currentRoom.getExit(direction);

        if (nextRoom == null) {
            game.out.println("There is no door!");
        }
        else {
            game.currentRoom = nextRoom;
            game.out.println(game.currentRoom.getLongDescription());
        }
        return false;
    }

    /**
     * Returns a help text
     * @return a help text
     */
    getHelp() : string {
        return "go [direction]: Try to move to the given direction and, if there is an exit, enter the next area there.";
    }

}