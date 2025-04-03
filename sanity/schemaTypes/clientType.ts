import { defineType } from 'sanity';

export default defineType({
    name: 'client',
    title: 'Client',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required().error('Client name is required'),
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required().error('Client logo is required'),
        },
    ],
});