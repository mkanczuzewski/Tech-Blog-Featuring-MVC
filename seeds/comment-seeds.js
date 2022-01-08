const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', 
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        user_id: 2,
        post_id: 2
    },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;