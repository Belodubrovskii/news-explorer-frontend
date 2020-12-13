const currentDate = new Date();
const currentDateStr = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
const timestamp = currentDate.getTime();
const timestampWeek = 7 * 24 * 3600 * 1000;
const previousDate = new Date(timestamp - timestampWeek);
const previousDateStr = `${previousDate.getFullYear()}-${previousDate.getMonth() + 1}-${previousDate.getDate()}`;

const baseUrl = `https://newsapi.org/v2/everything?from=${previousDateStr}&to=${currentDateStr}&
pageSize=100&apiKey=a5853b2aade748f0972bd65b419d4199`;

const getNews = (keywords) => fetch(`${baseUrl}&q=${keywords}`)
  .then((res) => res.json())
  .then((res) => {
    if (res.message) {
      return Promise.reject(res.message);
    }
    return res;
  });

export { getNews as default };
