
function printReport(pages) {
    let report = sortReport(pages)
    console.log('report starting...')   
    
    for (const [key, value] of Object.entries(report)) {
        console.log(`Found ${value} internal links to ${key}`);
    }
    
}

function sortReport(pages){
    return Object.fromEntries(Object.entries(pages).sort(([,a],[,b]) => b-a))
}

export { printReport };