class Inventory {
    /**
     * The list of items in the inventory.
     */
    private items : { [name: string] : GameItem} = {};

    length : number = 0;

    /**
     * Return a string describing the room's items, for example
     * "Exits: key sword food".
     * @return Details of the room's items.
     */
    getItemsString() : string {
        let returnString : string = "";
        for(let name in this.items) {
            returnString += " " + name;
        }
        if (returnString.length == 0) {
            returnString = "There is nothing interesting to find here";
        } else {
            returnString = "Items:" + returnString;
        }
        return returnString;
    }

    add(item : GameItem) : void {
        this.items[item.name] = item;
        this.length++;
    }

    get(name : string) : GameItem {
        return this.items[name];
    }

    remove(name : string) : GameItem {
        let item = this.get(name);
        if (item != null) {
            delete this.items[name];
            this.length--;
        }
        return item;
    }
}