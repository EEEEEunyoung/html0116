const keyword = document.querySelector("#keyword");
//input textfield에 입력한 후 엔터 쳤을 때를 잡아내는 함수
keyword.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
  console.log("onkeypress가 엔터인지? 아닌지" + event.keyCode);
  //사용자가 입력한 검색어를 찾는 함수 호출
  handleSearch();
}
});
//사용자가 입력한 검색어 읽어오기
const handleSearch = () => {
  const user = document.querySelector("#keyword").value;
  console.log("사용자가 입력한 검색어 ===> " + user);
  search(user);
};

//아니 그냥 video로 받아와서 구조분해 해서 사용하면 안되나?
//리액트에서는 가능함. 바닐라에서는 불가 덩어리(item)로 받아오기
let videoItem;
const videoShow=(id, title, description, channelTitle)=>{
// console.log("videoShow id :" + id + ","+title +","+description+","+channelTitle );
videoItem =`
<section class="detail">
<iframe id="player" type="text/html" width="640" height="500"
  src="http://www.youtube.com/embed/${id}"
  frameborder="0"></iframe>
  <h2>${title}</h2>
  <h3>${channelTitle}</h3>
  <pre class = "pre">
  ${description}
  </pre>
  <div>
  <a href="./youtube.html"> 이전페이지</a>
  &nbsp;
  <a href="javascript:search('손흥민')"> 이전페이지2</a>
  </div>
  </section>
`;
document.querySelector("#root").innerHTML = videoItem;
}


//사용자가 입력한 검색어로 조건 검색 구현하기
const search = (query) => {
  console.log("사용자가 입력한 bts 받음 : " + query);

  const ajax = new XMLHttpRequest();
  const videoList = [];
  const key = "AIzaSyCAQ5IRU2eOCxFb4fcpeioQVdf56_9u3WY";
  const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${key}`;

  ajax.open("GET", SEARCH_URL, false);
  ajax.send();

  const most = JSON.parse(ajax.response);
  const items = most.items;
  let items2;
  items2=most.items.map((item)=>(   //펑션안에는 파라미터 3가지가 올 수 있음 index, 배열 생략가능 배열은 다른이름으로 치환도 가능
    {...item, id:item.id.videoId}  ));
console.log(items2);
  console.log(items);
  console.log(items.length); //25
  //자바 스크립트에서는 파라미터로 값을 넘길 때 반드시 싱글쿼테이션 또는 더블쿼테이션을 붙여야 값으로 인정됨
  //만일 붙이지 않으면 XXX is not defined 라고 뜬다.  - 결론은 변수 취급이다. 
  //비디오 제목의 경우 특수문자(괄호문제) 배제하는 정규식 이용하기 
  videoList.push(`<ul class="videos">`);
  items2.map((video)=>{
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    const str =video.snippet.title.replace(reg,"");
    const str2 =video.snippet.description.replace(reg,"");

    videoList.push(`<li class="container" onclick="videoShow('${video.id}', '${str}', '${str2}', '${video.snippet.channelTitle}')">`);
    videoList.push(`<div class="video">`);
    videoList.push(
      `<img class="thumbnail" src='${video.snippet.thumbnails.medium.url}'/>`
    );
    videoList.push(`<div>`);
    videoList.push(`<p class="title">${video.snippet.title}</p>`);
    videoList.push(
      `<p class="channelTitle">${video.snippet.channelTitle}</p>`
    );
    videoList.push(`</div>`);
    videoList.push(`</div>`);
    videoList.push(`</li>`);
  })  //end of map
  videoList.push(`</ul>`);
  document.querySelector("#root").innerHTML = videoList.join("");
  };

