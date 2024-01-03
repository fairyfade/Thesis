/**
 * Link.js
 *
 * A table holding link information
 * 
 * holds info useful for calculating where to go next in the curriculum 
 */


module.exports = {
    attributes: {

      curr_unit: { // Current Unit that the student is in 
        type: 'string',
        required: true,
      },
      unit_intro: { //Are we on the unit intro page? 
        type: 'boolean',
        required: true,
    },
      curr_lesson: {  // Current Lesson that the student is in 
        type: 'string',
        required: true,
      },
      lesson_intro: { //Are we on the lesson intro page? 
        type: 'boolean',
        required: true,
    },
      curr_sublesson: { // Current sublesson that the student is in 
        type: 'string',
        required: true,
      },
      sublesson_vid: { //are we on the sublesson vid page? 
        type: 'boolean',
        required: true,
      },
      sublesson_guided_activity: { //are we on the guided activity page?
        type: 'boolean',
        required: true,
      },
      curr_activity: { //Current activity that we're on 
        type: 'string',
        required: true,
      },
      activity_answer: { //are we on the activity answer page? 
        type: 'boolean',
        required: true,
      },
      unit_review: { //are we on the unit review page? 
        type: 'boolean',
        required: true,
      },
      unit_quiz: { //are we on the unit quiz page? 
        type: 'boolean',
        required: true,
      },
      unit_challenge: { //are we on the unit challenge page? 
        type: 'boolean',
        required: true,
      },
      total_units: { //total number of units
        type: 'string',
        required: true,
      },
      total_lessons: { //total number of lessons
        type: 'string',
        required: true,
      },
      total_sublessons: { //total number of sublessons
        type: 'string',
        required: true,
      },
      total_guided_act: { //total number of guided activities
        type: 'string',
        required: true,
      },
      total_activities: { //total number of activities
        type: 'string',
        required: true,
      },

    }
  };
  