// Require and initialize outside of your main handler
const mysql = require('serverless-mysql')({
  config: {
    host     : process.env.RDS_HOSTNAME,
    database : process.env.RDS_DB,
    user     : process.env.RDS_USERNAME,
    password : process.env.RDS_PASSWORD
  }
})

// Main handler function
exports.handler = async (event, context) => {
  // Create pagelike table
  //let results = await mysql.query('CREATE TABLE pagelike (id INT AUTO_INCREMENT PRIMARY KEY, pagename VARCHAR(255), pagegroup VARCHAR(255), likecount INT);')
  
  // Insert rows into pagelike table
  
  var sql = "INSERT INTO pagelike (pagename, pagegroup, likecount) VALUES ?";

  // Insert blog page names into pagelike table
  var values = [
  //   ['a-big-mistake-about-learning', 'blog', 0],
  //   ['a-time-to-reflect', 'blog', 0],
  //   ['almost-likable', 'blog', 0],
  //   ['beyond-training', 'blog', 0],
  //   ['birmingham-meetup-18062019', 'blog', 0],
  //   ['blast-off-from-the-past', 'blog', 0],
  //   ['continuous-curiosity', 'blog', 0],
  //   ['continuous-learning-initiatives-learning-vehicles', 'blog', 0],
  //   ['continuous-learning-initiatives-technical-communities', 'blog', 0],
  //   ['crazy-busy', 'blog', 0],
  //   ['how-does-a-successful-manager-act', 'blog', 0],
  //   ['opening-new-doors-to-new-possibilities', 'blog', 0],
  //   ['out-learn-the-competition', 'blog', 0],
  //   ['overcoming-obstacles-to-build-a-learning-culture', 'blog', 0],
  //   ['pluralsight-live-europe-2019', 'blog', 0],
  //   ['prologue', 'blog', 0],
  //   ['rising-to-the-challenge-of-continuous-learning', 'blog', 0],
  //   ['starters-and-finishers', 'blog', 0],
  //   ['the-continuous-learning-dilemma', 'blog', 0],
  //   ['wanting-to-be-liked', 'blog', 0],
  //   ['arriving-at-destination-on-cloud', 'blog', 0],
  //   ['capability-smells', 'blog', 0],
  //   ['building-people-then-products', 'blog', 0],
  //   ['wall-of-champions', 'blog', 0],
  //   ['frozen-in-time', 'blog', 0],
  //   ['creativity-on-demand', 'blog', 0],
  //   ['progress-metrics', 'blog', 0],
  //   ['two-customers', 'blog', 0],
  //   ['driving-strategic-learning', 'blog', 0],
  //   ['forced-to-change', 'blog', 0],
  //   ['31-designing-for-time-travel', 'blog', 0],
  //   ['32-designing-for-traceability', 'blog', 0],
  //   ['33-observing-the-invisible', 'blog', 0],
  //   ['34-defect-analysis', 'blog', 0],
  //   ['35-spicing-up-sprint-reviews', 'blog', 0]
  
];
  //let output = await mysql.query(sql, [values])
  
  // Delete page xxx
  // var sqlDelete = "DELETE FROM pagelike WHERE pagename = 'xxx';"
  // let output = await mysql.query(sqlDelete, [values])
  
  // Insert personal learning trick page names into pagelike table
   var values = [
  //   ['01-decide-what-to-learn', 'personal', 0],
  //   ['02-make-time-for-personal-learning', 'personal', 0],
  //   ['03-hide-away-change-the-scenery', 'personal', 0],
  //   ['04-avoid-distractions-and-occasional-interruptions', 'personal', 0],
  //   ['05-create-a-personal-development-plan', 'personal', 0],
  //   ['06-learn-to-manage-your-time-well', 'personal', 0],
  //   ['07-find-ways-of-learning-that-work-for-you', 'personal', 0],
  //   ['08-join-a-community', 'personal', 0],
  //   ['09-join-a-mailing-list', 'personal', 0],
  //   ['10-stop-procrastinating', 'personal', 0],
  //   ['11-xxx', 'personal', 0]
];
  // let output = await mysql.query(sql, [values])
  
  // // Insert corporate learning trick page names into pagelike table
  // var values = [
  //   ['01-technical-skills-are-strategic', 'corporate', 0],
  //   ['02-make-time-for-corporate-learning', 'corporate', 0]
  // ];
  // let output2 = await mysql.query(sql, [values])
  
  // list page names and like counts
  let results = await mysql.query("select pagename, pagegroup, likecount from pagelike order by pagegroup, pagename;")

  // Run clean up function
  await mysql.end()

  // Return the results
  return results
}
