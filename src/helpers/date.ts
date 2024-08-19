import { Week } from "@helpers/week.ts"

export const getWeekDay = (str) => {
    const date = new Date(str)
    return Week[date.getDay()]
}

export const getDate = (str) => {
    const date = new Date(str)
    return `${date.getDate()}/${date.getMonth() + 1}`
}

export const getTime = (str) => {
    const date = new Date(str)
    return date.getHours()
}
