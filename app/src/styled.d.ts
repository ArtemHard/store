// styled.d.ts
import "styled-components";

import { ITheme, ThemeEnum } from "interfaces/styled";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum;
  }
}
