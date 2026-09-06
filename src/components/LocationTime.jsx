import { useState, useEffect } from 'react'
import { MapPin } from 'lucide-react'

export default function LocationTime() {
  const [time, setTime] = useState('')
  const [weather, setWeather] = useState(null)
  const [weatherStatus, setWeatherStatus] = useState('loading')

  useEffect(() => {
    function updateTime() {
      const formatted = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Africa/Lagos',
        timeZoneName: 'short',
      }).format(new Date())
      setTime(formatted)
    }
    updateTime()
    const interval = setInterval(updateTime, 30000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=9.0765&longitude=7.3986&current=temperature_2m,weather_code'
        )
        const data = await res.json()
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          code: data.current.weather_code,
        })
        setWeatherStatus('ready')
      } catch {
        setWeatherStatus('error')
      }
    }
    fetchWeather()
  }, [])

  function describeWeather(code) {
    if (code === 0) return 'Clear'
    if (code <= 3) return 'Partly Cloudy'
    if (code <= 48) return 'Cloudy'
    if (code <= 67) return 'Rainy'
    if (code <= 82) return 'Showers'
    return 'Stormy'
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-base text-neutral-400 mt-6">
      <MapPin className="w-3.5 h-3.5" />
      <span>Abuja, Nigeria</span>
      <span className="text-neutral-300">·</span>
      <span>Local Time: {time}</span>
      <span className="text-neutral-300">·</span>
      {weatherStatus === 'loading' && <span>Current Weather: Loading…</span>}
      {weatherStatus === 'error' && <span>Weather unavailable</span>}
      {weatherStatus === 'ready' && (
        <span>Current Weather: {weather.temp}°C · {describeWeather(weather.code)}</span>
      )}
    </div>
  )
}