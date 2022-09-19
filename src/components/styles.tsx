import styled from "styled-components";
import { WrapperProps } from "../types";

export const FolderName = styled.span`
  margin-left: 3px;
`;

export const FolderWrapper = styled.div<WrapperProps>`
  margin: 2px 0px 0px ${({ path }) => (path.subPaths ? "20" : "40")}px;
`;
