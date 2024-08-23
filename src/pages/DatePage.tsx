import "../index.css"

import { Astro } from "@components/Astro/Astro.tsx"
import { Hours } from "@components/Hours/Hours.tsx"
import { getFullDate } from "@helpers/date.ts"
import { Icons } from "@helpers/icons.ts"
import { useLoaderData } from "@tanstack/react-router"

export const DatePage = () => {
    const day = useLoaderData({ from: "/$date" }).forecast.forecastday[0]
    return (
        <div id="page" className="flex flex-col sm:items-center w-full">
            <h2 className="text-center text-xl mt-2">
                {getFullDate(day.date)}
            </h2>

            <div className="my-32">
                <div className="flex items-center justify-center gap-2">
                    <h2 className="text-7xl text-center">
                        {day.day.avgtemp_c}
                        <span className="text-xl align-top">°C</span>
                    </h2>
                    <img
                        className="w-18 h-18"
                        src={`/src/assets/day/${Icons[day.day.condition.code]}.svg`}
                        alt={`Значок погоды: ${day.day.condition.text}`}
                    />
                </div>
                <p className="text-center text-xl">
                    {day.day.maxtemp_c} / {day.day.mintemp_c}°C
                </p>
                <p className="text-2xl text-center">{day.day.condition.text}</p>
            </div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="flex flex-col items-center lg:w-1/2">
                    <h2 className="text-center text-xl">Прогноз по часам:</h2>
                    <Hours hours={day.hour} />
                </div>
                <div className="flex flex-col items-center lg:w-1/2 ">
                    <h2 className="text-center text-xl mt-4 lg:mt-0">
                        Восходы и закаты
                    </h2>
                    <Astro astro={day.astro} />
                </div>
            </div>
        </div>
    )
}
