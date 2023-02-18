import * as React from "react";
import { GalleryProvider, TUseGalleryArgs, _useGallery } from "./useGallery";
import {Table} from "antd";
type TProps = {};
export const Gallery = (p: TUseGalleryArgs & TProps) => {
    const {} = p;
    const ctx = _useGallery(p);

    return <GalleryProvider value={ctx}><Table/></GalleryProvider>;
};
