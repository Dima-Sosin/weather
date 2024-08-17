import "./index.css"

import { useEffect, useState } from "react"

import * as api from "@api/requests/index.ts"
import { Current } from "@components/Current/Current.tsx"
import { Forecast } from "@components/Forecast/Forecast.tsx"

export const App = () => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        api.getForecast({ params: { days: 7 } }).then((response) => {
            setData(response.data)
            console.log(response.data)
            setIsLoading(false)
        })
    }, [])

    return (
        <div className="flex flex-col w-dvw p-4 bg-gradient-to-r from-sky-500 to-blue-500 box-border justify-center">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <Current
                        location={data.location}
                        current={data.current}
                        hours={data.forecast.forecastday[0].hour}
                    />
                    <Forecast forecastdays={data.forecast.forecastday} />
                </>
            )}
        </div>
    )
}
