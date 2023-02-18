import { createContext, useContext } from "react";

export type TUseGalleryArgs = {};
export const _useGallery = (args: TUseGalleryArgs) => {
    return {
        ...args,
    };
};

export type TGalleryContext = ReturnType<typeof _useGallery>;

const errorMessage = "useGalleryContext: `context` is undefined.";

const c = createContext<TGalleryContext>({
    name: "GalleryContext",
    errorMessage,
});

const GalleryProvider = c.Provider;
const useGalleryContext = () => {
    const context = useContext(c);
    if (!context) {
        throw new Error(errorMessage);
    }

    return context;
};

export { GalleryProvider, useGalleryContext };
