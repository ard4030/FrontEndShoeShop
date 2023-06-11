import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export const useNavigationEvent = (onPathnameChange) => {
  const router = useRouter();

  // Save pathname on component mount into a REF
  const savedPathNameRef = useRef(router.pathname);

  useEffect(() => {
    // If REF has been changed, do the stuff
    if (savedPathNameRef.current !== router.pathname) {
      onPathnameChange();
      // Update REF
      savedPathNameRef.current = router.pathname;
    }
  }, [router.pathname, onPathnameChange]);
};