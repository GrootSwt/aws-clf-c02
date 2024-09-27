import { DirectiveBinding } from "vue";

const loadingDirective = (
  el: HTMLElement,
  binding: DirectiveBinding<boolean>
) => {
  if (binding.value) {
    el.classList.add("skeleton-loader");
  } else {
    el.classList.remove("skeleton-loader");
  }
};

export default loadingDirective;
