const convertLinks = (host, path, limit, page, totalPages) => {
  const link = {
    first: page === 1 ? '' : `http://${host}/${path}?limit=${limit}&page=1`,
    next: page === totalPages ? '' : `http://${host}/${path}?limit=${limit}&page=${Number(page) + 1}`,
    prev: page === 1 ? '' : `http://${host}/${path}?limit=${limit}&page=${Number(page) - 1}`,
    last: page === totalPages ? '' : `http://${host}/${path}?limit=${limit}&page=${totalPages}`,
  };
  return link;
};

module.exports = convertLinks;
