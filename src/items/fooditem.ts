class FoodItem extends GameItem {
 
    use(game : Game) : boolean {
        game.out.println("Omnomnomnomnom");
        game.inventory.remove(this.name);
        return false;
    }
     
}