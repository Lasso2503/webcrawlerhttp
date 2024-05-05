function normalizeURL(urlString){
    const urlObj = new URL(urlString)
    urlString = `${urlObj.hostname}${urlObj.pathname}`
   
    if (urlString[urlString.length - 1] == '/'){
        urlString = urlString.substring(0, urlString.length - 1).toLowerCase();
    }
    return urlString
} 

module.exports = {
    normalizeURL
}