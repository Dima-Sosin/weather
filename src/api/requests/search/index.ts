import { api } from "@api/instance.ts"

import AxiosRequestConfig from "../../index.d.ts"

export type GetSearchConfig = AxiosRequestConfig

export const getSearch = async ({ params, config }: GetSearchConfig) =>
    api.get("search.json", { params: params, config: config })
