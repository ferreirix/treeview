import { Path } from "./path";
import "./string.extensions";

export function buildPathsComposite(paths: string[]): Path[] {
  let pathsComposite: Path[] = [];

  paths.filter(isValidPath).forEach((path) => {
    let folders = path.trimChars("/").split("/").filter(Boolean);

    let currentPath: Path;

    folders.forEach((folder, i) => {
      let pathIndex =
        i === 0
          ? pathsComposite.findIndex((p) => p.name === folder)
          : currentPath.subPaths?.findIndex((p) => p.name === folder);

      if (pathIndex === undefined || pathIndex === -1) {
        //add path
        let newPath: Path;

        if (i === 0) {
          newPath = new Path(folder, i);
          pathsComposite.push(newPath);
        } else {
          newPath = currentPath.addSubPath(folder);
        }
        currentPath = newPath;
      } else {
        //path already exists, just set the current path
        currentPath =
          i === 0
            ? pathsComposite[pathIndex]
            : currentPath.subPaths![pathIndex];
      }
    });
  });

  return pathsComposite;
}

function isValidPath(path: string): boolean {
  //room for improvement
  return /^[\w/]+$/.test(path);
}
