import store from "../store";
import cartRender from "./cart";

let prevState = {};

function render() {
  const state = store.getState();

  if (prevState.cart != state.cart) {
    cartRender(state.cart);
  }

  prevState = state;
}



export default render;