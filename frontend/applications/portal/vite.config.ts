import {loadEnv} from "vite";
import {getViteReactBoilerplatePortalConfig} from "../vite.common.config";

export default ({mode}) => {
    Object.assign(process.env, loadEnv(mode, process.cwd()));
    return getViteReactBoilerplatePortalConfig("./portal-bundle.ts")
}