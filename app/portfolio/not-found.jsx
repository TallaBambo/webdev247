"use client";

import { usePathname } from "next/navigation";
import HeroDetail from "../_components/HeroDetail";

function NotFound() {
  const pathname = usePathname();

  return (
    <HeroDetail
      title="Project not found"
      description={`No project was found at the url "${pathname}".`}
      imageUrl="error-image.jpg"
      action="Back to portfolio"
      target="/portfolio"
      icon="fa-solid fa-briefcase"
    />
  );
}

export default NotFound;
