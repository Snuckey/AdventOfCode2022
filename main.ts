const input = `abccccccccaaaaccccaaacaccccaaaaaacccccccccccaaaccccccccccaaaaaaacccccccccccccccccccccccccccccacaaaccccccccccccccccccccccccccccccccccccccccaaaaa
abccccccccaaaaccaaaaaaaacccaaaaaacccccccccccaaaacccccccccaaaaaaaaaacccccccccccccccaaccccccccaaaaaccaaaccaacccccccccccccccccccccccccccccccaaaaaa
abcccccccccaacccaaaaaaaaccccaaaaacccccccccccaaaacccccccaaaaaaaaaaaaaccccccccccaaaaaaccccccccaaaaaaaaaaaaaaccccccccccccccccaaaccccccccccccaaaaaa
abcccccccccccccccaaaaaccccccaacaaccccaacccccaaacccccccaaaaaaaaaaaaaaccccccccccaaaaaaacccccccccaaaaacaaaaaaccccccccccccccccaaccccccccccccccccaaa
abccccccccccccccccaaaaaccccccccccaaccaacccccccccccccccaaaaacaaaacacacccccaacccaaaaaaaacccccccaaaaacaaaaaaaccccccccccccccccaaacccccccccccccccaaa
abcccccccccccccccaaaaaaccccccccccaaaaaaccccccccccccccccaaaaaaaacaaaaacaaaaaccccaaaaaaacccccccaacaacaaaaaaaaccccccccaaaaccaakcccccccccccccccccaa
abcccccccccccccccaaaccacccccccccccaaaaaaacccccccaaaccccccaaaaaacaaaaaccaaaaaccaaaaaaccccccccccccaacaaaaaaaacccccccccaaaakkkklllcccccccccccccccc
abcccccaaaccccccccccccccccccccccccaaaaaaacccccccaaacacccaaaaaaaaaaaaacaaaaaaccaaaaaacccccccccccccccccaaaccccccccccccaaakkkkkllllcccccccaacccccc
abccccaaaacccccccccccccccccccccccaaaaaacccccccaccaaaaaccaaaaaaaaaaaaacaaaaccccccccaaccccccccccccccccccaaccccccccccccckkkkkkpllllccccaaaaaaccccc
abccccaaaacccccccccccccccccaaacccaaaaaacccccccaaaaaaaacccaaaaacaaaaaacccaaaccccccccccccccccccccccccccccccccccccccccckkkkpppppplllcccaaaaacccccc
abcccccaaaccccccccccccccccaaaacccccccaaccccccccaaaaacccccaaaccccaaacccccccccccccccccccccccccaaccccccccccccccccccjjjkkkkpppppppplllcccaaaaaacccc
abccccccccccccccccccccccccaaaaccccccccccccccccccaaaaacccccccccccccccccccccccccccccccccccccccaaaaaccccccccccccjjjjjjkkkrppppuppplllccccaaaaacccc
abccccccccccccccaaaccccccccaaaccccccccccccccccccaacaaccccccccccccccccccccccaaaccccccccaacccaaaaaccccccccccccjjjjjjjjrrrpuuuuuppplllcccccaaacccc
abcccccaaccaacccaaacacccccccccccccccccccccccccacaaaaccccccccccccccccccccccaaaaaaccccaaaacccaaaaaaccaccccccccjjjrrrrrrrrruuuuuppplllmcccddcccccc
abcccccaaaaaacaaaaaaaaccccccccccccccccccccccccaacaaaccccccccccccccccccccccaaaaaaccccaaaaaacccaaaaccaaacaaacjjjrrrrrrrrruuuxuuupqqlmmmmddddccccc
abcccccaaaaaccaaaaaaaaccccccccccccccccccccccccaaaaaccccaacccccccccccccccccaaaaaacccccaaaacccaacccccaaaaaaacjjjrrrrtuuuuuuxxyuvqqqqmmmmmddddcccc
abaacccaaaaaaccaaaaaccccccccccccccccccaaaaccccaaaaaaccaaaccccccccccccccccccaaaaaccccaaaaaccccccccccaaaaaaccjjjrrrtttuuuuuxxyvvvqqqqqmmmmdddcccc
abaaccaaaaaaaaccaaaaaccccccccccccccccaaaaaaaaaaaaaaaacaaacaaaccccccccccccccaacaacaacaacaaccccccccaaaaaaaaccijjqqrtttxxxxxxyyvvvvvqqqqmmmmdddccc
abaaccaaaaaaaacaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccaaacaaaccccccccccaaccaaaaaaaaaciiiqqqttxxxxxxxyyvvvvvvvqqqmmmdddccc
abaaaccccaaccccaaaccacccccccccccccccccaaaaaaccccaacaaaaaaaaaaccaaaccccccccccaaaaaaaccccccccccaaaaaaaaaaaaaaiiiqqqtttxxxxxxyyyyyyvvvqqqmmmdddccc
SbaaaccccaacccccccccccccccccccccccccaaaaaaaaccccaacccaaaaaaccaaaaaaccccccccccaaaaaacccccccccccaaaaacaaacaaaaiiiqqqttxxxxEzzyyyyyvvvqqqmmmdddccc
abaaaccccccccccccccccccccccccccccccaaaaaaaaaaccccccccaaaaaaccaaaaaaccccccccccaaaaaaaaccccccccaaaaaacaaaccaaaiiiqqqtttxxxyyyyyyvvvvqqqmmmdddcccc
abaccccccaacccccccccccccccccccccccccaaaaaaaaaaaacccccaaaaaaacaaaaaacccccccccaaaaaaaaacccccccaaaaaaaacaaaaaaaiiiqqqtttxxyyyyyyvvvvqqqqnnmeddcccc
abccccccaaaaccccccccccccaaaccccccccccccaaaaaaaaaaacccaaacaaacaaaaacccccccccaaaaaaaaaacccccccaaaaaaaaccaaaaaaaiiiqqtttxxyyyyyywvrrrrnnnneeeccccc
abccccccaaaacccccaacccccaaaacccccccccccaaaccaaaaaacccacccccccaaaaacccccccccaaacaaacccccccccccccaacccccccaaaaaiiqqqttxxwywwyyywwrrrnnnneeeeccccc
abccccccaaaaccaacaaaccccaaaaccccccaacccaacccaaaaaccccccccccccccccccccccccccccccaaacccccccccccccaaccccccaaaaaaiiqqqttwwwwwwwwywwrrrnnneeeecccccc
abccccccccccccaaaaacccccaaaccccacaaacccccccccaaaaacccccccccccccccccccccccccccccaaacccccccccccccccccccccaaaaaaiiqqpsswwwwsswwwwwrrnnneeeeccccccc
abcccccccccccccaaaaaacccccccccaaaaacaacccccccaacaacccccaaccccccccccccccccccccccccccccccccccccccccccccccaccaahhhpppssssssssswwwwrrnnneeeaccccccc
abcccccccccccaaaaaaaacccccccccaaaaaaaacccccaaccccccaaacaaccccccccccccccccccccccccccccccccccccaaaccaccccccccchhhpppsssssssssswwrrrnnneeeaaaacccc
abcccccccccccaaaaacaacccccccccccaaaaaccaaaaaaccccccaaaaaaccccccccccccccccccccccccccccaaccaaccaaaaaacccccccccchhpppppsspppossrrrrrnnneeeaaaacccc
abccccccccccccacaaaccccccccccccaaaaacccaaaaaaaacccccaaaaaaaccaaaccccccccaaaacccccccccaaaaaacccaaaaacccccccccchhhpppppppppoosrrrroonffeaaaaacccc
abccccccccccccccaaaccccccccccccaacaaaccaaaaaaaaccccaaaaaaaaacaaaccccccccaaaacccccccccaaaaaccaaaaaaacccccccccchhhhpppppppoooooooooonfffaaaaccccc
abcccccccccccccccccccccccaaaccccccaaccccaaaaaaaccccaaaaaaaaaaaaaaaccccccaaaacccccccccaaaaaacaaaaaaaacccccaacchhhhhhhhgggggoooooooofffaaaaaacccc
abcccccccccccccccccccccccaaaaacccaacccccaaaaaccccccaaaaaacaaaaaaaaccccccaaacccccccccaaaaaaaaaaaaaaaaccccaaacccchhhhhgggggggooooooffffaaaaaacccc
abccaaacccccccccccccccccaaaaaaccaaaccccaaaaaacccccccccaaacccaaaaacccccccccccccccccccaaaaaaaaccaaacacccccaaacaaachhhggggggggggfffffffcaacccccccc
abcaaaaccccccccccaacccccaaaaaaccaaacaaaccccaaccccccccccccccaaaaacccccccccccccccccccccccaacccccaaaccccaaaaaaaaaacccccccccaagggffffffcccccccccccc
abcaaaaccccccccccaaccccccaaaaaaaaaaaaaaccccccccccccccccccccaaaaaaccccccccccccccccccccccaaccccccccccccaaaaaaaaaccccccccccaaacgfffffcccccccccccaa
abccaaacccccccaaaaaaaacccaaaaaaaaaaaaaaccccccccaaaaaccaaaaaaaaaaaaaacaacccccccccaaaccacccccccccccccccccaaaaacccccccccccaaaaccccccccccccccccccaa
abccccccccccccaaaaaaaacccccccccaaaaaaccccccccccaaaaaccaaaaaaaaaaaaaacaaaaaacccccaaaaaacccccccccccccccccaaaaaacccccccccccaacccccccccccccccacacaa
abccccccccccccccaaaacccccccccccaaaaaacccccccccaaaaaacccaaaaaaaaaaaaacaaaaaacccccaaaaaacccccccccccccccccaaaaaaaccccccccccaacccccccccccccccaaaaaa
abcccccccccccccaaaaaaccccccccccaaaaaaaccccccccaaaaaaccccccaaaaaacccaaaaaaaaccccaaaaaaaaccccccccccccccccaaacaaacccccccccccccccccccccccccccaaaaaa`;

