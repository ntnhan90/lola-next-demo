export interface CakeState {
  size: string;
  base: string;
  flavor: string;
  color: string;
  toppings: string[];
  quantity: number;
}

export type CakeAction =
  | { type: "SET_SIZE"; payload: string }
  | { type: "SET_BASE"; payload: string }
  | { type: "SET_FLAVOR"; payload: string }
  | { type: "SET_COLOR"; payload: string }
  | { type: "ADD_TOPPING"; payload: string }
  | { type: "REMOVE_TOPPING"; payload: string }
  | { type: "SET_QUANTITY"; payload: number };