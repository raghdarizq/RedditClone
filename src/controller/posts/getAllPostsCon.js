const { getAllPostsQuery } = require('../../database/query')

const getAllPostsCon = (req, res) => {
  getAllPostsQuery().then((data) => {
    res.json({
      error: false,
      data: data.rows,
    });
  });  
};

module.exports = getAllPostsCon;
