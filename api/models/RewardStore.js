/**
 * RewardStore.js
 *
 * A table holding  student reward store information.
 */


module.exports = {
    userID: {
        model: 'users',
        required: true,
      },
    studentID: {
        model: 'student',
        required: true,

    },
    points: {
        type: 'string',
        required: true,

    },

    character_file: {
        type: 'string',
        required: true,
    },
    pet_file: {
        type: 'string',
        required: true,
    },
    house_file: {
        type: 'string',
        required: true,
    },
   
}