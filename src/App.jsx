import Main from './pages/Main';
import Video from './pages/Video';
import {React, useState, useRef, useEffect} from "react";

function App() {
  const [page, setPage] = useState('main')
  const [text, setText] = useState('')
  const [currentVideo, setCurrentVideo] = useState(1)

  const videoSRC = [
    '',
    'https://vkvideo.ru/video_ext.php?oid=-230354258&id=456239022&hash=20f758e4518552a8&autoplay=1',
    'https://vkvideo.ru/video_ext.php?oid=1032371751&id=456239018&hd=2&hash=99a8f1618955d5ed&autoplay=1',
    'https://vkvideo.ru/video_ext.php?oid=1032371751&id=456239019&hd=2&hash=55bb73755994333f&autoplay=1',
    'https://vkvideo.ru/video_ext.php?oid=1032371751&id=456239023&hd=2&hash=c52a369c9e1932a6&autoplay=1'
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
