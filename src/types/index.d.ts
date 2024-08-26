export interface ISearch {
    id: number
    name: string
    region: string
    country: string
    lat: number
    lon: number
    url: string
}

export interface ILocation {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
}

interface ICondition {
    text: string
    icon: string
    code: number
}

export interface IInfo {
    cloud: number
    condition: ICondition
    feelslike_c?: number
    humidity: number
    is_day: number
    last_updated: string
    precip_mm: number
    pressure_mb: number
    temp_c: number
    uv: number
    vis_km: number
    wind_degree: number
    wind_kph: number
}

export interface IAstro {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: string
    moon_illumination: string
}

export interface IDay {
    avghumidity: number
    avgtemp_c: number
    avgvis_km: number
    condition: ICondition
    daily_chance_of_rain: number
    daily_chance_of_snow: number
    maxtemp_c: number
    maxwind_kph: number
    mintemp_c: number
    totalprecip_mm: number
    uv: number
}

export interface IHour {
    chance_of_rain: number
    chance_of_snow: number
    cloud: number
    condition: ICondition
    humidity: number
    is_day: number
    precip_mm: number
    pressure_mb: number
    temp_c: number
    time: string
    uv: number
    vis_km: number
    wind_degree: number
    wind_kph: number
}

export interface IForecastday {
    astro: IAstro
    date: string
    day: IDay
    hour: IHour[]
}
