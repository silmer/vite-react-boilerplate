import { createContext, useContext } from "react";

export type TUseMainViewArgs = {};
export const _useMainView = (args: TUseMainViewArgs) => {
    return {
        ...args,
    };
};

export type TMainViewContext = ReturnType<typeof _useMainView>;

const errorMessage = "useMainViewContext: `context` is undefined.";

const c = createContext<TMainViewContext>({
    name: "MainViewContext",
    errorMessage,
});

const MainViewProvider = c.Provider;
const useMainViewContext = () => {
    const context = useContext(c);
    if (!context) {
        throw new Error(errorMessage);
    }

    return context;
};

export { MainViewProvider, useMainViewContext };
