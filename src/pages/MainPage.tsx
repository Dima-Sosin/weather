import "../index.css"

import { useEffect, useState } from "react"

import * as api from "@api/requests/index.ts"
import { Astro } from "@components/Astro/Astro.tsx"
import { Current } from "@components/Current/Current.tsx"
import { Forecast } from "@components/Forecast/Forecast.tsx"
import { Info } from "@components/Info/Info.tsx"
import { Preloader } from "@components/Preloader/Preloader.tsx"

export const MainPage = () => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        api.getForecast({ params: { days: 14 } }).then((response) => {
            setData(response.data)
            console.log(response.data)
            setIsLoading(false)
            if (response.data.current.is_day === 0) {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        })
    }, [])

    return isLoading ? (
        <Preloader />
    ) : (
        <>
            <Current
                location={data.location}
                current={data.current}
                hours={data.forecast.forecastday[0].hour.concat(
                    data.forecast.forecastday[1].hour
                )}
                temp={{
                    max: data.forecast.forecastday[0].day.maxtemp_c,
                    min: data.forecast.forecastday[0].day.mintemp_c
                }}
            />
            <Forecast forecastdays={data.forecast.forecastday} />
            <Info info={data.current} />
            <Astro astro={data.forecast.forecastday[0].astro} />
        </>
    )
}
