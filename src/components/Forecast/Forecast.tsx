import "../../index.css"

import { getDate, getWeekDay } from "@helpers/date.ts"
import { Icons } from "@helpers/icons.ts"
import { useNavigate } from "@tanstack/react-router"
import { IForecastday } from "@types/index.d.ts"

interface IForecast {
    forecastdays: IForecastday[]
}

export const Forecast = ({ forecastdays }: IForecast) => {
    const nav = useNavigate({ from: "/" })
    return (
        <ul className="scrollbar-hide flex overflow-x-auto rounded-2xl bg-black/[.09] dark:bg-white/[.09]">
            {forecastdays?.map((day, i) => (
                <li
                    className="flex flex-col p-4 items-center justify-between gap-2 hover:cursor-pointer hover:shadow-xl"
                    key={i}
                    onClick={() => nav({ to: `/${day.date}` })}
                >
                    <div>
                        <h3 className="text-center">{getWeekDay(day.date)}</h3>
                        <h3 className="text-center text-xs">
                            {getDate(day.date)}
                        </h3>
                    </div>

                    <div>
                        <img
                            className="w-6 h-6"
                            src={`src/assets/day/${Icons[day.day.condition.code]}.svg`}
                            alt={`Значок погоды: ${day.day.condition.text}`}
                        />
                        {day.day.daily_chance_of_rain > 0 && (
                            <p className="text-xs text-center">
                                {day.day.daily_chance_of_rain}%
                            </p>
                        )}
                        {day.day.daily_chance_of_snow > 0 && (
                            <p className="text-xs text-center">
                                {day.day.daily_chance_of_snow}%
                            </p>
                        )}
                    </div>

                    <div>
                        <p className="text-center">{day.day.maxtemp_c}</p>
                        <p className="text-center">{day.day.mintemp_c}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}
