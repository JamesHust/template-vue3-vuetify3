import $http from "@/plugins/axios";

const getUrl = (baseNameList, idList) => {
    let url = ''
    for (let i = 0; i < baseNameList.length; i++) {
        url += baseNameList[i] + '/'
        if (i < idList.length) {
            url += idList[i] + '/'
        } else {
            break
        }
    }
    return url
}

export const BaseService = (...args) => {
    return {
        baseNameList: args,
        search (query, ...params) {
            const url = getUrl(args, params)
            return $http.get(url, { params: query })
        },
        create (...params) { // params are path variables and model create new
            const model = params[params.length - 1]
            const url = getUrl(args, params.slice(0, params.length - 1))
            return $http.post(url, model)
        },
        read (...params) { // params are path variables
            const url = getUrl(args, params)
            return $http.get(url)
        },
        update (...params) { // params are path variables and model update
            const model = params[params.length - 1]
            const url = getUrl(args, params.slice(0, params.length - 1))
            return $http.patch(url, model)
        },
        replace (...params) { // params are path variables and model replace
            const model = params[params.length - 1]
            const url = getUrl(args, params.slice(0, params.length - 1))
            return $http.put(url, model)
        },
        delete (...params) { // params are path variables
            const url = getUrl(args, params)
            return $http.delete(url)
        }
    }
}

export default BaseService
