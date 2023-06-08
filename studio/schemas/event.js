// schema.js

export default {
    name: 'event',
    type: 'document',
    title: 'Event',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            name: 'imgUrl',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true, // Enable hotspot for image positioning
            },
        },
        {
            name: 'info',
            type: 'text',
            title: 'Info',
        },
        {
            name: 'genres',
            type: 'string',
            title: 'Genres',
        },
    ],
};
