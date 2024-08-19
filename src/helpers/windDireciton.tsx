export const windDireciton = (degree: number) => {
    if (degree < 22.5) {
        return "С"
    } else if (degree < 67.5) {
        return "СВ"
    } else if (degree < 112.5) {
        return "В"
    } else if (degree < 157.5) {
        return "ЮВ"
    } else if (degree < 202.5) {
        return "Ю"
    } else if (degree < 247.5) {
        return "ЮЗ"
    } else if (degree < 292.5) {
        return "З"
    } else if (degree < 337.5) {
        return "СЗ"
    } else {
        return "С"
    }
}
