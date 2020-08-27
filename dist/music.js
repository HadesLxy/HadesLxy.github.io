const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	  {
        name: '在名为未来的波浪里',
        artist: '原子邦妮',
        url: 'http://music.163.com/song/media/outer/url?id=1412645076.mp3',
        cover: '/assets/02.jpg',
      },
      {
        name: "等什么君-赤伶(弹鼓版)（南柯一梦 / 明洋 remix）",
        artist: '南柯一梦 / 明洋',
        url: 'http://music.163.com/song/media/outer/url?id=1442466164.mp3',
        cover: '/assets/01.jpg',
      },
      {
        name: '大眠（完整版）',
        artist: '小乐哥',
        url: 'http://music.163.com/song/media/outer/url?id=1413142894.mp3',
       cover: '/assets/03.jpg',
      },
      {
        name: '芒种',
        artist: '音阙诗听 / 赵方婧',
        url: 'http://music.163.com/song/media/outer/url?id=1369798757.mp3',
        cover: '/assets/6.jpg',
      },
	  {
        name: '卡布奇诺',
        artist: '6诗人',
        url: 'http://music.163.com/song/media/outer/url?id=862100158.mp3',
       cover: '/assets/6.jpg',
      },
	  {
        name: '悬溺',
        artist: '葛东琪',
        url: 'http://music.163.com/song/media/outer/url?id=1397345903.mp3',
        cover: '/assets/6.jpg',
      },
	  {
        name: '世间美好与你环环相扣',
        artist: '柏松',
        url: 'http://music.163.com/song/media/outer/url?id=1363948882.mp3',
        cover: '/assets/6.jpg',
      },
	  {
        name: '飞',
        artist: '王恩信Est / 二胖u',
        url: 'http://music.163.com/song/media/outer/url?id=1386259535.mp3',
        cover: '/assets/6.jpg',
      }
    ]
});