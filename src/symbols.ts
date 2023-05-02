import type { RouletteStoreInfo } from "@/types";
import type { InjectionKey } from "vue";

export const RouletteStoreKey: InjectionKey<RouletteStoreInfo> = Symbol("RouletteStore");
