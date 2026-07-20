import Image from "next/image";
import { Tab } from "@headlessui/react";
import React from "react";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/public/types";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({
  image,
}) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <>
          <div className="relative h-full w-full aspect-square overflow-hidden rounded-md">
            <Image
              fill
              sizes="100px"
              src={image.url}
              alt="Product image"
              className="object-cover object-center"
            />
          </div>

          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected
                ? "ring-black"
                : "ring-transparent"
            )}
          />
        </>
      )}
    </Tab>
  );
};

export default GalleryTab;