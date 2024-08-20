import { Week } from "@helpers/week.ts"

export const getWeekDay = (str) => {
    const date = new Date(str)
    return Week[date.getDay()]
}

export const getDate = (str) => {
    const date = new Date(str)
    return `${date.getDate()}/${date.getMonth() + 1}`
}

export const getHour = (str) => {
    const date = new Date(str)
    return date.getHours()
}

export const getTime = (str) => {
    let newStr: string
    const len = str.length
    if (str[len - 2] === "A") {
        newStr = str.slice(0, len - 3)
    } else {
        newStr = `${Number(str.slice(0, 2)) + 12}:${str.slice(3, 6)}`
    }
    return newStr
}
