const { JSDOM } = require('jsdom')


function getURLsFromHTML(htmlBody, baseURL){    
    const dom = new JSDOM(htmlBody);
    const urls = []
    const linkElements = dom.window.document.querySelectorAll('a')
    for (linkElement of linkElements){ 
        const href = linkElement.href;
        try{
            const normalizedURL = normalizeURL(href, baseURL);
            urls.push(normalizedURL);
        } catch(err){
            console.log(`error with relative url: ${err.message}`)
            continue;
        }   
        
    }
    return urls
}

function isAbsoluteUrl(url) {
    // Check if URL starts with 'http://', 'https://', or '//'
    return /^(https?:\/\/|\/\/)/.test(url);
}


function normalizeURL(urlString, baseURL=''){

    let fullUrl = urlString;

    // If the URL is relative, prepend the baseURL
    if (!isAbsoluteUrl(urlString)) {
        // Ensure there's no double slash
        if (baseURL.endsWith('/') && urlString.startsWith('/')) {
            fullUrl = baseURL.slice(0, -1) + urlString;
        } else {
            fullUrl = baseURL + urlString;
        }
    } else {
        // For absolute URLs, prepare to normalize directly
        fullUrl = urlString;
    }
   
    // Check if baseURL is not provided or empty
    let urlObj; // Properly scoped now
    if (baseURL && !isAbsoluteUrl(urlString)) {
        if(urlString.slice(0,1) !== '/'){
            console.log('Skipping invalid relative URL:', urlString); // Optional: log or handle invalid URL cases
        } else {
            urlObj = new URL(urlString, baseURL); // This constructs a full URL from a relative path using baseURL.
        }
    } else {        
        urlObj = new URL(urlString); // urlString is already absolute.
    }   
     


    let normalized = `${urlObj.hostname}${urlObj.pathname}`.toLowerCase();
    if (normalized.endsWith('/')) {
        normalized = normalized.slice(0, -1);
    }
   
    return normalized;
}


module.exports = {
    normalizeURL,
    getURLsFromHTML
}