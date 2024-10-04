import { Directive } from "vue";
import { Device } from "./types/device";

declare module "vue" {
  export interface ComponentCustomProperties {
    // directives
    vLoading: Directive<HTMLElement, boolean>;
    // properties
    $device: Device;
    $back: () => void;
  }
}
