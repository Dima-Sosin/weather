import { api } from "@api/instance.ts"

import AxiosRequestConfig from "../../index.d.ts"

export type GetSearchConfig = AxiosRequestConfig

export const getSearch = async (requestConfig?: GetSearchConfig) =>
    api.get("search.json", requestConfig?.config)
