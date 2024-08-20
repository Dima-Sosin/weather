import { MainPage } from "@pages/MainPage.tsx"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/")({
    component: MainPage
})
