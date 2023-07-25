export class GameLife{
    readonly board:number[][] = Array.from({ length: 3 }, () => 
        Array.from({ length: 3 }, () => 0)
    )        
}