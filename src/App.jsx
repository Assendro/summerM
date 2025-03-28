import Main from './pages/Main';
import Video from './pages/Video';
import {React, useState, useRef, useEffect} from "react";

function App() {
  const [page, setPage] = useState('main')
  const [text, setText] = useState('')
  const [currentVideo, setCurrentVideo] = useState(1)

  const videoSRC = [
    '',
    'https://vkvideo.ru/video_ext.php?oid=1032371751&id=456239021&hash=3d35297f17006bbc&autoplay=1',
    'https://vkvideo.ru/video_ext.php?oid=1032371751&id=456239018&hd=2&hash=99a8f1618955d5ed&autoplay=1',
    'https://vkvideo.ru/video_ext.php?oid=1032371751&id=456239019&hd=2&hash=55bb73755994333f&autoplay=1',
    'https://vkvideo.ru/video_ext.php?oid=1032371751&id=456239020&hash=89d1e2195f1f213c&autoplay=1'
  ]



  let content;

  switch (page) {
    case 'main':
        content = <Main 
                    setCurrentVideo={setCurrentVideo} 
                    setPage={setPage}
                    setText={setText}
                  />
        break;
    case 'video':
        content = <Video
                    setPage={setPage}
                    text={text}
                    src={videoSRC[currentVideo]} 
                  />
        break;
  }
  return (
      <div>
        {content}        
      </div>
      );
}

export default App;
