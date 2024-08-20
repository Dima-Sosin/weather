import "../../index.css"

import { getHour } from "@helpers/date.ts"

import { Icons } from "@/helpers/icons.ts"

export const Current = ({ current, hours, temp }) => {
    const currentDate = new Date()
    const content = []
    for (let i = currentDate.getHours(); i < hours.length-(24-currentDate.getHours()); i++) {
        content.push(
            <li
                className="flex flex-col p-2 items-center justify-between gap-2 mx-1.5"
                key={i}
            >
                <h3 className="text-center">{getHour(hours[i].time)}:00</h3>
                <div>
                    <img
                        className="w-6 h-6"
                        src={`src/assets/${hours[i].is_day === 1 ? "day" : "night"}/${Icons[hours[i].condition.code]}.svg`}
                        alt={`Значок погоды: ${hours[i].condition.text}`}
                    />
                    {hours[i].chance_of_rain > 0 && (
                        <p className="text-xs text-center">
                            {hours[i].chance_of_rain}%
                        </p>
                    )}
                    {hours[i].chance_of_snow > 0 && (
                        <p className="text-xs text-center">
                            {hours[i].chance_of_snow}%
                        </p>
                    )}
                </div>
                <h3 className="text-center">{hours[i].temp_c}</h3>
            </li>
        )
    }

    return (
        <div className="flex-col mb-4 overflow-hidden">
            <h2 className="text-center text-xl">Сегодня</h2>

            <div className="my-32">
                <div className="flex items-center justify-center gap-2">
                    <h2 className="text-7xl text-center">
                        {current.temp_c}
                        <span className="text-xl align-top">°C</span>
                    </h2>
                    <img
                        className="w-18 h-18"
                        src={`src/assets/${current.is_day === 1 ? "day" : "night"}/${Icons[current.condition.code]}.svg`}
                        alt={`Значок погоды: ${current.condition.text}`}
                    />
                </div>
                <p className="text-center text-xl">
                    {temp.max} / {temp.min}°C
                </p>
                <p className="text-2xl text-center">{current.condition.text}</p>
            </div>

            <ul className="scrollbar-hide flex mt-4 overflow-scroll rounded-2xl bg-black/[.09] dark:bg-white/[.09]">
                {content}
            </ul>
        </div>
    )
}
