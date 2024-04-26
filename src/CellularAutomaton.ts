export abstract class CellularAutomaton {
  protected _cells: number[][];

  get cells(): number[][] {
    return this._cells;
  }

  set cells(value: number[][]) {
    this._cells = value;
  }

  constructor() {
    this._cells = [[]];
  }

  abstract nextGeneration(): boolean;

  abstract stoppingRule(nextCells: number[][]): boolean;
}
