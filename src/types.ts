import { Path } from "./path";

export type SubPath = Path[] | undefined;

export interface FolderProps {
  path: Path;
  isCheckable?: boolean;
  onCheck?: (e: OnCheckEvent) => void;
}

export interface OnCheckEvent {
  path: Path;
  isChecked: boolean;
  nativeEvent: React.ChangeEvent<HTMLInputElement>;
}

export interface WrapperProps {
  path: Path;
}

export interface CollapserProps {
  isCollapsed: boolean;
}
