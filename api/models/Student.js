/**
 * Student.js
 *
 * A table holding user information.
 */


module.exports = {
    attributes: {
      userID: {
        model: 'users',
        required: true,
      },
      studentUserID: {
        model: 'users'
      },
      firstName: { // First name
        type: 'string',
        required: true,
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
  