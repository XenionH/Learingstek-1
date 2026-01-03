import { useLocation } from "react-router-dom";

export function getDestination() {
    const location = useLocation();
    switch (location.pathname) {
        case "/Teori/Int":
        case "/Teori":
            return "/Opgaver/Int";
        case "/Teori/Bool":
            return "/Opgaver/Bool";
        case "/Teori/If":
            return "/Opgaver/If";
        case "/Historie":
            return "/Teori";
        case "/Historie/Int":
            return "/Opgaver/Int";
        case "/Historie/Bool":
            return "/Opgaver/Bool";
        case "/Historie/If":
            return "/Opgaver/If";
        case "/Opgaver":
        case "/Opgaver/Int":
            return "/Teori/Bool";
        case "/Opgaver/Bool":
            return "/Teori/If";
        case "/Opgaver/If":
            return "/Outro";
    }
}
