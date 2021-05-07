import Image from "next/image";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useTranslation } from "next-i18next";

export default function PlansFloor({ activeState: [active] }) {
  const floorNames = ["Ground", "First", "Second"];
  const { t } = useTranslation("plans");

  return (
    <>
      <h1 className="border-b-2 border-red-900 font-bold mb-8 mt-8 text-2xl">
        {t("floor-title")}
      </h1>
      <div className="col-span-2 content">
        <Zoom>
          <Image
            alt={`${floorNames[active]} floor plan`}
            src={`/images/plan-${floorNames[active].toLowerCase()}-floor.jpg`}
            width={1440}
            height={1018}
          />
        </Zoom>
      </div>
    </>
  );
}
