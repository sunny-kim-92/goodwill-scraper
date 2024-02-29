import { PlaywrightCrawler, Dataset } from 'crawlee';

let itemCount = Infinity
let pageNumber = 1
const collect = (url) => {
    return fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            itemCount = res.searchResults.itemCount
            pageNumber++
            Dataset.pushData(res.searchResults.items)
        })
}

while (itemCount > 0) {
    await collect('https://buyerapi.shopgoodwill.com/api/Search/ItemListingData?pn=4&cl=1&cids=&scids=&p=' + pageNumber + '&sc=1&sd=false&cid=0&sg=Keyword&st=aladdin')
}