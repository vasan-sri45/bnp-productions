// import "./globals.css";
// import Providers from "./providers";

// export const metadata = {
//   title: "Your App",
//   description: "Your description",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Providers>
//           {children}
//         </Providers>
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "BNP Production",
  icons: {
    icon: "/images/client-logos/logo.jpeg",   // or /icon.png
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
