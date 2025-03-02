const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=apie'

export async function getNews() {
    let result = await fetch(url).then(Response => Response.json)
    return result.articles;
}