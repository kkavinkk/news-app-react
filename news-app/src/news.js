const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7161a594098c49ecb0873c3b17e8d0c8'

export async function getNews() {
    let result = await fetch(url).then(Response => Response.json)
    return result.articles;
}