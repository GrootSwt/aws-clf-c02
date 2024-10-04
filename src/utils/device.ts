import { Device } from "@/types/device";

let deviceInfo: Device | null = null;

export function getDeviceInfo(): Device {
  if (deviceInfo) {
    return deviceInfo;
  }
  const userAgent = navigator.userAgent;

  // 检查是否是手机设备
  const isSP = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    userAgent
  );

  deviceInfo = {
    isPC: !isSP,
    isSP,
    type: isSP ? "SP" : "PC"
  };
  return deviceInfo;
}
