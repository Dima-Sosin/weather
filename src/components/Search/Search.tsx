import "../../index.css"

import { useState } from "react"
import { debounce } from "lodash"

import * as api from "@api/requests/index.ts"
import { SearchIcon } from "@assets/SearchIcon.tsx"

export const Search = () => {
    const [arr, setArr] = useState([])

    const searchCity = (value: string) => {
        if (value) {
            api.getSearch({ params: { q: value } }).then((response) => {
                console.log(response.data)
                setArr(response.data)
            })
        } else {
            setArr([])
        }
    }
    const debounceSearch = debounce(searchCity, 1000)

    return (
        <div className="flex flex-col justify-center relative">
            <input
                type="text"
                placeholder={localStorage.getItem("userCity")}
                onChange={(event) => {
                    debounceSearch(event.target.value)
                }}
                className="bg-transparent border-2 placeholder-white rounded-2xl text-2xl text-center outline outline-0 focus:outline-0"
            />
            <SearchIcon className="absolute right-2" />
            {arr.length !== 0 && (
                <ul className="flex flex-col w-full absolute top-9 rounded-2xl backdrop-blur bg-black/[.09] dark:bg-white/[.09]">
                    {arr.map((city, i) => (
                        <li
                            key={i}
                            onClick={() => {
                                localStorage.setItem("userCity", city.name)
                                setArr([])
                                location.reload()
                            }}
                            className="flex w-full p-2 rounded-2xl  items-center justify-between hover:cursor-pointer hover:bg-black/[.09] hover:dark:bg-white/[.09]"
                        >
                            <span className="text-xl text-left">
                                {city.name}
                            </span>
                            <span className="text-right">{city.country}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
