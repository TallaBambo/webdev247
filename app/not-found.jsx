"use client";

import { usePathname } from "next/navigation";
import HeroDetail from "./_components/HeroDetail";

function NotFound() {
  const pathname = usePathname();

  return (
    <HeroDetail
      title="Page not found"
      description={`No page was found with the url "${pathname}". Coming up soon!`}
      imageUrl="error-image.jpg"
      action="Back to home page"
      target="/"
      icon="fa-solid fa-house"
    />
  );
}

export default NotFound;
