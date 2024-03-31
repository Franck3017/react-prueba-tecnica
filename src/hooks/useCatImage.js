import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export function useCatImage ({fact}) {
    const [imageUrl, setImageUrl] = useState()
    
    // Para recuperar la imagen cada vez que tenemos una nueva cita
    useEffect(() => {
        if (!fact) return

        const threeFirstWords = fact.split(' ', 3).join(' ')

            fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
                .then(res => res.json())
                .then(json => {
                    setImageUrl(json)
                })
    },[fact])

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}