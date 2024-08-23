import * as api from "@api/requests/index.ts"
import { MainPage } from "@pages/MainPage.tsx"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/")({
    loader: async () =>
        await api
            .getForecast({
                params: {
                    days: 14,
                    q: localStorage.getItem("userCity")
                        ? localStorage.getItem("userCity")
                        : "Moscow"
                }
            })
            .then((response) => response.data),
    component: MainPage
})
