async function getHeroes(){

    const heroes = await fetch("https://overfast-api.tekrop.fr/heroes", {
        mode: "no-cors",
    })

    let data = await heroes.json()

    console.log(data)
}

export default getHeroes