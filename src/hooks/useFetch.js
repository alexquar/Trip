import { useState, useEffect } from "react"


export const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    useEffect(()=>{
        const controller = new AbortController()

        const fetchData = async () =>{
    
            setIsPending(true)
            try{
            const res = await fetch(url, {signla:controller.signal})
            if(!res.ok){
                throw new Error(res.statusText)
            }
            const json = await res.json()
            setData(json)
            setIsPending(false)
            setError(null)
            } catch(err){
                if(err.name === "AbortError"){
                    console.log('fetch aborted')
                } else {
                console.log(err.message)
                setError('Could not fetch data...')
                setIsPending(false)
                }
            }
        }
        fetchData() 
        return () => {
            controller.abort()
        }
    }, [url])

    return {data, isPending, error}
}

