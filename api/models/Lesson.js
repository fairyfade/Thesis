/**
 * Lesson.js
 *
 * A table holding lesson information.
 */


module.exports = {
    attributes: {
      userID: {
        model: 'student',
        required: true,
      },
      unit_number: { //unit number
        model: 'unit',
        required: true,
      },
      lesson_number:{ //lesson number
        type: 'string',
        required: true
      },
      topic: { //the lesson's topic explanation
        type: 'string',
        required: true,
      },
      total_num_sub_lessons: { //the total number of sub-lessons in the lesson
        type: 'string',
        required: true,
      },
      completion_rate: { // the percentage of overall sub-lessons completed in the lesson
        type: 'string',
        required: true,
      },
      complete: { //true if the lesson's completion rate is 100%
        type: 'boolean',
        required:true,
      },
    }
  };