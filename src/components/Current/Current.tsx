import "../../index.css"

import { Icons } from "@/helpers/icons.ts"

export const Current = ({ location, current, hours }) => {
    const getTime = (str) => {
        const date = new Date(str)
        return date.getHours()
    }
    return (
        <div className="flex-col mb-4 overflow-hidden">
            <h1 className="text-5xl text-center">{location.name}</h1>

            <div className="my-32">
                <div className="flex items-center justify-center">
                    <h2 className="text-7xl text-center">
                        {current.temp_c}
                        <span className="text-xl  align-top">°C</span>
                    </h2>
                    <img
                        className="w-18 h-18"
                        src={`src/assets/${current.is_day === 1 ? "day" : "night"}/${Icons[current.condition.code]}.svg`}
                        alt={`Значок погоды: ${current.condition.text}`}
                    />
                </div>
                <p className="text-2xl text-center">{current.condition.text}</p>
            </div>

            <ul className="scrollbar-hide flex mt-4 overflow-scroll rounded-2xl bg-black/[.09] dark:bg-white/[.09]">
                {hours.map((hour, i) => (
                    <li
                        className="flex flex-col p-2 items-center gap-2 mx-1.5"
                        key={i}
                    >
                        <h3 className="text-center">{getTime(hour.time)}:00</h3>
                        <img
                            className="w-6 h-6"
                            src={`src/assets/${hour.is_day === 1 ? "day" : "night"}/${Icons[hour.condition.code]}.svg`}
                            alt={`Значок погоды: ${hour.condition.text}`}
                        />
                        <h3 className="text-center">{hour.temp_c}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}
