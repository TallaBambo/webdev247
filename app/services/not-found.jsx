"use client";

import { usePathname } from "next/navigation";
import HeroDetail from "../_components/HeroDetail";

function NotFound() {
  const pathname = usePathname();

  return (
    <HeroDetail
      title="Service not found"
      description={`No service was found with the url "${pathname}".`}
      imageUrl="error-image.jpg"
      action="Back to all services"
      target="/services"
      icon="fa-solid fa-gears"
    />
  );
}

export default NotFound;
