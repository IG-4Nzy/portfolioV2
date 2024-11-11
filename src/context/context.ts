import { createContext } from "react";
import { ThemeContextType } from "./model";




export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);