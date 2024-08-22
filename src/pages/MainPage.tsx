import "../index.css"

import { Astro } from "@components/Astro/Astro.tsx"
import { Current } from "@components/Current/Current.tsx"
import { Forecast } from "@components/Forecast/Forecast.tsx"
import { Info } from "@components/Info/Info.tsx"
import { useLoaderData } from "@tanstack/react-router"

export const MainPage = () => {
    const data = useLoaderData({ from: "/" })

    if (data.current.is_day === 0) {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }

    return (
        <>
            <Current
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
            <h2 className="text-center text-xl mt-4">Полезная информация</h2>
            <Info info={data.current} />
            <h2 className="text-center text-xl mt-4">Восходы и закаты</h2>
            <Astro astro={data.forecast.forecastday[0].astro} />
        </>
    )
}
