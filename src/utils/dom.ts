export function toggleDocumentOverflowScroll(display: boolean) {
  if (display) {
    const { scrollTop, scrollLeft } = document.documentElement;
    document.documentElement.style.setProperty(
      "--body-scroll-x",
      `${-scrollLeft}px`
    );
    document.documentElement.style.setProperty(
      "--body-scroll-y",
      `${-scrollTop}px`
    );
    document.documentElement.classList.add("overflow-scroll-block");
  } else {
    const bodyScrollX =
      document.documentElement.style.getPropertyValue("--body-scroll-x");
    const bodyScrollY =
      document.documentElement.style.getPropertyValue("--body-scroll-y");
    document.documentElement.classList.remove("overflow-scroll-block");
    document.documentElement.style.removeProperty("--body-scroll-x");
    document.documentElement.style.removeProperty("--body-scroll-y");
    document.documentElement.scrollTo({
      left: -bodyScrollX.substring(0, bodyScrollX.length - 2),
      top: -bodyScrollY.substring(0, bodyScrollY.length - 2)
    });
  }
}
