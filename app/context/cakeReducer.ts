import { CakeAction, CakeState } from "../types/cake";

export const initialState: CakeState = {
  size: "Classic",
  base: "Vanilla",
  flavor: "Vanilla",
  color: "#ffcb00",
  toppings: [],
  quantity: 1,
};

export function cakeReducer(
  state: CakeState,
  action: CakeAction
): CakeState {
  switch (action.type) {
    case "SET_SIZE":
      return { ...state, size: action.payload };

    case "SET_BASE":
      return { ...state, base: action.payload };

    case "SET_FLAVOR":
      return { ...state, flavor: action.payload };

    case "SET_COLOR":
      return { ...state, color: action.payload };

    case "ADD_TOPPING":
      return {
        ...state,
        toppings: [...state.toppings, action.payload],
      };

    case "REMOVE_TOPPING":
      return {
        ...state,
        toppings: state.toppings.filter(
          (item) => item !== action.payload
        ),
      };

    case "SET_QUANTITY":
      return { ...state, quantity: action.payload };

    default:
      return state;
  }
}