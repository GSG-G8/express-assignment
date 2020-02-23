const postContainer = document.getElementsByClassName('post-container')[0];
const postBtn = document.getElementsByClassName('entry-container-btn')[0];
const postText = document.getElementsByClassName('entry-container-textarea')[0];

const displayPosts = (posts) => {
  postContainer.textContent = '';
  posts.forEach((element) => {
    const postDiv = document.createElement('div');
    const postText = document.createElement('p');
    const thumbnail = document.createElement('img');

    thumbnail.src = './img/logo.jpg';
    thumbnail.className = 'thumbnail';
    postText.textContent = element;
    postDiv.className = 'post';
    postText.className = 'post-text';

    postDiv.appendChild(thumbnail);
    postDiv.appendChild(postText);
    postContainer.appendChild(postDiv);
  });
};
const displayEmptyPosts = () => {
  displayPosts(['no one has made a post yet, make the first one!']);
};

const displayErr = (status, text) => {
  if (status === 404) window.location.href = '/404.html';
  else window.location.href = '/500.html';
};

const makePost = (endpoint, data) => {
  postReq(endpoint, data)
    .then((res) => {
      if (res.status === 200) return res.json();
      displayErr(res.status, res.statusText);
    }).then((res) => displayPosts(Object.values(res))).catch(console.log);
};

getReq('/posts')
  .then((res) => {
    if (res.status === 200) return res.json();
    displayErr(res.status, res.statusText);
  })
  .then((postsObj) => {
    const posts = Object.values(postsObj);
    if (posts.length === 0) displayEmptyPosts();
    else displayPosts(posts);
  })
  .catch((err) => console.log(err));

postBtn.addEventListener('click', () => { makePost('/create-post', postText.value); postText.value = ''; });
