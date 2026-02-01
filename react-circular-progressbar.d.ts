declare module "react-circular-progressbar" {
  import { FC } from "react";

  export interface CircularProgressbarProps {
    value: number;
    text?: string;
    minValue?: number;
    maxValue?: number;
    strokeWidth?: number;
    background?: boolean;
    backgroundPadding?: number;
    className?: string;
    classes?: {
      root?: string;
      trail?: string;
      path?: string;
      text?: string;
      background?: string;
    };
    [key: string]: unknown;
  }

  export const CircularProgressbar: FC<CircularProgressbarProps>;
}
