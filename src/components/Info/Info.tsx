import "../../index.css"

import { AirIcon } from "@assets/AirIcon.tsx"
import { CloudIcon } from "@assets/CloudIcon.tsx"
import { PrecipIcon } from "@assets/PrecipIcon.tsx"
import { PressureIcon } from "@assets/PressureIcon.tsx"
import { ThermostatIcon } from "@assets/ThermostatIcon.tsx"
import { VisibilityIcon } from "@assets/VisibilityIcon.tsx"
import { WaterDrop } from "@assets/WaterDropIcon.tsx"
import { WindDirectionIcon } from "@assets/WIndDirectionIcon.tsx"
import { windDireciton } from "@helpers/windDireciton.tsx"

export const Info = ({ info }) => (
    <table className="flex flex-col p-2 rounded-2xl bg-black/[.09] dark:bg-white/[.09]">
        <tbody>
            <tr className="w-full flex p-2">
                <td className="el">
                    <WaterDrop />
                    <p>Влажность</p>
                    {info.humidity} %
                </td>
                <td className="el">
                    <PrecipIcon />
                    <p>Осадки</p>
                    {info.precip_mm} мм
                </td>
            </tr>
            <tr className="w-full flex p-2">
                <td className="el">
                    <AirIcon />
                    <p>Скорость ветра</p>
                    {(info.wind_kph / 3.6).toFixed(1)} м/c
                </td>
                <td className="el">
                    <WindDirectionIcon />
                    <p>Направление ветра</p>
                    {windDireciton(info.wind_degree)}
                </td>
            </tr>
            <tr className="w-full flex p-2">
                <td className="el">
                    <div className="text-white text-base/[24px]">UV</div>
                    <p>Индекс УФ</p>
                    {info.uv}
                </td>
                <td className="el">
                    <PressureIcon />
                    <p>Давление</p>
                    {info.pressure_mb} гПа
                </td>
            </tr>
            <tr className="w-full flex p-2">
                <td className="el">
                    <CloudIcon />
                    <p>Облачность</p>
                    {info.cloud} %
                </td>
                <td className="el">
                    <VisibilityIcon />
                    <p>Видимость</p>
                    {info.vis_km} км
                </td>
            </tr>
            {!!info.feelslike_c && (
                <tr className="w-full flex p-2">
                    <td className="el">
                        <ThermostatIcon />
                        <p>Ощущение</p>
                        {info.feelslike_c}°C
                    </td>
                    <td className="el"></td>
                </tr>
            )}
        </tbody>
    </table>
)
