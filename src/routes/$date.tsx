import * as api from "@api/requests/index.ts"
import { DatePage } from "@pages/DatePage.tsx"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/$date")({
    loader: async ({ params: { date } }) =>
        api
            .getForecast({ params: { dt: date } })
            .then((response) => response.data),
    component: DatePage
})
