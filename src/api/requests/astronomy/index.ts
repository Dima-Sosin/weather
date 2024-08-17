import { api } from "@api/instance.ts"

import AxiosRequestConfig from "../../index.d.ts"

type GetAstronomyParams = {
    dt: string
}

export type GetAstronomyConfig = AxiosRequestConfig<GetAstronomyParams>

export const getAstronomy = async ({ params, config }: GetAstronomyConfig) =>
    api.get("astronomy.json", { params: params, config: config })
