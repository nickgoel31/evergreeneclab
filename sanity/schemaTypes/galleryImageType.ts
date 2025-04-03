import { defineType } from 'sanity';

export default defineType({
    name: 'galleryImage',
    title: 'Gallery Image',
    type: 'document',
    fields: [
        {
            name: 'src',
            title: 'Image Source',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Alternative text for the image',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            description: 'Category of the image',
        },
    ],
});