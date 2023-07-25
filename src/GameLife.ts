export class GameLife{
    readonly board:boolean[][] = Array.from({ length: 3 }, () => 
        Array.from({ length: 3 }, () => false)
    )    
    public updateCellByPosition = (x:number,y:number) =>{
        this.board[x][y] = !this.board[x][y];
    };

    private validCoordenade = (x:number, y:number) =>{
        return 0 <= x && x <  this.board.length  && 0 <= y && y < this.board[0].length ;
    }

    public start = () => {

        let coordinates: [number, number][] = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0,  1],
            [1,  1],
            [1,  0],
            [1, -1],
            [0, -1],
        ];
        
        for(let i = 0; i<3; i++)
        {
            for(let j = 0; j < 3; j++)
            {
                let neigthbors = 0;
                for(let k = 0; k <coordinates.length; k ++)
                {
                    let current = coordinates[k];
                    let xi = i + current[0];
                    let yi = j + current[1];
                    if(this.validCoordenade(xi,yi))
                    {
                        neigthbors++;
                    }
                }

                if(neigthbors < 2   && neigthbors > 3){
                    this.updateCellByPosition(i,j);
                }
            }
        }
    }

    public stillLife = (x:number, y:number) =>{
        return this.board[x][y];
    }


}