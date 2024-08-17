import "../../index.css"

import { Icons } from "@/helpers/icons.ts"

export const Current = ({ location, current, hours }) => {
    const getTime = (str) => {
        const date = new Date(str)
        return date.getHours()
    }
    return (
        <div className="flex-col mb-4">
            <h1 className="text-5xl text-center">{location.name}</h1>
            <h2 className="text-2xl text-center">{current.condition.text}</h2>
            <img
                className="w-full h-auto"
                src={`src/assets/${current.is_day === 1 ? "day" : "night"}/${Icons[current.condition.code]}.svg`}
                alt={`Значок погоды: ${current.condition.text}`}
            />
            <h2 className="text-2xl text-center">
                <span className="font-bold">{current.temp_c} С</span> /
                ощущается{" "}
                <span className="font-bold">{current.feelslike_c} С</span>
            </h2>
            <ul className="flex gap-3">
                {hours.map((hour, i) => (
                    <li
                        className="flex flex-col p-2 items-center border-2 rounded-2xl"
                        key={i}
                    >
                        <h3 className="text-center">
                            0{getTime(hour.time)}:00
                        </h3>
                        <img
                            className="w-6 h-6"
                            src={`src/assets/${hour.is_day === 1 ? "day" : "night"}/${Icons[hour.condition.code]}.svg`}
                            alt={`Значок погоды: ${hour.condition.text}`}
                        />
                        <h3 className="text-center">{hour.chance_of_rain}%</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}
