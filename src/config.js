//const serviceUrl = 'http://wind.zicp.net/v1/' //测试url
const serviceUrl = 'http://192.16.2.197:8889/v1/' //测试url


export default {
  initTab:'Home',
  loginUrl:serviceUrl,
  registerUrl: serviceUrl + 'register',
  accountUrl: serviceUrl + 'account',
  accountUserUrl: serviceUrl + 'account/user',
  accountSignUrl: serviceUrl + 'account/sign',
  fileUpload: serviceUrl + 'file/save',
  fileUrl: serviceUrl + 'file/',
  postsUrl: serviceUrl + 'article/posts',
  postUrl: serviceUrl + 'article/post/',
  test:'https://gist.githubusercontent.com/ScorpionJay/de11dc5bacefea9cee5394b73f456688/raw/e86fd421e4bce5c85dd87d29ddc7315ec1d33eed/list.json',
  user:'https://api.github.com/users/scorpionjay',
  followers:'https://api.github.com/users/scorpionjay/followers',

  pageSize:10,

  postListApi: serviceUrl + 'post/list/',
  postApi: serviceUrl + 'post/add/',

  postApiTest: serviceUrl + 'file/singleSave/',

  postApi2: serviceUrl + 'post/post/',

  postAll: serviceUrl +  'post/lists',

  thumbnailApi: serviceUrl + 'file/thumbnail/',//缩略图


  word:'WORD',
  picture:'PICTURE'

};