// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export class Size {
  constructor(w = 80, h = 60) {
    this.width = w;
    this.height = h;
  }

  resize(w, h) {
    this.width = w;
    this.height = h;
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(size) {
    let { width, height } = size;
    width = width < 1 ? 1 : width;
    height = height < 1 ? 1 : height;
    if (this.size.width + width > this.screenSize.width) {
      width = this.screenSize.width - this.position.x;
    }
    if (this.size.height + height > this.screenSize.height) {
      height = this.screenSize.height - this.position.y;
    }

    this.size.resize(width, height);
  }

  move(position) {
    let { x, y } = position;
    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;
    if (this.position.x + x + this.size.width> this.screenSize.width) {
      x = this.screenSize.width - this.size.width;
    }
    if (this.position.y + y + this.size.height > this.screenSize.height) {
      y = this.screenSize.height - this.size.height;
    }

    this.position.move(x, y);
  }
}

export function changeWindow(window) {
  window.resize(new Size(400, 300));
  window.move(new Position(100, 150));

  return window;
}
