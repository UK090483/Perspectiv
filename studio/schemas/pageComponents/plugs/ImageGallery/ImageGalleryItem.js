export default {
  title: "Image Gallery Item",
  name: "imageGalleryItem",
  type: "object",

  fields: [
    { name: "title", title: "title", type: "string" },
    { name: "text", title: "Text", type: "text" },

    { name: "image", title: "Image", type: "defaultImage" },

    // { name: "link", title: "Link", type: "link" },

    {
      title: "Variant",
      name: "variant",
      type: "string",
      options: {
        list: [
          { title: "Contain", value: "contain" },
          { title: "Cover", value: "cover" },
        ],
      },
    },

    {
      name: "size",
      title: "Size",
      type: "string",
      initialValue: "m",
      options: {
        list: ["m", "l"],
      },
    },
  ],
  preview: {
    select: {
      name: "title",
      image: "image",
    },
    prepare({ name, image }) {
      return {
        title: name || "untitled",
        media: image,
      };
    },
  },
};
