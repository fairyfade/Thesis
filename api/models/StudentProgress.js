/**
 * StudentProgress.js
 *
 * A table holding  student progress information.
 */


module.exports = {
    userID: {
        model: 'users',
        required: true,
      },
    studentID: {
        model: 'student',
        required: false,

    },

    unit_number:{
        type: 'string',
        required: true,
    },
    lesson_number:{
        type: 'string',
        required: true,
    },
    sublesson_number:{
        type: 'string',
        required: true,
    },
    activity_number: {
        type: 'string',
        required: true,
    },
    type_curriculum:{
        type: 'string',
        required: true,
    },
    
    code: {
        type: 'string',
        required: false,
    },
    codeRuns: {  //true if the students code successfully runs 
        type: 'boolean',
        required: false,
    }
}