import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContextProvider = createContext<ThemeProviderState | undefined>(
  undefined
);

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  return (
    <ThemeContextProvider.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContextProvider.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContextProvider);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
