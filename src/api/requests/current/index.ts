import { api } from "@api/instance.ts"

import AxiosRequestConfig from "../../index.d.ts"

export type GetCurrentConfig = AxiosRequestConfig

export const getCurrent = async (requestConfig?: GetCurrentConfig) =>
    api.get("current.json", requestConfig?.config)
