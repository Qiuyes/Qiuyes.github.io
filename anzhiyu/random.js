var posts=["2025/04/07/hello-world/","2025/04/07/test01/","2025/04/08/test01 - 副本/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };