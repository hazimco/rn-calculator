export interface Button {
  title: string;
  type: Type;
}

export enum Type {
  OPERATION,
  NUMBER,
  UTILITY,
}
