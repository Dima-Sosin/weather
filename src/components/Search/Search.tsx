import "../../index.css"

import { useState } from "react"
import { debounce } from "lodash"

import * as api from "@api/requests/index.ts"

export const Search = () => {
    const [arr, setArr] = useState([])
    const [value, setValue] = useState("")
    const searchCity = (value: string) => {
        api.getSearch({ params: { q: value } }).then((response) => {
            console.log(response.data)
            setArr(response.data)
        })
    }
    const debounceSearch = debounce(searchCity, 1000)

    return (
        <div className="flex flex-col justify-center relative">
            <input
                type="text"
                value={value}
                placeholder={localStorage.getItem("userCity")}
                onChange={(event) => {
                    setValue(event.target.value)
                    debounceSearch(event.target.value)
                }}
                className="bg-transparent border-2 placeholder-white rounded-2xl text-2xl text-center outline outline-0 focus:outline-0"
            />
            {value !== "" && (
                <ul className="flex flex-col w-full p-2 gap-2 absolute top-9 rounded-2xl backdrop-blur bg-black/[.09] dark:bg-white/[.09]">
                    {arr.map((city, i) => (
                        <li
                            key={i}
                            onClick={() => {
                                localStorage.setItem("userCity", city.region)
                                setValue("")
                                setArr([])
                                location.reload()
                            }}
                            className="flex w-full items-center justify-between active:cursor-pointer active:"
                        >
                            <span className="text-xl">{city.region}</span>
                            <span>{city.country}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
