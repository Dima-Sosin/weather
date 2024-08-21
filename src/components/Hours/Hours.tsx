import "../../index.css"

import { Info } from "@components/Info/Info.tsx"
import { getHour } from "@helpers/date.ts"
import { Icons } from "@helpers/icons.ts"

export const Hours = ({ hours }) => {
    const onClick = (id) => {
        const param = document.getElementById(id)
        if (param.style.display == "block") param.style.display = "none"
        else param.style.display = "block"
    }
    return (
        <ul>
            <h2 className="text-center text-xl">Прогноз по часам:</h2>
            {hours.map((hour, i) => (
                <li
                    className="flex flex-col mb-4 pt-2 rounded-2xl shadow-2xl"
                    key={i}
                    onClick={() => onClick(i)}
                >
                    <div className="flex justify-around">
                        <p className="text-xl">{getHour(hour.time)}:00</p>
                        <p className="text-xl">{hour.temp_c}°C</p>
                        <div>
                            <img
                                className="w-6 h-6"
                                src={`/src/assets/${hour.is_day === 0 ? "night" : "day"}/${Icons[hour.condition.code]}.svg`}
                                alt={`Значок погоды: ${hour.condition.text}`}
                            />
                            {hour.chance_of_rain > 0 && (
                                <p className="text-xs text-center">
                                    {hour.chance_of_rain}%
                                </p>
                            )}
                            {hour.chance_of_snow > 0 && (
                                <p className="text-xs text-center">
                                    {hour.chance_of_snow}%
                                </p>
                            )}
                        </div>
                    </div>
                    <p className="text-center mb-2">{hour.condition.text}</p>
                    <div id={i} className="hidden">
                        <Info info={hour} />
                    </div>
                </li>
            ))}
        </ul>
    )
}
