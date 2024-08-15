"use client";

import { usePage } from "@/context/PageContext";
import Page1 from "@/screens/Page1";
import Page2 from "@/screens/Page2";
// import Page3 from "@/screens/page3";
import Page4 from "@/screens/Page4";
import Page5 from "@/screens/Page5";
import Page6 from "@/screens/Page6";
import Page7 from "@/screens/Page7";
import Page8 from "@/screens/Page8";
import Page9 from "@/screens/Page9";
import WelcomeScreen from "@/screens/WelcomeScreen";

export default function Home() {
  const { pageNumber, updatePageNumber } = usePage();

  return (
    <main className="flex-1 flex">
      {pageNumber === 0 && <WelcomeScreen />}
      {pageNumber === 1 && <Page1 />}
      {pageNumber === 2 && <Page2 />}
      {/* {pageNumber === 3 && <Page3 />} */}
      {pageNumber === 4 && <Page4 />}
      {pageNumber === 5 && <Page5 />}
      {pageNumber === 6 && <Page6 />}
      {pageNumber === 7 && <Page7 />}
      {pageNumber === 8 && <Page8 />}
      {pageNumber === 9 && <Page9 />}
    </main>
  );
}
