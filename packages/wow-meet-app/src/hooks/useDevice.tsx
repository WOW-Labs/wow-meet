import { useEffect, useState } from "react";

type ViewportType = "MOBILE" | "TABLET" | "PC";

const getViewportType = (width: number): ViewportType => {
  if (width <= 500) {
    return "MOBILE";
  } else if (width <= 768) {
    return "TABLET";
  } else {
    return "PC";
  }
};

/**
 * 뷰포트 리사이징 이벤트에 따라, 현재 뷰포트가 어떤 디바이스에 맞추어져있는지 반환하는 훅
 */
export const useDevice = (): ViewportType => {
  const [viewportType, setViewportType] = useState<ViewportType>(() =>
    getViewportType(1440)
  );

  useEffect(() => {
    if (window) {
      const handleResize = () => {
        setViewportType(getViewportType(window.innerWidth));
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return viewportType;
};
