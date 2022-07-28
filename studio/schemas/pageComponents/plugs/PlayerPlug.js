import React from "react";
// import ReactPlayer from "react-player";

const Player = (props) => {
  if (!props?.value?.url) return <span>{"no url"}</span>;
  // return <ReactPlayer url={props?.value?.url} />;

  return <div>bla</div>;
};

export default {
  title: "Player",
  name: "playerPlug",
  type: "object",

  fields: [
    {
      type: "url",
      title: "Url",
      name: "url",
    },
    {
      type: "array",
      title: "Urls",
      name: "urls",

      of: [
        {
          type: "object",
          fields: [
            { title: "Title", type: "string", name: "title" },
            {
              type: "url",
              title: "Url",
              name: "url",
              validation: (Rule) => Rule.required(),
            },
            {
              type: "defaultImage",
              title: "Alternative Preview Image",
              name: "image",
            },
          ],
          preview: {
            select: {
              url: "url",
              media: "image",
              title: "title",
            },
            prepare({ url, media, title }) {
              return {
                title: title || url,
                media,
              };
            },
          },
        },
      ],
    },
  ],
  // preview: {
  //   select: {
  //     url: "url",
  //   },
  //   component: Player,
  // },
  preview: {
    select: {
      url: "url",
    },
    prepare({ url }) {
      return {
        title: url || "(url missing)",
      };
    },
  },
};
