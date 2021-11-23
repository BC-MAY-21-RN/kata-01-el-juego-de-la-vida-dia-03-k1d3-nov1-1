const  grid  = require('../src/models/Grid');
let matriz = new grid(4,8);

test("Testing example array from README.md", ()=>{
    let result = matriz.grid =[[".",".",".",".",".",".",".","."],
                                [".",".",".",".","O",".",".",".",],
                                [".",".",".","O","O",".",".",".",],
                                [".",".",".",".",".",".",".",".",]]
    
    result = matriz.newGrid();

    expect(result).toStrictEqual(
                [[".",".",".",".",".",".",".","."],
                [".",".",".","O","O",".",".",".",],
                [".",".",".","O","O",".",".",".",],
                [".",".",".",".",".",".",".",".",]]
    )

})