import React from "react";
import { TiPencil } from "react-icons/ti";

import { colorList } from "../snippets";
const Button = (props) => {
  return <span>{props.label}</span>;
};

export default {
  name: "defaultRichText",
  type: "array",
  title: "Text",
  of: [
    {
      type: "block",
      title: "Block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
      ],
      marks: {
        decorators: [
          {
            title: "Hand",
            value: "hand",
            blockEditor: {
              icon: TiPencil,
            },
          },
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          {
            title: "Underline",
            value: "underline",
          },
          // {
          //   title: "Hand Underline",
          //   value: "handUnderline",
          // },
        ],
        annotations: [
          {
            name: "handUnderline",
            type: "object",
            title: "Hand Underline",
            fields: [
              {
                title: "Underline Color",
                name: "color",
                type: "string",
                options: {
                  list: [...colorList()],
                },
                initialValue: "black",
              },
            ],
            blockEditor: {
              icon: () => "Hand Underline",
              render: (props) => {
                return <span>{props.children}</span>;
              },
            },
          },
          {
            name: "tag",
            type: "object",
            title: "Tag",
            fields: [
              {
                title: "Tag",
                name: "tag",
                type: "string",
                options: {
                  list: [
                    { title: "Paragraph", value: "p" },
                    { title: "H1", value: "h1" },
                    { title: "H2", value: "h2" },
                    { title: "H3", value: "h3" },
                    { title: "H4", value: "h4" },
                    { title: "H5", value: "h5" },
                  ],
                },
                initialValue: "p",
              },
            ],
            blockEditor: {
              icon: () => "Tag",
              render: (props) => {
                return <span>{props.children}</span>;
              },
            },
          },
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [
              { title: "Link", name: "link", type: "link" },
              {
                title: "As Button",
                name: "asButton",
                type: "boolean",
              },
            ],
            blockEditor: {
              icon: () => "Link",
              render: (props) => {
                return (
                  <a style={{ textDecoration: "underline", color: "red" }}>
                    {props.children}
                  </a>
                );
              },
            },
          },
        ],
      },
    },
    {
      type: "image",
      fields: [
        {
          type: "text",
          name: "alt",
          title: "Alternative text",
          description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    { type: "button", blockEditor: { render: Button } },
    { type: "spacer" },
    { type: "imageGalleryPlug" },
    // { type: 'embed' },
    // { type: 'imagePlug' },
    // { type: 'seoHeader' },

    // { type: 'innerSection' },

    // { type: 'download' }
  ],
};