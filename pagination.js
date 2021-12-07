const convertLinks = require('./links');

const pagination = async (req, res, model, path) => {
  const { page = Number(1), limit = Number(10) } = req.query;
  const { host } = req.headers;
  await model.find();
  try {
    const posts = await model.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await model.countDocuments();
    const results = {
      posts,
      totalDocuments: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    };
    if (page - 1 > 0) {
      results.previous = {
        page: page - 1,
        limit,
      };
    }
    if (page * limit < count) {
      results.next = {
        page: page + 1,
        limit,
      };
    }
    const link = convertLinks(host, path, limit, page, results.totalPages);
    res.set('Link', JSON.stringify(link));
    res.json(results);
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = pagination;
