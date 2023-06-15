
export default async function getWikiResults(searchTerm: string) {

    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*',
    })
    
    const url = `https://en.wikipedia.org/w/api.php?`

    // console.log("searchParams", searchParams)

    const response = await fetch(url + searchParams)

    return response.json()
}
