
module.exports = {
createProgress: async function(req, res) {
    try {
      const studentId = req.session.studentId;
      const unit_number = req.param('unit_number');
      const lesson_number = req.param('lesson_number');
      const activity_number = req.param('activity_number');
      const code = req.param('code');
      const codeRuns = req.param('codeRuns');

      if (!req.session.userId) { // Check if student is logged in
        return res.send({
          error: 'Student User not logged in'
        });
      }
      if (!unit_number || !lesson_number || !activity_number || !code  || !codeRuns) { // Missing required params
        return res.send({
          error: 'All fields required'
        });
      }
      if (unit_number === '' || lesson_number === '' || activity_number === '' || code === '' || codeRuns === '') { // Empty params
        return res.send({
          error: 'All fields required'
        });
      }
      const existingUnit = await StudentProgress.find({ // Check if Unit already exists
        or: [{unit_number: unit_number}]
      });
      if (existingUnit && existingUnit.length > 0) { // Return error if Unit already exists
        return res.send({
          error: 'Unit already exists'
        });
      }
     // const hash = await sails.helpers.passwords.hashPassword(password); // Hash password
      await StudentProgress.create({ // Create unit
        studentID: studentId,
        unit_number: unit_number,
        lesson_number: lesson_number,
        activity_number: activity_number,
        code: code,
        codeRuns: codeRuns,
    });
    return res.send({ // Return success
      success: true
    });
  } catch (error) {
    console.log(error);
  }
},
}