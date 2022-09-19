import { ChangeEvent, useState } from "react";
import { FolderProps } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

export const Treeview: React.FunctionComponent<FolderProps> = ({
  path,
  isCheckable,
  onCheck,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleOnCheck = (e: ChangeEvent<HTMLInputElement>) => {
    if (onCheck) {
      onCheck({
        isChecked: e.target.checked,
        path: path,
        nativeEvent: e,
      });
    }
  };

  return (
    <div>
      {path.subPaths && (
        <FontAwesomeIcon
          icon={isCollapsed ? faChevronRight : faChevronDown}
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="fa-fw"
        />
      )}
      {isCheckable && <input type="checkbox" onChange={handleOnCheck} />}
      <S.FolderName>{path.name}</S.FolderName>

      {!isCollapsed &&
        path.subPaths?.map((p) => (
          <S.FolderWrapper path={p} key={p.name}>
            <Treeview path={p} isCheckable={isCheckable} onCheck={onCheck} />
          </S.FolderWrapper>
        ))}
    </div>
  );
};
