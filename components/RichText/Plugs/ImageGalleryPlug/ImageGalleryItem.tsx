import React from "react";
import { ConditionalLink } from "@components/Link";
import Typo from "@components/Typography/Typography";
import { LinkResult } from "@lib/Navigation/query";
import SanityImage from "@lib/SanityImage";
import type { ImageMetaResult } from "@lib/SanityImage/query";
import { ImageGalleryPlugItem } from "./imageGalleryPlugQuery";
import clsx from "clsx";

interface ImageGalleryItemProps extends ImageGalleryPlugItem {
  textSize?: "s" | "m" | "l";
  className?: string;
  contain?: boolean;
  onClick?: () => void;
}

const ImageGalleryItem: React.FunctionComponent<ImageGalleryItemProps> = (
  props
) => {
  const {
    image,
    title,
    text,
    link,
    className,
    contain = false,
    textSize = "m",
    onClick = () => {},
  } = props;

  const hasOverlay = title || text;

  return (
    <>
      <li
        onClick={onClick}
        className={`${className} relative  overflow-hidden  group`}
      >
        <SanityImage image={image} objectFit={contain ? "contain" : "cover"} />

        {hasOverlay && (
          <div className="absolute inset-0 transition-opacity opacity-0 bg-white backdrop-blur-md bg-opacity-25  group-hover:opacity-100  p-8">
            <div className=" -translate-x-full -translate-y-full transition-transform  group-hover:translate-x-0  group-hover:translate-y-0 ">
              <p
                className={clsx(" font-bold  ", {
                  "text-[16px]": textSize === "s",
                  "text-[18px]": textSize === "m",
                  "text-[20px]": textSize === "l",
                })}
              >
                {title}
              </p>
              <p
                className={clsx("  whitespace-pre-line break-words", {
                  "text-[14px]": textSize === "s",
                  "text-[16px]": textSize === "m",
                  "text-[18px]": textSize === "l",
                })}
              >
                {text}
              </p>
            </div>
          </div>
        )}
      </li>
    </>
  );
};

export default ImageGalleryItem;
