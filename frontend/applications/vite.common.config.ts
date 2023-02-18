import reactRefresh from "@vitejs/plugin-react-refresh";
import fs from "fs";
import path from "path";
import { UserConfigExport } from "vite";

const outDirRoot = path.resolve("../../../api/mtgtoken/wwwroot/bundles/"); //pending change

export function getViteReactBoilerplatePortalConfig(entry: string, outDirFolder?: string): UserConfigExport {
    return {
        plugins: [reactRefresh()],
        root: "src/",
        server: {
            //On Windows: Remember to add entry in hosts file
            host: "vite-react-boilerplate-local.dahl.vg",
            port: 3000,
            https: {
                key: fs.readFileSync(path.resolve("../../config/devcerts/", "localdevcert.key")),
                cert: fs.readFileSync(path.resolve("../../config/devcerts/", "localdevcert.crt")),
            },
        },
        publicDir: "../public",
        build: {
            minify: true,
            manifest: true,
            outDir: path.join(outDirRoot, outDirFolder || ""),
            emptyOutDir: false,
            lib: {
                formats: ["es"],
                entry,
                name: "builder",
            },
        },
    };
}
