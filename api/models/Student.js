/**
 * Student.js
 *
 * A table holding user information.
 */


module.exports = {
    attributes: {
      firstName: { // First name
        type: 'string',
        required: true,
      },
      userID: {
        model: 'users',
        required: false,
      },
      lastName: { // Last name
        type: 'string',
        required: true,
      },
      username: { // Username
        type: 'string',
        required: true,
      },
      password: { // Password
        type: 'string',
        required: true,
      },

    }
  };
  