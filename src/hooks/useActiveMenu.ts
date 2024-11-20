import { MenuItemInfo } from "@/types/menu";
import { StorageSerializers, useLocalStorage } from "@vueuse/core";

function useActiveMenu() {
  const activeMenuInfo = useLocalStorage<MenuItemInfo>(
    "active-menu-info",
    null,
    {
      serializer: StorageSerializers.object
    }
  );

  function moveActiveMenuToCenter() {
    if (!activeMenuInfo.value) {
      return;
    }
    const { dirIndex, fileIndex } = activeMenuInfo.value;
    document
      .querySelector(`#id_${dirIndex}_${fileIndex}`)
      ?.scrollIntoView({ block: "center" });
  }
  return { activeMenuInfo, moveActiveMenuToCenter };
}

export default useActiveMenu;
