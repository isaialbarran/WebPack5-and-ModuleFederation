import useStore from "./store";

export default class StateManager {
  useStore = useStore;
  getStore = () => this.useStore();
  increment = () => this.increment();
  decrement = () => this.decrement();
  clear = () => this.clear();
}
