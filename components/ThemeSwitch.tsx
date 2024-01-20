import React, { useEffect, useState } from 'react'

type Props = {}

function ThemeSwitch({}: Props) {
    const [darkMode, setDarkMode] = useState<boolean>(false)

    useEffect(() => {
        const root = document.documentElement;
        const newTheme = darkMode ? 'dark' : 'light';
    
        root.setAttribute('data-theme', newTheme);
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <div>
            <button onClick={toggleTheme}>
                {'> Toggle Theme <'}
            </button>
        </div>
    )
}

export default ThemeSwitch