/*CurriculumController.js

*/
module.exports = {
/* Brainstorming useful functions
   1. Need to fetch Unit information as well as update it
   2. Need to fetch Lesson information as well as update it
   3. Need to fetch Sublesson information as well as update it
   4. Need to fecth different parts of the sublesson as well as update it (ie actvity, vid, guided activity, written activity)
   5. Need to fetch Unit quiz information as well as update it
   6. Need to fecth unit challenge information as well as update it
   7. Need to fetch unit review information as well as update it
*/
    /*
    Create a new Unit.
    @param {string} userID
    @param {string} unit_number
    @param {string} topic
    @param {string} total_num_lessons
    @param {string} completion_rate
    @returns {boolean} complete
  */
    createUnit: async function(req, res) {
        try {
          const userId = req.session.userId;
          const unit_number = req.param('unit_number');
          const topic = req.param('topic');
          const total_num_lessons = req.param('total_num_lessons');
          const completion_rate = req.param('completion_rate');
          const complete = req.param('complete');
          if (!req.session.userId) { // Check if student is logged in
            return res.send({
              error: 'Student User not logged in'
            });
          }
          if (!unit_number || !topic || !total_num_lessons || !completion_rate || !complete) { // Missing required params
            return res.send({
              error: 'All fields required'
            });
          }
          if (unit_number === '' || topic === '' || total_num_lessons === '' || completion_rate === '' || complete === '') { // Empty params
            return res.send({
              error: 'All fields required'
            });
          }
          const existingUnit = await Unit.find({ // Check if Unit already exists
            or: [{unit_number: unit_number}]
          });
          if (existingUnit && existingUnit.length > 0) { // Return error if Unit already exists
            return res.send({
              error: 'Unit already exists'
            });
          }
         // const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
          await Unit.create({ // Create unit
            userID: userId,
            unit_number: unit_number,
            topic: topic,
            total_num_lessons: total_num_lessons,
            completion_rate: completion_rate,
            complete: complete,
        });
        return res.send({ // Return success
          success: true
        });
      } catch (error) {
        console.log(error);
      }
    },

}