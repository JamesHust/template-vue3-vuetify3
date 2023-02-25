// import img url from public
const useImage = ((url) => {
    return new URL(url, import.meta.url).href;
});

export const loadGlobalVariables = (app) => {
    app.config.globalProperties.$image = useImage;
}