interface Pos {
    x: number;
    y: number;
    prevPos: Pos;
}

function posOnPath(pos: Pos): boolean {
    let currPos: Pos = pos.prevPos;
    while (currPos !== undefined) {
        if (currPos.x == pos.x && currPos.y == pos.y) return true;
        currPos = currPos.prevPos;
    }
    return false;
}

function lengthOfPath(pos: Pos): number {
    let currPos: Pos = pos;
    let pathLength: number = 0;
    while (currPos != undefined) {
        pathLength++;
        currPos = currPos.prevPos;
    }
    return pathLength;
}

class Grid {
    public readonly grid: string[][];
    private shortestPathTo: number[][];
    constructor(grid: string[][]) {
        this.grid = grid;
        this.shortestPathTo = new Array<number[]>(this.grid.length);
        for (let i: number = 0; i < this.shortestPathTo.length; i++) {
            this.shortestPathTo[i] = new Array<number>(this.grid[0].length);
        }
    }
    public get(pos: Pos): string {
        return this.grid[pos.y][pos.x];
    }
    public getElevation(pos: Pos): number {
        let letter = this.get(pos);
        if (letter == 'S') letter = 'a';
        else if (letter == 'E') letter = 'z';
        return letter.charCodeAt(0);
    }
    public isInbounds(pos: Pos): boolean {
        if (pos.x < 0 || pos.x >= this.grid[0].length) return false;
        if (pos.y < 0 || pos.y >= this.grid.length) return false;
        return true;
    }
    public getShortestPathTo(pos: Pos): number {
        return this.shortestPathTo[pos.y][pos.x];
    }
    public updateShortestPathTo(pos: Pos, value: number): void {
        if (this.isShortestPathTo(pos)) {
            this.shortestPathTo[pos.y][pos.x] = value;
        }
    }
    public isShortestPathTo(pos: Pos): boolean {
        return this.getShortestPathTo(pos) == undefined || this.getShortestPathTo(pos) > lengthOfPath(pos);
    }
}

