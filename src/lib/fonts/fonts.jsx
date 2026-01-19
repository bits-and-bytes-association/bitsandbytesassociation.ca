import localFont from "next/font/local";

export const firaSans = localFont({
  src: [
    // 100
    { path: "./FiraSans-Hair.woff2", weight: "100", style: "normal" },
    { path: "./FiraSans-HairItalic.woff2", weight: "100", style: "italic" },
    { path: "./FiraSans-Thin.woff2", weight: "100", style: "normal" },
    { path: "./FiraSans-ThinItalic.woff2", weight: "100", style: "italic" },

    // 200
    { path: "./FiraSans-Two.woff2", weight: "200", style: "normal" },
    { path: "./FiraSans-TwoItalic.woff2", weight: "200", style: "italic" },
    { path: "./FiraSans-UltraLight.woff2", weight: "200", style: "normal" },
    { path: "./FiraSans-UltraLightItalic.woff2", weight: "200", style: "italic" },
    { path: "./FiraSans-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "./FiraSans-ExtraLightItalic.woff2", weight: "200", style: "italic" },

    // 300
    { path: "./FiraSans-Light.woff2", weight: "300", style: "normal" },
    { path: "./FiraSans-LightItalic.woff2", weight: "300", style: "italic" },

    // 400
    { path: "./FiraSans-Four.woff2", weight: "400", style: "normal" },
    { path: "./FiraSans-FourItalic.woff2", weight: "400", style: "italic" },
    { path: "./FiraSans-Book.woff2", weight: "400", style: "normal" },
    { path: "./FiraSans-BookItalic.woff2", weight: "400", style: "italic" },
    { path: "./FiraSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./FiraSans-Italic.woff2", weight: "400", style: "italic" },

    // 500
    { path: "./FiraSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./FiraSans-MediumItalic.woff2", weight: "500", style: "italic" },

    // 600
    { path: "./FiraSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./FiraSans-SemiBoldItalic.woff2", weight: "600", style: "italic" },

    // 700
    { path: "./FiraSans-Bold.woff2", weight: "700", style: "normal" },
    { path: "./FiraSans-BoldItalic.woff2", weight: "700", style: "italic" },

    // 800
    { path: "./FiraSans-Eight.woff2", weight: "800", style: "normal" },
    { path: "./FiraSans-EightItalic.woff2", weight: "800", style: "italic" },
    { path: "./FiraSans-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./FiraSans-ExtraBoldItalic.woff2", weight: "800", style: "italic" },

    // 900
    { path: "./FiraSans-Heavy.woff2", weight: "900", style: "normal" },
    { path: "./FiraSans-HeavyItalic.woff2", weight: "900", style: "italic" },
    { path: "./FiraSans-Ultra.woff2", weight: "900", style: "normal" },
    { path: "./FiraSans-UltraItalic.woff2", weight: "900", style: "italic" },
  ],
  display: "swap",
  variable: "--font-fira-sans",
});
