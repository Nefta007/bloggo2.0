const { Blog } = require('../models');
const blogData = [
    {
        "title": "Deployment trials",
        "description": "This will be a test, can you see me?",
        "user_id": 1
    },
    {
        "title": "Second Test",
        "description": "Hello this is the second test how are you?",
        "user_id": 2
    },
    {
        "title": "Third Test",
        "description": "Hi Hi Please let me know if you see me",
        "user_id": 3
    },
];

const seedBlog = () => Blog.bulkCreate(blogData);
module.exports = seedBlog;