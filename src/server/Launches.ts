
//Extraer todos los lanzamientos
export default async function getLaunches(){
    try {
        const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: {},
                options: {
                    limit: 20,
                }
            })
        })
        const { docs } = await res.json()
        return docs
    } catch (error) {
        return error
    }
}

//Extraer solo un lanzamiento
export const getLaunch = async ({ id } : { id: string }) =>{
    try {
        const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
        const docs = await res.json()
        return docs
    } catch (error) {
        return error
    }
}