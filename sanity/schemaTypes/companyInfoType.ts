import { defineType, defineField } from "sanity";

export default defineType({
    name: "companyInformation",
    title: "Company Information",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Company Name",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "contactEmails",
            title: "Contact Emails",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "phones",
            title: "Phone Numbers",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "address",
            title: "Address",
            type: "string",
        }),
    ],
});
