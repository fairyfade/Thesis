/**
 * SubLessonGuidedActivity.js
 *
 * A table holding sublesson written page information.
 */


module.exports = {
    attributes: {
      userID: {
        model: 'student',
        required: false,
      },
      unit_number: { //unit number
        model: 'unit',
        required: true,
      },
      lesson_number: {
        model: 'lesson',
        required: true,
      },
      sublesson_number:{ //sub-lesson number
        model: 'SubLesson',
        required: true,
      },
      number_activities:{ //number of activities
        type: 'string',
        required: true,
      },
      number_sublessons: { //number of sublessons
        type: 'string',
        required: true,
      },
      topic: { //the sub-lesson's topic explanation
        type: 'string',
        required: true,
      },
      url: { //video url for guided activity
        type: 'string',
        required: true,
      },
      trinket_url: { //url for the embedded trinket window
        type: 'string',
        required: true,
      },
      complete: { //true if the sub-lesson's completion rate is 100%
        type: 'boolean',
        required:true,
      },
    }
  };