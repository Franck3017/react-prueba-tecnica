import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"

export function App(){
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({fact})

    // No se puede hacer un fetching de datos fuera de un hook
    // porque se va ejecutar cada vez que se renderize el componente.
    // En caso que se tenga que usar async/await, se debe hacer dentro de un hook
    // ya que el effect siempre tiene que ser una función síncrona.
    // useEffect(() => {
    //     async function getRandomFact ()  {
    //         const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    //         const json = await res.json()
    //         const { fact } = json
    //         setFact(fact)
    //     }
    //     getRandomFact()
    // },[])
    
    const handleCLick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleCLick}>Get new fact</button>
            {
                fact && <p>{fact}</p> // Renderizado condicional
            }
            {
                imageUrl && <img src={imageUrl} alt={`image extracted using the three words for ${fact}}`} />
            }
        </main>
    )
}