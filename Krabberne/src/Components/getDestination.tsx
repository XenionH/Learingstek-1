import { useLocation } from "react-router-dom";

export function getDestination(Tilbage: boolean) {
    const location = useLocation();
    if (!Tilbage)
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
    else {
        switch (location.pathname) {
            case "/Teori/Int":
            case "/Teori":
                return "/";
            case "/Teori/Bool":
                return "/Opgaver/Int";
            case "/Teori/If":
                return "/Opgaver/Bool";
            case "/Historie":
                return "/";
            case "/Historie/Int":
                return "/Opgaver/Int";
            case "/Historie/Bool":
                return "/Opgaver/Bool";
            case "/Historie/If":
                return "/Opgaver/If";
            case "/Opgaver":
            case "/Opgaver/Int":
                return "/Teori/Int";
            case "/Opgaver/Bool":
                return "/Teori/Bool";
            case "/Opgaver/If":
                return "/Teori/If";
        }
    }
}
