const getReq = (endpoint) => fetch(endpoint);

const postReq = (endpoint, data) => fetch(endpoint, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ post: data }),
});
