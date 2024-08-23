import "../../index.css"

import { ArrowDown } from "@assets/ArrowDown.tsx"
import { ArrowUp } from "@assets/ArrowUp.tsx"
import { MoonIcon } from "@assets/MoonIcon.tsx"
import { SunIcon } from "@assets/SunIcon.tsx"
import { getTime } from "@helpers/date.ts"
import { MoonPhase } from "@helpers/moonPhase.tsx"

export const Astro = ({ astro }) => (
    <table className="flex flex-col max-w-[400px] w-full p-2 rounded-2xl bg-black/[.09] dark:bg-white/[.09]">
        <tbody>
            <tr className="w-full flex p-2">
                <td className="el">
                    <div className="flex">
                        <ArrowUp />
                        <SunIcon />
                    </div>
                    <p className="text-sm">Восход Солнца</p>
                    {getTime(astro.sunrise)}
                </td>
                <td className="el">
                    <div className="flex">
                        <ArrowDown />
                        <SunIcon />
                    </div>
                    <p className="text-sm">Заход Солнца</p>
                    {getTime(astro.sunset)}
                </td>
            </tr>
            <tr className="w-full flex p-2">
                <td className="el">
                    <div className="flex">
                        <ArrowUp />
                        <MoonIcon />
                    </div>
                    <p className="text-sm">Восход Луны</p>
                    {getTime(astro.moonrise)}
                </td>
                <td className="el">
                    <div className="flex">
                        <ArrowDown />
                        <MoonIcon />
                    </div>
                    <p className="text-sm">Заход Луны</p>
                    {getTime(astro.moonset)}
                </td>
            </tr>
            <tr className="w-full flex p-2">
                <td className="el">
                    <p className="text-sm">Видимость Луны</p>
                    {astro.moon_illumination}%
                </td>
                <td className="el">
                    <p className="text-sm">Фаза Луны</p>
                    {MoonPhase[astro.moon_phase]}
                </td>
            </tr>
        </tbody>
    </table>
)
