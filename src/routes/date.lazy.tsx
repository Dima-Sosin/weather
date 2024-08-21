import { DatePage } from "@pages/DatePage.tsx"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/date")({
    component: DatePage
})
