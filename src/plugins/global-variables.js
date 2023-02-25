import $const from "@/utils/const";
import $utils from "@/utils/utils";
import $http from "@/plugins/axios";

// import img url from public
const useImage = ((url) => {
    return new URL(url, import.meta.url).href;
});

export const loadGlobalVariables = (app) => {
    app.config.globalProperties.$image = useImage;
    app.config.globalProperties.$const = $const;
    app.config.globalProperties.$ul = $utils;
    app.config.globalProperties.$http = $http;
}