"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {APIProvider} from '@vis.gl/react-google-maps';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_API_KEY_GOOGLE||''} onLoad={() => console.log('Maps API has loaded.')}>
    <html lang="en">
      <body>
        <ThemeProvider theme={baselightTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
    </APIProvider>
  );
}
