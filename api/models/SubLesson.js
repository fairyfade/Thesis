/**
 * SubLesson.js
 *
 * A table holding sublesson information.
 */


module.exports = {
    attributes: {
      userID: {
        model: 'student',
        required: true,
      },
      lesson_number:{ //lesson number
        model: 'lesson',
        required: true
      },
      sublesson_number: { //sublesson number 
        type: 'string',
        required: true,
      },
      topic: { //the sub-lesson's topic explanation
        type: 'string',
        required: true,
      },
      total_activities: { //the total number of activities in the lesson
        type: 'string',
        required: true,
      },
      completion_rate: { // the percentage of overall activities completed in the sub-lesson
        type: 'string',
        required: true,
      },
      complete: { //true if the sub-lesson's completion rate is 100%
        type: 'boolean',
        required:true,
      },
    }
  };