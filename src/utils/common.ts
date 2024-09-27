import { CustomAbortController } from "@/types/common";

const abortController: CustomAbortController = {
  _value: new AbortController(),
  get value() {
    if (this._value && !this._value.signal.aborted) {
      return this._value;
    } else {
      this._value = new AbortController();
      return this._value;
    }
  },
  abort() {
    abortController.value.abort();
  }
};
