import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                backAuth: "rgba(228, 230, 242)",
            },
            screens: {
                xxs: "320px", // Adding custom screen size for min-width: 320px
            },
        },
    },
    variants: {
        display: ["responsive"], // Ensure responsive variants for display are enabled
    },
    plugins: [
        plugin(function ({ addUtilities }: PluginAPI) {
            // Typing the addUtilities parameter
            addUtilities({
                ".md-display-none": {
                    "@screen md": {
                        display: "none",
                    },
                },
                ".lg-display-none": {
                    "@screen md": {
                        display: "none",
                    },
                },
            });
        }),
    ],
};
export default config;
