import "../../index.css"

import { Icons } from "@helpers/icons.ts"
import { Week } from "@helpers/week.ts"

export const Forecast = ({ forecastdays }) => {
    const date = (str) => {
        const date = new Date(str)
        return Week[date.getDay()]
    }
    return (
        <ul className="flex gap-4">
            {forecastdays?.map((day, i) => (
                <li
                    className="flex-col p-2 items-center border-2 rounded-2xl"
                    key={i}
                >
                    <h3 className="text-center">{date(day.date)}</h3>
                    <img
                        src={`src/assets/day/${Icons[day.day.condition.code]}.svg`}
                        alt={`Значок погоды: ${day.day.condition.text}`}
                    />
                    <h3 className="text-center">{day.day.avgtemp_c}</h3>
                </li>
            ))}
        </ul>
    )
}
