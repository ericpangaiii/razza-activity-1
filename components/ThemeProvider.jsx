'use client';

import { ThemeProvider as NextThemesProvider} from 'next-themes';

export function ThemeProvider({childre, ...props}) {
    return <NextThemesProvider {...props}></NextThemesProvider>
}