import { defineField, defineType } from "sanity";

export const eventType = defineType({
    name: "eventType",
    title: "Event Type",
    type: "document",
    fields: [
        defineField({
        name: "name",
        title: "Name",
        type: "string",
        }),
        defineField({
        name: "description",
        title: "Description",
        type: "text",
        }),
        defineField({
        name: "icon",
        title: "Icon",
        type: "image",
        }),
    ],
})