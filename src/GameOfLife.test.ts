/**
 * @jest-environment jsdom
 * */

import { GameOfLife } from "./GameOfLife";
import clearAllMocks = jest.clearAllMocks;

describe("Testing random fill", () => {
    let GM: GameOfLife;
    beforeAll(() => {
        GM = new GameOfLife();
    });

    it("random matrix 3x3", ()=> {
        clearAllMocks();
        jest.spyOn(global.Math, 'random').mockReturnValueOnce(1).mockReturnValueOnce(0)
            .mockReturnValueOnce(0).mockReturnValueOnce(0).mockReturnValueOnce(1).mockReturnValueOnce(0)
            .mockReturnValueOnce(1).mockReturnValueOnce(1).mockReturnValueOnce(0);
        GM.setRandomCells(3,3);
        expect(GM.cells).toEqual([[0,1,1], [1,0,1], [0,0,1]]);
    });

    it("random matrix 3x5", ()=> {
        jest.clearAllMocks();
        jest.spyOn(global.Math, 'random').mockReturnValueOnce(0).mockReturnValueOnce(1)
            .mockReturnValueOnce(0).mockReturnValueOnce(1).mockReturnValueOnce(0).mockReturnValueOnce(0)
            .mockReturnValueOnce(1).mockReturnValueOnce(1).mockReturnValueOnce(0).mockReturnValue(0);
        GM.setRandomCells(3,5);
        console.log(GM.cells);
        expect(GM.cells).toEqual([[1,0,1,0,1], [1,0,0,1,1], [1,1,1,1,1]]);;
    });

});
describe("Testing field resize", () => {
    let GM: GameOfLife;
    beforeAll(() => {
        GM = new GameOfLife();
    });

    it("resize 5x5 to 7x7", ()=> {
        GM.cells = [[1,1,1,1,1], [0,0,0,0,0], [1,1,1,1,1], [1,1,1,1,1], [0,0,0,0,0]];
        GM.resize(7,7);
        expect(GM.cells).toEqual([[1,1,1,1,1,0,0], [0,0,0,0,0,0,0], [1,1,1,1,1,0,0],
            [1,1,1,1,1,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0]]);
    });

    it("resize 7x7 to 3x3", ()=> {
        GM.cells = [[1,1,1,1,1,0,0], [0,0,0,0,0,0,0], [1,1,1,1,1,0,0],
            [1,1,1,1,1,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0]];
        GM.resize(3,3);
        expect(GM.cells).toEqual([[1,1,1], [0,0,0], [1,1,1]]);;
    });

});

describe("Testing stopping rule", () => {
    let GM: GameOfLife;
    beforeAll(() => {
        GM = new GameOfLife();
    });

    it("cells are equal", ()=> {
        GM.cells = [[1,1,1], [0,0,0], [1,0,1]];
        expect(GM.stoppingRule([[1,1,1], [0,0,0], [1,0,1]])).toBeTruthy();
    });

    it("cells are not equal", ()=> {
        GM.cells = [[1,1,1], [0,0,0], [1,0,1]];
        expect(GM.stoppingRule([[1,1,1], [0,1,0], [1,0,1]])).not.toBeTruthy();
    });

    it("3 iteration and then stop", ()=> {
        GM.cells = [[0,0,0,0,0],
                    [0,0,0,0,0],
                    [0,0,1,1,0],
                    [0,0,1,0,0],
                    [0,0,0,0,0]];
        GM.nextGeneration();
        expect(GM.nextGeneration()).not.toBeTruthy();
    });
});

describe("Testing patterns", () => {
    let GM: GameOfLife;
    beforeAll(() => {
        GM = new GameOfLife();
    });

    it("testing pattern 1", () => {
        GM.cells = [[0,0,0,0,0],
                    [0,0,1,0,0],
                    [0,0,1,0,0],
                    [0,0,1,0,0],
                    [0,0,0,0,0]];
        GM.nextGeneration();
        expect(GM.cells).toEqual([[0,0,0,0,0],
                                          [0,0,0,0,0],
                                          [0,1,1,1,0],
                                          [0,0,0,0,0],
                                          [0,0,0,0,0]]);
    });

    it("testing pattern 2", () => {
        GM.cells = [[0,0,0,0,0],
            [0,0,0,0,0],
            [0,1,1,1,0],
            [0,0,0,0,0],
            [0,0,0,0,0]];
        GM.nextGeneration();
        expect(GM.cells).toEqual([[0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0]]);
    });

    it("testing pattern 3", () => {
        GM.cells = [[0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,0,1,0],
            [0,0,1,0,0],
            [0,0,0,0,0]];
        GM.nextGeneration();
        expect(GM.cells).toEqual([[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,1,0],
            [0,0,0,0,0],
            [0,0,0,0,0]]);
    });

    it("testing pattern 4", () => {
        GM.cells = [[0,0,0,0,0],
                    [0,0,0,1,0],
                    [0,0,1,0,0],
                    [0,1,0,0,0],
                    [0,0,0,0,0]];
        GM.nextGeneration();
        expect(GM.cells).toEqual([[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]]);
    });

    it("testing pattern 5", () => {
        GM.cells = [[0,0,0,0,0],
            [0,1,0,0,0],
            [0,0,0,1,0],
            [0,0,1,0,0],
            [0,0,0,0,0]];
        GM.nextGeneration();
        expect(GM.cells).toEqual([[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]]);
    });

    it("testing pattern 6", () => {
        GM.cells = [[0,0,0,0,0],
            [0,1,0,1,0],
            [0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0]];
        GM.nextGeneration();
        expect(GM.cells).toEqual([[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]]);
    });
    it("testing pattern 6", () => {
        GM.cells = [[0,0,0,0,0],
            [0,1,0,1,0],
            [0,0,0,0,0],
            [0,0,0,1,0],
            [0,0,0,0,0]];
        GM.nextGeneration();
        expect(GM.cells).toEqual([[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]]);
    });

    it("testing pattern 7", () => {
        GM.cells = [[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,1,0],
            [0,0,1,0,0],
            [0,0,0,0,0]];
        GM.nextGeneration();
        expect(GM.cells).toEqual([[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,1,0],
            [0,0,1,1,0],
            [0,0,0,0,0]]);
    });

    it("testing pattern 8", () => {
        GM.cells = [[0,0,0,0,0],
            [0,0,0,0,0],
            [0,1,0,1,0],
            [0,0,0,1,0],
            [0,0,0,0,0]];
        GM.nextGeneration();
        expect(GM.cells).toEqual([[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0]]);
    });

    it("testing pattern 9", () => {
        GM.cells = [[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,1,0],
            [0,0,1,1,0],
            [0,0,0,0,0]];
        GM.nextGeneration();
        expect(GM.cells).toEqual([[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,1,0],
            [0,0,1,1,0],
            [0,0,0,0,0]]);
    });
    it("testing pattern 10", () => {
        GM.cells = [[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]];
        GM.nextGeneration();
        expect(GM.cells).toEqual([[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]]);
    });
    it("testing pattern 11", () => {
        GM.cells = [[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0]];
        GM.nextGeneration();
        expect(GM.cells).toEqual([[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]]);
    });
    it("testing pattern 12", () => {
        GM.cells = [[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,1,0],
            [0,0,0,0,0],
            [0,0,0,0,0]];
        GM.nextGeneration();
        expect(GM.cells).toEqual([[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]]);
    });
});