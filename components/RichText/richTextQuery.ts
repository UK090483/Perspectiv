import { linkMarkQuery } from "./marks/link";
import autoGalleryPlugQuery from "./Plugs/AutoGalleryPlug/AutoGalleryPlugQuery";
import eventPlugQuery from "./Plugs/EventPlug/EventPlugQuery";
import { imageGalleryPlugQuery } from "./Plugs/ImageGalleryPlug/imageGalleryPlugQuery";
import { ImagePlugQuery } from "./Plugs/ImagePlug/imagePlugQuery";
import { playerPlugQuery } from "./Plugs/PlayerPlug/playerPlugQuery";
import { spacerPlugQuery } from "./Plugs/Spacer";

const marksQuery = `
markDefs[]{
  ...,
  ${linkMarkQuery},
}
`;
export const richTextQuery = (locale: string = "") => {
  return `
  ...,
  ${marksQuery},
  ${spacerPlugQuery},
  ${imageGalleryPlugQuery},
  ${ImagePlugQuery},
  ${eventPlugQuery(locale)},
  ${autoGalleryPlugQuery},
  ${playerPlugQuery},
`;
};

export const richTextQueryShort = (locale: string = "") => `
  ...,
  ${marksQuery},
`;
