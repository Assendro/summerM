import Main from './pages/Main';
import Video from './pages/Video';
import YtVideo from './components/VideoPlayer';
import {React, useState, useRef, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate  } from 'react-router-dom';

function App() {
  
  const [photoOpacity, setPhotoOpacity] = useState({
      opacity: 0
  })
  const [headerStyle, setHeaderStyle] = useState({
      opacity: 1
  })
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [сurrentVideo, setCurrentVideo] = useState(1)
  const [isStarted, setIsStarted] = useState(false)
  const audioRef = useRef(null);
  const [abortController, setAbortController] = useState(null);


  const startAnimation = () => {
    if (!isStarted) {
        setPhotoOpacity({
            opacity: 1
        })
        setHeaderStyle({
            opacity: 0
        })
        setIsMusicPlaying(true)
        setIsStarted(true)
        if (audioRef.current) {
          audioRef.current.volume = 0.8
          audioRef.current.play(); 
        }
    }        
  }
  const playMusic = (play) => {
    if (abortController) {
      abortController.abort();
    }
    const newAbortController = new AbortController();
    setAbortController(newAbortController); 
    if (audioRef.current) {
        if (play) {
            softVolumeChange(0.8, newAbortController.signal, 800)
        } else {
            softVolumeChange(0, newAbortController.signal, 100).then(() => {
                audioRef.current.pause();
                setIsMusicPlaying(false);                
            });
        }
    }
  };

const softVolumeChange = (to, signal, delay) => {
    
    let current = roundTo(audioRef.current.volume, 1);
    return new Promise((resolve) => {
        let timerId = setInterval(() => {
          if (signal.aborted) {
            clearInterval(timerId);
            return;
          }


            if (current === to) {
                clearInterval(timerId);
                resolve(); // Разрешаем промис
            } else if (current < to) {
              if (current > 0 && audioRef.current.paused) {
                setIsMusicPlaying(true);
                audioRef.current.play();
              }
                current = Math.min(roundTo(current + 0.1, 1), 1);
            } else if (current > to) {
              current = Math.max(roundTo(current - 0.1, 1), 0);
            }
            audioRef.current.volume = current

        }, delay);
    });
};

  const roundTo = (value, decimals) => {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
  };

  useEffect(() => {
    const handlePopState = (event) => {
      if (!audioRef.current.paused) {
        return; // Если музыка уже играет, ничего не делаем
      }
      playMusic(true)
  };
    window.addEventListener('popstate', handlePopState);

    // Убираем обработчик при размонтировании компонента
    return () => {
        window.removeEventListener('popstate', handlePopState);
    };
    

  }, []);
  return (
    <Router>
      <audio ref={audioRef} loop >
        <source src={`${process.env.PUBLIC_URL}/music/backgroundMusic.mp3`} type="audio/mpeg" />
      </audio>
        <Routes>
            <Route path="/summerM" element={<Main 
              isStarted={isStarted}
              setCurrentVideo={setCurrentVideo} 
              startAnimation={startAnimation}
              photoOpacity={photoOpacity}
              headerStyle={headerStyle}
              isMusicPlaying={isMusicPlaying}
              start={startAnimation}
              setIsMusicPlaying={setIsMusicPlaying}
              playMusic={playMusic}
            />} />
            <Route path={`/video1`} element={<Video
              text='Утро в лагере зарядка, работа'
              src={'https://vkvideo.ru/video_ext.php?oid=1032371751&id=456239021&hash=3d35297f17006bbc&autoplay=1'} 
              playMusic={playMusic}
            />} />
            <Route path={`/video2`} element={<Video
              text='Обед, отдых, море, поездки'
              src={'https://vkvideo.ru/video_ext.php?oid=1032371751&id=456239018&hd=2&hash=99a8f1618955d5ed&autoplay=1'} 
              playMusic={playMusic}
            />} />
            <Route path={`/video3`} element={<Video
              text='Лагерная жизнь вечером'
              src={'https://vkvideo.ru/video_ext.php?oid=1032371751&id=456239019&hd=2&hash=55bb73755994333f&autoplay=1'} 
              playMusic={playMusic}
            />} />
            <Route path={`/video4`} element={<Video
              text='Наши педагоги'
              src={'https://vkvideo.ru/video_ext.php?oid=1032371751&id=456239020&hash=89d1e2195f1f213c&autoplay=1'} 
            />} />  
        </Routes>
    </Router>

      );
}

export default App;
