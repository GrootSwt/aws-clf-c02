import { Directive } from "vue";

declare module "vue" {
  export interface ComponentCustomProperties {
    // directives
    vLoading: Directive<HTMLElement, boolean>;
    // properties
    $back: () => void;
  }
}
