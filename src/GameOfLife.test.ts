/**
 * @jest-environment jsdom
 * */

import { GameOfLife } from "./GameOfLife";

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