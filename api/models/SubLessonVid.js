/**
 * SubLessonVid.js
 *
 * A table holding sublesson video page information.
 */


module.exports = {
    attributes: {
      userID: {
        model: 'student',
        required: true,
      },
      sublesson_number:{ //sub-lesson number
        model: 'SubLesson',
        required: true
      },
      topic: { //the sub-lesson's topic explanation
        type: 'string',
        required: true,
      },
      url: { //url of the video
        type: 'string',
        required: true,
      },
      complete: { //true if the sub-lesson's completion rate is 100%
        type: 'boolean',
        required:true,
      },
    }
  };