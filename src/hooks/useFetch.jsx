import { useState } from "react"


export const useFetch = (callback) => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const fetching = async () => {
        try {
            setLoading(true)
            await callback()
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return [fetching, loading, error]
}