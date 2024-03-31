const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const json = await res.json()
    const { fact } = json
    return fact
}