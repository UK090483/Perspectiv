import { linkQuery, LinkResult } from "@lib/Navigation/query";
import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";

export const imageGalleryPlugQuery = `
_type == "imageGalleryPlug" => {
   ...,
  _type,
  _key,
  'items':items[]{
    ...,
    'image': image{${imageMeta}},
    'link':link{
      ${linkQuery()}
    }  
  },
  rows,
  rows_mobile,
  ratio,
  lightBox
}
`;

type variant = "cover" | "contain";

export interface ImageGalleryPlugItem {
  _type: "imageGalleryItem";
  title?: string | null;
  text?: string | null;
  size?: "m" | "l";
  image?: ImageMetaResult;
  variant?: variant | null;
  link?: LinkResult;
  contain?: boolean;
  _key: string;
}

export interface ImageGalleryPlugResult {
  _type: "imageGalleryPlug";
  variant?: variant | null;
  name?: string;
  rows?: number;
  rows_mobile?: number;
  ratio?: "1:1" | "16:9" | "2:3" | "3:2";
  items: ImageGalleryPlugItem[];
  lightBox?: boolean | null;
}
