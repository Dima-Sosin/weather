import "../../index.css"

import { getDate, getWeekDay } from "@helpers/date.ts"
import { Icons } from "@helpers/icons.ts"

export const Forecast = ({ forecastdays }) => (
    <ul className="scrollbar-hide flex overflow-scroll rounded-2xl bg-black/[.09] dark:bg-white/[.09]">
        {forecastdays?.map((day, i) => (
            <li
                className="flex flex-col p-2 items-center justify-between gap-2 mx-1.5"
                key={i}
            >
                <div>
                    <h3 className="text-center">{getWeekDay(day.date)}</h3>
                    <h3 className="text-center text-xs">{getDate(day.date)}</h3>
                </div>

                <div>
                    <img
                        className="w-6 h-6"
                        src={`src/assets/day/${Icons[day.day.condition.code]}.svg`}
                        alt={`Значок погоды: ${day.day.condition.text}`}
                    />
                    {day.day.daily_will_it_rain === 1 && (
                        <p className="text-xs text-center">
                            {day.day.daily_chance_of_rain}%
                        </p>
                    )}
                    {day.day.daily_will_it_snow === 1 && (
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
