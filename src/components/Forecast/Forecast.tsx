import "../../index.css"

import { getDate, getWeekDay } from "@helpers/date.ts"
import { Icons } from "@helpers/icons.ts"
import { useDay } from "@store/store.tsx"
import { useNavigate } from "@tanstack/react-router"

export const Forecast = ({ forecastdays }) => {
    const nav = useNavigate({ from: "/" })
    const addDay = useDay((state) => state.addDay)
    return (
        <ul className="scrollbar-hide flex overflow-scroll rounded-2xl bg-black/[.09] dark:bg-white/[.09]">
            {forecastdays?.map((day, i) => (
                <li
                    className="flex flex-col p-4 items-center justify-between gap-2 hover:cursor-pointer active:shadow-2xl"
                    key={i}
                    onClick={() => {
                        addDay(day)
                        nav({ to: `/date/${day.date}` })
                    }}
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

                    <p className="text-center">
                        {day.day.maxtemp_c} {day.day.mintemp_c}
                    </p>
                </li>
            ))}
        </ul>
    )
}
