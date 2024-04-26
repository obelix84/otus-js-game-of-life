/**
 * @jest-environment jsdom
 * */

import { drawGameOnCanvas } from "./drawGame";

describe("Write cells on canvas", () => {
  let canvas;
  let ctx: CanvasRenderingContext2D;

  beforeAll(() => {
    canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.width = 500;
    canvas.height = 500;
    document.body.appendChild(canvas);
    ctx = <CanvasRenderingContext2D>canvas?.getContext("2d");
  });

  it(`should draw a cells on canvas`, () => {
    const cells = [
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    drawGameOnCanvas("canvas", cells);
    const events = ctx.__getEvents();
    expect(events).toMatchSnapshot();
  });

  it(`should draw one white cell on canvas`, () => {
    const cells = [
      [1, 1, 1, 1, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    drawGameOnCanvas("canvas", cells);
    const events = ctx.__getEvents();
    expect(events).toMatchSnapshot();
  });
});