let grid: Grid;

function createGrid(): void {
    const rows = input.split('\n');
    const tempGrid: string[][] = [];
    rows.forEach((row) => {
        tempGrid.push(row.split(''));
    });
    grid = new Grid(tempGrid);
}

function findShortestPathFrom(pos: Pos): number {
    let currShortestPath: number = -1;
    
    if (grid.get(pos) == 'E') {
        grid.updateShortestPathTo(pos, lengthOfPath(pos));
        return 0;
    }
    
    let newPos: Pos = {...pos};
    newPos.x -= 1;
    currShortestPath = recurseForShortestPath(newPos, pos, currShortestPath);

    newPos = {...pos};
    newPos.y -= 1;
    currShortestPath = recurseForShortestPath(newPos, pos, currShortestPath);

    newPos = {...pos};
    newPos.x += 1;
    currShortestPath = recurseForShortestPath(newPos, pos, currShortestPath);

    newPos = {...pos};
    newPos.y += 1;
    currShortestPath = recurseForShortestPath(newPos, pos, currShortestPath);

    return currShortestPath;
}

function recurseForShortestPath(newPos: Pos, pos: Pos, currShortestPath: number) {
    if (!posOnPath(newPos)) {
        newPos.prevPos = pos;

        if (grid.isInbounds(newPos) && grid.isShortestPathTo(newPos) && grid.getElevation(newPos) - grid.getElevation(pos) <= 1) {
            grid.updateShortestPathTo(newPos, lengthOfPath(newPos));
            let currPath = findShortestPathFrom(newPos) + 1;
            if (currPath !== 0 && (currShortestPath == -1 || currPath < currShortestPath)) {
                currShortestPath = currPath;
            }
        }
    }
    return currShortestPath;
}

function question2(): number {
    createGrid();
    let shortestPath: number = 999999999999;
    for (let y: number = 0; y < grid.grid.length; y++) {
        for (let x: number = 0; x < grid.grid[y].length; x++) {
            if (grid.getElevation({x: x, y: y, prevPos: undefined}) === 'a'.charCodeAt(0)) {
                const path: number = findShortestPathFrom({x: x, y: y, prevPos: undefined});
                if (path > 0 && path < shortestPath) shortestPath = path;
            }
        }
    }
    return shortestPath;
}

function question1(): number {
    createGrid();
    return findShortestPathFrom({x: 0, y: 20, prevPos: undefined});
}

console.log(question2());