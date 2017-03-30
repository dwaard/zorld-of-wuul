/**
 * This class is part of the "Zorld of Wuul" application. 
 * "Zorld of Wuul" is a very simple, text based adventure game.  
 * 
 * This main class represents the supertype of all command objects.
 * a Command is responsible for changing the game state when the 
 * command is executed.
 * 
 * @author  Bugslayer
 * @version 2017.03.30
 */
abstract class Command {

    /**
     * Definition of the method that might change the state of the game. The
     * parser calls this method when the user wants to have that command executed
     * Each subclass should use this method to define what should happen then.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    abstract execute(game: Game, params : string[]) : boolean;

}