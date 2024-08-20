import { api } from "@api/instance.ts"

import AxiosRequestConfig from "../../index.d.ts"

export interface GetForecastParams {
    days: number
}

export type GetForecastConfig = AxiosRequestConfig<GetForecastParams>

export const getForecast = async ({ params, config }: GetForecastConfig) =>
    api.get("forecast.json", { params: params, config: config })
