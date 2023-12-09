/**
 * ActivityAnswer.js
 *
 * A table holding sublesson activity answer information.
 */


module.exports = {
    attributes: {
      userID: {
        model: 'student',
        required: false,
      },
      unit_number: {
        model: 'Unit',
        required: true,
      },
      lesson_number: {
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
      number_sublessons: { //number of sublessons
        type: 'string',
        required: true,
      },
      number_activities: { //number of activities
        type: 'string',
        required: true,
      },
      number_lessons: { //number of lessons
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
      trinket_url: { //trinket url 
        type: 'string',
        required: true,
      },
      complete: { //true if the sub-lesson's completion rate is 100%
        type: 'boolean',
        required:true,
      },
    }
  };