import "../../index.css"

import { Icons } from "@helpers/icons.ts"
import { Week } from "@helpers/week.ts"

export const Forecast = ({ forecastdays }) => {
    const weekDay = (str) => {
        const date = new Date(str)
        return Week[date.getDay()]
    }
    const date = (str) => {
        const date = new Date(str)
        return `${date.getDate()}/${date.getMonth() + 1}`
    }
    return (
        <ul className="scrollbar-hide flex overflow-scroll rounded-2xl bg-black/[.09] dark:bg-white/[.09]">
            {forecastdays?.map((day, i) => (
                <li
                    className="flex flex-col p-2 items-center gap-2 mx-1.5"
                    key={i}
                >
                    <div>
                        <h3 className="text-center">{weekDay(day.date)}</h3>
                        <h3 className="text-center">{date(day.date)}</h3>
                    </div>

                    <img
                        className="w-6 h-6"
                        src={`src/assets/day/${Icons[day.day.condition.code]}.svg`}
                        alt={`Значок погоды: ${day.day.condition.text}`}
                    />
                    <p className="text-center">
                        {day.day.maxtemp_c} {day.day.mintemp_c}
                    </p>
                </li>
            ))}
        </ul>
    )
}
