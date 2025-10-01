// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

    experimental: {
        fonts: [
            {
                provider: "local",
                name: "Parkinsans",
                cssVariable: "--font-parkinsans",
                variants: [
                    {
                        src: [
                            "./src/fonts/Parkinsans-Regular.ttf",
                            "./src/fonts/Parkinsans-Medium.ttf",
                            "./src/fonts/Parkinsans-SemiBold.ttf",
                            "./src/fonts/Parkinsans-Bold.ttf",
                            "./src/fonts/Parkinsans-ExtraBold.ttf"
                        ]
                    }
                ],
                fallbacks: ["sans-serif"],
            }
        ]
    }
});