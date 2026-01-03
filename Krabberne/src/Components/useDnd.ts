import { useOutletContext } from "react-router-dom";
import type { DndOutletContext } from "./outletType";



export function useDnd() {
  return useOutletContext<DndOutletContext>();
}
