import { useLocation } from "react-router-dom";

export function useCurrentPath() {
  const { pathname } = useLocation();

  return pathname;
}