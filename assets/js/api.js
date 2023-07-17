const url = 'https://raw.githubusercontent.com/zaiaaa/portfolio-js-dio/main/data/profile.json'

async function fetchProfileData(){
    const fetching = await fetch(url)
    return fetching.json()
}