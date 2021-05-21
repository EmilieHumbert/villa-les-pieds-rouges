import React, { useCallback, useState } from "react";
import Image from "next/image";

import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ZoomImage({ description, image }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <div className="w-full h-80 sm:h-96 lg:h-80 xl:h-64">
        <Image
          alt={description}
          src={image}
          layout="fill"
          objectFit={isZoomed ? "contain" : "cover"}
        />
      </div>
    </ControlledZoom>
  );
}
