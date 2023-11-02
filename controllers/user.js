const { response, request } = require('express');

const getUser = (req = request, res = response) => {
  const { q, name, apikey, page = 1, limit = 20 } = req.query;
  if (!name) {
    return res.status(400).json({ msg: 'name is required' });
  }
  res.json({ msg: 'get API!', q, name, apikey, page, limit });
};

const updateUser = (req = request, res = response) => {
  const { id } = req.params;
  res.status(400).json({ msg: 'put API!', id });
};

const patchUser = (req, res = response) => {
  res.json({ msg: 'patch API!' });
};

const postUser = (req = request, res = response) => {
  const { name, age } = req.body;
  res.status(201).json({ msg: 'post API!', name, age });
};

const deleteUser = (req, res = response) => {
  res.json({ msg: 'delete API!' });
};

module.exports = {
  getUser,
  updateUser,
  patchUser,
  postUser,
  deleteUser,
};
