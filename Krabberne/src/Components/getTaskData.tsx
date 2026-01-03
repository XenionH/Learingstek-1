import { useLocation } from "react-router";
import { ALL_TASKS } from "../pages/Subpages/Tasks/Tasks";

export function getTaskData() {
    const location = useLocation();
    switch (location.pathname) {
        case "/Opgaver/Int":
            return ALL_TASKS.Int;
        case "/Opgaver/Bool":
            return ALL_TASKS.Bool;
        case "/Opgaver/If":
            return ALL_TASKS.If;
        default:
            return ALL_TASKS.Int;
    }
}