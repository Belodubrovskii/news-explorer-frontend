const BASE_URL = 'https://api.news-db.students.nomoreparties.co';

export const register = ({ password, email, name }) => fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ password, email, name }),
})
  .then((res) => res.json())
  .then((res) => {
    if (res.message) {
      return Promise.reject(res);
    }
    return res;
  })
  .catch((err) => {
    throw err;
  });

export const authorize = ({ password, email }) => fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ password, email }),
})
  .then(((res) => res.json()))
  .then((res) => {
    if (res.token) {
      localStorage.setItem('jwt', res.token);
      return res;
    }
    return Promise.reject(res);
  })
  .catch((err) => {
    throw err;
  });

export const isTokenValid = (token) => fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  },
})
  .then((res) => res.json())
  .then((res) => {
    if (res.message) {
      return Promise.reject(res);
    }
    return res;
  });

export const saveArticle = ({
  keyword, title, text, date, source, link, image,
}) => fetch(`${BASE_URL}/articles`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
  body: JSON.stringify({
    keyword, title, text, date, source, link, image,
  }),
})
  .then((res) => res.json())
  .then((res) => {
    if (res.message) {
      return Promise.reject(res);
    }
    return res;
  })
  .catch((err) => {
    throw err;
  });

export const deleteArticle = (id) => fetch(`${BASE_URL}/articles/${id}`, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
})
  .then((res) => res.json())
  .then((res) => {
    if (res.message === 'Статья удалена') {
      return res;
    }
    return Promise.reject(res);
  })
  .catch((err) => {
    throw err;
  });

export const getSavedNews = () => fetch(`${BASE_URL}/articles`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
})
  .then((res) => res.json())
  .then((res) => {
    if (res.message) {
      return Promise.reject(res);
    }
    return res;
  })
  .catch((err) => {
    throw err;
  });
