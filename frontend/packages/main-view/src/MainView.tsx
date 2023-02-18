import * as React from "react";
import { MainViewProvider, TUseMainViewArgs, _useMainView } from "./useMainView";

type TProps = {};
export const MainView = (p: TUseMainViewArgs & TProps) => {
    const {} = p;
    const ctx = _useMainView(p);

    return <MainViewProvider value={ctx}>MainView</MainViewProvider>;
};
