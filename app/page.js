"use client";

import { usePage } from "@/context/PageContext";
import Page1 from "@/screens/Page1";
import Page2 from "@/screens/Page2";
import WelcomeScreen from "@/screens/WelcomeScreen";

export default function Home() {
  const { pageNumber, updatePageNumber } = usePage();

  return (
    <>
      {pageNumber === 0 && <WelcomeScreen />}
      {pageNumber === 1 && <Page1 />}
      {pageNumber === 2 && <Page2 />}
    </>
  );
}
