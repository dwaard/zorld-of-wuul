/**
 * This class is part of the "Zorld of Wuul" application. 
 * "Zorld of Wuul" is a very simple, text based adventure game.  
 * 
 * This parser reads user input and tries to interpret it as an "Adventure"
 * command. Every time it is called it reads a line from the terminal and
 * tries to interpret the line as a two word command. 
 *
 * The parser has a set of known command words. It checks user input against
 * the known commands, and invokes a relevant method on the Game object.
 * 
 * @author  Michael Kölling, David J. Barnes and Bugslayer
 * @version 2017.03.30
 */
class Parser {

    commandStack : Array<string> = [];

    commandHistoryIndex : number = 0;

    input : HTMLInputElement;
    game : Game;
    commands : { [name: string] : Command} = {
        "go" : new Go(),
        "look" : new Look(),
        "help" : new Help(),
        "take" : new Take(),
        "drop" : new Drop(),
        "use"  : new Use(),
        "quit" : new Quit()
    };

    aliases : { [word: string] : string} = {
        "g" : "go",
        "l" : "look",
        "h" : "help",
        "t" : "take",
        "d" : "drop",
        "u" : "use",
        "q" : "quit",
    };

    /**
     * Creates the parser object.
     * 
     * @param game the game object to prse commands for
     * @param input the HTMLInputElement to parse the value from
     */
    constructor(game: Game, input : HTMLInputElement) {
        this.game = game;
        this.input = input;
        input.onkeyup = (e) => { // event handler function
            if (e.keyCode == 13 && this.game.isOn) {
                // Invoke parse method wehen user pressed enter
                let command = this.input.value;
                this.game.out.println(command);
                this.parse(command.split(" "));
                this.input.value = ""; // clears the input element 
                this.pushCommand(command);
            }
            if (e.keyCode == 40) { //down-key
                this.input.value = this.getNextCommand();
            } 
            if (e.keyCode == 38) { // up-key
                this.input.value = this.getPreviousCommand();
            } 
        }
    }

    private pushCommand(command : string) : void {
        this.commandStack.push(command);
        this.commandHistoryIndex = this.commandStack.length;
    }

    private getNextCommand() : string {
        if (this.commandHistoryIndex < this.commandStack.length) {
            this.commandHistoryIndex++;
        }
        let cmd = this.commandStack[this.commandHistoryIndex];
        if (cmd == null) {
            cmd = "";
        }
        return cmd;
    }

    private getPreviousCommand() : string {
        if (this.commandHistoryIndex > 0) {
            this.commandHistoryIndex--;
        }
        let cmd = this.commandStack[this.commandHistoryIndex];
        if (cmd == null) {
            cmd = "";
        }
        return cmd;
    }

    /**
     * Parses the specified words and invokes the corresponding method
     * on the game object.
     * 
     * @param words an array of words to parse
     */
    parse(words : string[]) : void {
        let wantToQuit : boolean = false;
        let command : Command = this.getCommand(words[0]);
        if (command == null) {
            this.printError();
            return;
        }

        let params = words.slice(1);
        wantToQuit = command.execute(this.game, params);

        if (!wantToQuit) {
            this.game.out.print(">");
        }
    }

    getCommand(word : string) : Command
    {
        return this.commands[this.cleanWord(word)];
    }

    cleanWord(word : string) : string
    {
        let result = this.aliases[word];
        if (result != null) {
            return result;
        }
        return word;
    }

    /**
     * Print out a list of valid command words.
     */
    showCommands() : string {
        let result :  string = "";
        // Loop through all command words
        for (let cmd in this.commands) {
            result += cmd + " ";
        }
        return result;
    }

    /**
     * Print out error message when user enters unknown command.
     * Here we print some erro message and a list of the 
     * command words.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    printError() : void {
        this.game.out.println("I don't know what you mean...");
        this.game.out.println();
        this.game.out.println("Your command words are:");
        this.game.out.println(this.showCommands());
    }

}