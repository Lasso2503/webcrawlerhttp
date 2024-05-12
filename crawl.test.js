const { normalizeURL, getURLsFromHTML, crawlPage } = require('./crawl.js')
const { test, expect } = require('@jest/globals')


/*
test('normalizeURL strip protocol', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'     
    expect(actual).toEqual(expected)
})

test('normalizeURL trailing slash', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'    
    expect(actual).toEqual(expected)
})

test('normalizeURL capitals', () => {
    const input = 'https://BLOG.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'    
    expect(actual).toEqual(expected)
})

test('normalizeURL http', () => {
    const input = 'http://BLOG.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'    
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="https://www.9gag9.com/path/">Een link</a>
        </body>
    </html>
    `
    const inputBaseURL = 'https://www.9gag9.com/path/'
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
   
    const expected = ["www.9gag9.com/path"]       
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML relative', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="/path/">Een link</a>
        </body>
    </html>
    `
    const inputBaseURL = 'https://www.9gag9.com'
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    
    
   
    const expected = ["www.9gag9.com/path"]    
    
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML relative and normal', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="/path/">Een link</a>
            <a href="https://www.9gag9.com/path/">Een link</a>
            <a href="https://www.quora.com/path/">Een link</a>
        </body>
    </html>
    `
    const inputBaseURL = 'https://www.9gag9.com'
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    
    const expected = ["www.9gag9.com/path", "www.9gag9.com/path", "www.quora.com/path"];

    
    expect(actual).toEqual(expected)
})


test('getURLsFromHTML invalid url', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="/path/">Een link</a>
            <a href="invalid">Een link</a>
            <a href="https://www.quora.com/path/">Een link</a>
        </body>
    </html>
    `
    const inputBaseURL = 'https://www.9gag9.com'
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    
    const expected = ["www.9gag9.com/path", "www.quora.com/path"];

  
    expect(actual).toEqual(expected)
})
*/

test('fetch function', () => {
    const input = 'https://wagslane.dev'
    const actual = crawlPage(input)
    const expected = 'blog.boot.dev/path'     
    
})
