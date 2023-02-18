import * as React from "react";
import { useMainViewContext } from "../useMainView";

type TProps = {};

export const SomeComp = (p: TProps) => {
    const {} = p;
    const {} = useMainViewContext();
    return <div>SomeComp </div>;
};
