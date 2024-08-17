import { useEffect, useState } from "react"

import * as api from "@api/requests/index.ts"

export const App = () => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        api.getForecast({ params: { days: 3 } }).then((response) => {
            setData(response.data)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <img
                    src={data.current.condition.icon}
                    alt={`Значок погоды: ${data.current.condition.text}`}
                />
            )}
        </>
    )
}
