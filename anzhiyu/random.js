var posts=["2025/04/07/hello-world/","2025/04/07/test01/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };