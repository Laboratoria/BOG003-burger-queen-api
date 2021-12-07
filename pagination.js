const pagination = async (req, res, model) => {
  const { page = 1, limit = 10 } = req.query;
  await model.find();
  try {
    const posts = await model.find()
      .limit(limit * 1)
      .skip((page - 1) * 1)
      .exec();
    const count = await model.countDocuments();
    res.json({
      posts,
      totalDocuments: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = pagination;
