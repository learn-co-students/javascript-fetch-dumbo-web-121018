const token = '73f7c53bcb67f6a1b15ca384c047a668990fe2ba';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
