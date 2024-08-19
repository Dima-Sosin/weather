import "../../index.css"

import { AirIcon } from "@assets/AirIcon.tsx"
import { CloudIcon } from "@assets/CloudIcon.tsx"
import { PressureIcon } from "@assets/PressureIcon.tsx"
import { ThermostatIcon } from "@assets/ThermostatIcon.tsx"
import { VisibilityIcon } from "@assets/VisibilityIcon.tsx"
import { WaterDrop } from "@assets/WaterDropIcon.tsx"
import { WindDirectionIcon } from "@assets/WIndDirectionIcon.tsx"
import { windDireciton } from "@helpers/windDireciton.tsx"

export const Info = ({ current }) => (
    <table className="flex flex-col mt-4 p-2 rounded-2xl bg-black/[.09] dark:bg-white/[.09]">
        <caption className="mb-1">Полезная информация</caption>
        <tbody>
            <tr className="w-full flex p-2">
                <td className="el">
                    <WaterDrop />
                    <p>Влажность</p>
                    {current.humidity} %
                </td>
                <td className="el">
                    <ThermostatIcon />
                    <p>Ощущение</p>
                    {current.feelslike_c}°C
                </td>
            </tr>
            <tr className="w-full flex p-2">
                <td className="el">
                    <AirIcon />
                    <p>Скорость ветра</p>
                    {(current.wind_kph / 3.6).toFixed(1)} м/c
                </td>
                <td className="el">
                    <WindDirectionIcon />
                    <p>Направление ветра</p>
                    {windDireciton(current.wind_degree)}
                </td>
            </tr>
            <tr className="w-full flex p-2">
                <td className="el">
                    <div className="text-white text-base/[24px]">UV</div>
                    <p>Индекс УФ</p>
                    {current.uv}
                </td>
                <td className="el">
                    <PressureIcon />
                    <p>Давление</p>
                    {current.pressure_mb} гПа
                </td>
            </tr>
            <tr className="w-full flex p-2">
                <td className="el">
                    <CloudIcon />
                    <p>Облачность</p>
                    {current.cloud} %
                </td>
                <td className="el">
                    <VisibilityIcon />
                    <p>Видимость</p>
                    {current.vis_km} км
                </td>
            </tr>
        </tbody>
    </table>
)
