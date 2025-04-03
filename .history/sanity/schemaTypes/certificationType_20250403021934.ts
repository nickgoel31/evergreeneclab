import { defineField, defineType } from "sanity";

export default defineType({
    name: "certification",
    title: "Certification",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "logo",
            title: "Logo",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "issuedBy",
            title: "Issued By",
            type: "string",
        }),
        defineField({
            name: "validUntil",
            title: "Valid Until",
            type: "date",
            options: {
                dateFormat: "YYYY-MM-DD",
            },
        }),
        defineField({
            name: "viewLink",
            title: "View Link",
            type: "url",
        }),
    ],
});