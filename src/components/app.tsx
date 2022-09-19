import { useEffect, useState } from "react";
import { Empty } from "./empty";
import { Treeview } from "./treeview";
import { PATHS } from "../constants";
import { buildPathsComposite } from "../herlpers";
import { Path } from "../path";

function App() {
  const [paths, setPaths] = useState<Path[]>([]);

  useEffect(() => {
    setPaths(buildPathsComposite(PATHS));
  }, []);

  return (
    <div>
      {paths.length === 0 ? (
        <Empty />
      ) : (
        paths.map((p) => <Treeview key={p.name} path={p} />)
      )}
    </div>
  );
}

export default App;
