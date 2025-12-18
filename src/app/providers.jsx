// "use client";

// import NextTopLoader from "nextjs-toploader";
// import { ThemeProvider } from "next-themes";
// import { AuthDialogProvider } from "./context/AuthDialogContext";
// import SessionProviderComp from "./components/nextauth/SessionProvider";
// import Aoscompo from "./utils/aos";
// import ScrollToTop from "./components/ScrollToTop";
// import Header from "./components/Layout/Header";
// import Footer from "./components/Layout/Footer";

// export default function Providers({ children }) {
//   return (
//     <>
//       {/* ✅ MUST be inside body */}
//       <NextTopLoader
//         color="#3758F9"
//         height={3}
//         showSpinner={false}
//       />

//       <AuthDialogProvider>
//         <SessionProviderComp>
//           <ThemeProvider
//             attribute="class"
//             enableSystem
//             defaultTheme="system"
//           >
//             <Aoscompo>
//               <Header />
//               {children}
//               <Footer />
//             </Aoscompo>
//             <ScrollToTop />
//           </ThemeProvider>
//         </SessionProviderComp>
//       </AuthDialogProvider>
//     </>
//   );
// }


"use client";

import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "next-themes";
import { AuthDialogProvider } from "./context/AuthDialogContext";
import SessionProviderComp from "./components/nextauth/SessionProvider";
import Aoscompo from "./utils/aos";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

export default function Providers({ children }) {
  return (
    <>
      {/* Progress bar */}
      <NextTopLoader
        color="#3758F9"
        height={3}
        showSpinner={false}
      />

      <AuthDialogProvider>
        <SessionProviderComp>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Aoscompo>
              <Header />
              {children}
              <Footer />
            </Aoscompo>

            <ScrollToTop />
          </ThemeProvider>
        </SessionProviderComp>
      </AuthDialogProvider>
    </>
  );
}
