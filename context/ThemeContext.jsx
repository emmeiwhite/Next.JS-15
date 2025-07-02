import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()
export default function ThemeContext() {
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark') === 'false' ? false : true)

  function handleTheme() {
    setIsDark(prev => !prev)
  }

  useEffect(() => {
    localStorage.setItem('isDark', isDark)
    document.body.classList.toggle('dark-mode', isDark)
  }, [isDark])

  const themeContextValues = {
    isDark,
    handleTheme,
    setIsDark
  }

  /** --- To Toggle the class="dark" on the html element.
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])
   --- */

  return <ThemeContext.Provider value={themeContextValues}>ThemeContext</ThemeContext.Provider>
}

// Custom Hook
export const useTheme = () => useContext(ThemeContext)
