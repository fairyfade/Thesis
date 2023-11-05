/**
 * SubLessonActivity.js
 *
 * A table holding sublesson activity information.
 */


module.exports = {
    attributes: {
      userID: {
        model: 'student',
        required: false,
      },
      unit_number:{
        model: 'Unit',
        required: true,
      },
      lesson_number:{
        model: 'Lesson',
        required: true,
      },
      sublesson_number:{ //sub-lesson number
        model: 'SubLesson',
        required: true
      },
      activity_number: {//activity number
        type: 'string',
        required: true,
      },
      topic: { //the sub-lesson's topic explanation
        type: 'string',
        required: true,
      },
      url: { //video url for activity
        type: 'string',
        required: true,
      },
      complete: { //true if the sub-lesson's completion rate is 100%
        type: 'boolean',
        required:true,
      },
      attempts: { //atempts at this activity
        type: 'string',
        required: true,
      },
      timeSpent: { //time spent on this activity 
        type: 'string',
        required: true,
      }
    }
  };