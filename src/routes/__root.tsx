import { Search } from "@components/Search/Search.tsx"
import { createRootRoute, Outlet } from "@tanstack/react-router"
import { ScrollRestoration } from "@tanstack/react-router"

export const Route = createRootRoute({
    component: () => (
        <div className="h-lvh scrollbar-hide overflow-y-scroll overflow-x-hidden scroll-smooth bg-gradient-to-r from-sky-500 to-blue-500 dark:from-[#0f0c29] dark:to-[#24243e]">
            <div className="flex flex-col items-center p-2 sm:p-4 md:p-8 dark:text-white">
                <Search />
                <ScrollRestoration />
                <Outlet />
            </div>
        </div>
    )
})
