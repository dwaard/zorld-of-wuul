class FoodItem extends GameItem {
 
    use(game : Game) : boolean {
        game.out.println("Omnomnomnomnom");
        game.player.items.remove(this.name);
        return false;
    }
     
}