const { Post } = require('../models');

const postData = [
    {
        title: 'Post number one title',
        post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1,
    },
    {
        title: 'Post number two title',
        post_text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        user_id: 2,
    },

]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;



