import { SubPath } from "./types";

export class Path {
  public subPaths: SubPath;

  constructor(
    public name: string,
    public depth: number,
    public parent?: Path
  ) {}

  public addSubPath(name: string): Path {
    var newPath = new Path(name, this.depth + 1, this);
    if (!this.subPaths) {
      this.subPaths = [newPath];
    } else {
      this.subPaths.push(newPath);
    }
    return newPath;
  }
}
