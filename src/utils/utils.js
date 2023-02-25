const $utils = {
    getHostSource () {
        let protocol = window.location.protocol
        let hostname = window.location.hostname
        let port = window.location.port ? ':' + window.location.port : ''
        return protocol + '//' + hostname + port
    },
    buildQuery (url, params) {
        url = url || ''
        if (params) {
            let query = []
            for (let key in params) {
                // eslint-disable-next-line no-prototype-builtins
                if (params.hasOwnProperty(key) && params[key] && params[key] !== '' && params[key] !== null) {
                    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
                }
            }
            if (query.length) {
                url.indexOf('?') > -1 ? url += '&' + query.join('&') : url += '?' + query.join('&')
            }
        }
        return url
    },
    getLastUrlSegment (url) {
        if (!url) {
            return ''
        }
        if (url.slice(-1) === '/') {
            url = url.substring(0, url.length - 1)
        }
        url = url.substr(url.lastIndexOf('/') + 1)
        return url
    },
    noAccent (str) {
        str = str.trim().toLowerCase()
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
        str = str.replace(/đ/g, 'd')
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '')
        str = str.replace(/\u02C6|\u0306|\u031B/g, '')
        return str
    },
    saveFile (data, filename, fileExtension) {
        let fileURL = window.URL.createObjectURL(new Blob([data]))
        let fileLink = document.createElement('a')
        fileLink.href = fileURL
        fileLink.setAttribute('download', filename + '' + fileExtension)
        document.body.appendChild(fileLink)
        fileLink.click()
        fileLink.parentNode.removeChild(fileLink)
    },
    convertBlobToDataURL (blob) {
        return new Promise((resolve, reject) => {
            let fileReader = new FileReader()
            fileReader.readAsDataURL(blob)
            fileReader.onloadend = function () {
                resolve(fileReader.result)
            }
        })
    },
    isScrolledIntoView (elementId, parentId, shouldScrollIntoView) {
        let element = document.getElementById(elementId)
        let parent = document.getElementById(parentId)
        let elementRect = element.getBoundingClientRect()
        let parentRect = parent.getBoundingClientRect()
        let diffX = parentRect.x + parentRect.width - elementRect.x - elementRect.width
        let diffY = parentRect.y + parentRect.height - elementRect.y - elementRect.height
        let isScrolledIntoView = diffX >= 0 && diffY >= 0
        if (!isScrolledIntoView && shouldScrollIntoView) {
            parent.scrollBy(
                diffX < 0 ? 20 - diffX : 0,
                diffY < 0 ? 20 - diffY : 0
            )
        }
        return isScrolledIntoView
    },
    limitStr (str, max) {
        if (str.length > max) {
            return str.substring(0, max - 3) + '...'
        }
        return str
    },
    cloneObject (item) {
        return JSON.parse(JSON.stringify(item))
    },
    downloadJSON (data, fileName) {
        let a = document.createElement('a')
        a.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data))
        a.setAttribute('download', fileName + '.json')
        a.click()
        a.remove()
    },
    downloadFileFromBlob (data, fileName) {
        const blob = new Blob([data])
        const url = window.URL.createObjectURL(blob)
        const anchor = document.createElement('a')
        anchor.href = url
        anchor.download = fileName
        anchor.click()
        window.URL.revokeObjectURL(url)
    },
    decodeJWT (token) {
        // https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
        let base64Url = token.split('.')[1]
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))
        return JSON.parse(jsonPayload)
    },
    cov (o1, o2) {
        return $utils.compareObjectValue(o1, o2)
    },
    compareObjectValue (o1, o2) {
        return JSON.stringify(o1) === JSON.stringify(o2)
    },
    buildUrl (data) {
        let url = data.url
        if (data.params) {
            url += '?'
            for (let i in data.params) {
                url += `${i}=${data.params[i]}&`
            }
            url = url.substr(0, url.length - 1)
        }
        return encodeURI(url)
    },
    b64EncodeUnicode (str) {
        // first we use encodeURIComponent to get percent-encoded UTF-8,
        // then we convert the percent encodings into raw bytes which
        // can be fed into btoa.
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes (match, p1) {
                return String.fromCharCode('0x' + p1)
            }))
    },
    b64DecodeUnicode (str) {
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))
    },
    sortProperties (properties, SystemPropertyMap = {}) {
        let newProperties = {}
        Object.keys(properties).sort((a, b) => {
            if (
                SystemPropertyMap[a] !== undefined &&
                SystemPropertyMap[b] !== undefined
            ) {
                return a.localeCompare(b)
            }
            return SystemPropertyMap[a] !== undefined ? -1 : 1
        }).forEach(property => {
            newProperties[property] = properties[property]
        })
        return newProperties
    },
    decodeHTMLEntities (str) {
        str = str.replace('&gt;', '>')
        str = str.replace('&lt;', '<')
        return str
    }
}
export default $utils
