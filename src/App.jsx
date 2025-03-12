import Main from './pages/Main';
import Video from './pages/Video';
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
            softVolumeChange(1, newAbortController.signal)
        } else {
            softVolumeChange(0, newAbortController.signal).then(() => {
                audioRef.current.pause();
                setIsMusicPlaying(false);                
            });
        }
    }
  };

const softVolumeChange = (to, signal) => {
    
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

        }, 100);
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
      <audio ref={audioRef} loop>
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
              src={'https://eg.okay.com.tr:5002/fbdownload/%D0%9B%D0%A2%D0%9E%20%D1%87%D0%B0%D1%81%D1%82%D1%8C%201%20%D0%98%D0%A2%D0%9E%D0%93%20%D0%BF%D0%BE%D0%B4%D1%8A%D0%B5%D0%BC%2C%20%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BA%D0%B0%2C%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%20%D1%81%D0%B6%D0%B0%D1%82%D0%BE.mp4?tid=%22oHK-MmQp7QGw5X0HjG5luW7EJ2ULEVr8l58C53oclaTXlDgtryCeHggsQ_aAalvuUCVMynuSukirOUVJ%22&mode=open&dlink=%222f5075626c69632fd092d0b8d0b4d0b5d0be20d0b3d0bed182d0bed0b2d18bd0b520d184d0b8d0bbd18cd0bcd18b2fd188d0bad0bed0bbd0b0203733392fd09bd0a2d09e20d187d0b0d181d182d18c203120d098d0a2d09ed09320d0bfd0bed0b4d18ad0b5d0bc2c20d0b7d0b0d180d18fd0b4d0bad0b02c20d180d0b0d0b1d0bed182d0b020d181d0b6d0b0d182d0be2e6d7034%22&stdhtml=true&SynoToken=wpy.X4EsllC7w'} 
              playMusic={playMusic}
            />} />
            <Route path={`/video2`} element={<Video
              text='Обед, отдых, море, поездки'
              src={'https://eg.okay.com.tr:5002/fbdownload/%D0%9B%D0%A2%D0%9E%20%D1%87%D0%B0%D1%81%D1%82%D1%8C%202%20%D0%98%D0%A2%D0%9E%D0%93%20%D0%BE%D0%B1%D0%B5%D0%B4%20%D0%BC%D0%BE%D1%80%D0%B5%2C%20%D0%BE%D1%82%D0%B4%D1%8B%D1%85%2C%20%D1%8D%D0%BA%D1%81%D0%BA%D1%83%D1%80%D1%81%D0%B8%D0%B8%20%D1%81%D0%B6%D0%B0%D1%82%D0%BE.mp4?tid=%22oHK-MmQp7QGw5X0HjG5luW7EJ2ULEVr8l58C53oclaTXlDgtryCeHggsQ_aAalvuUCVMynuSukirOUVJ%22&mode=open&dlink=%222f5075626c69632fd092d0b8d0b4d0b5d0be20d0b3d0bed182d0bed0b2d18bd0b520d184d0b8d0bbd18cd0bcd18b2fd188d0bad0bed0bbd0b0203733392fd09bd0a2d09e20d187d0b0d181d182d18c203220d098d0a2d09ed09320d0bed0b1d0b5d0b420d0bcd0bed180d0b52c20d0bed182d0b4d18bd1852c20d18dd0bad181d0bad183d180d181d0b8d0b820d181d0b6d0b0d182d0be2e6d7034%22&stdhtml=true&SynoToken=wpy.X4EsllC7w'} 
              playMusic={playMusic}
            />} />
            <Route path={`/video3`} element={<Video
              text='Лагерная жизнь вечером'
              src={'https://eg.okay.com.tr:5002/fbdownload/%D0%9B%D0%A2%D0%9E%20%D1%87%D0%B0%D1%81%D1%82%D1%8C%203%20%D0%98%D0%A2%D0%9E%D0%93%20%D0%BB%D0%B0%D0%B3%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D0%B6%D0%B8%D0%B7%D0%BD%D1%8C%20%D1%81%D0%B6%D0%B0%D1%82%D0%BE.mp4?tid=%22oHK-MmQp7QGw5X0HjG5luW7EJ2ULEVr8l58C53oclaTXlDgtryCeHggsQ_aAalvuUCVMynuSukirOUVJ%22&mode=open&dlink=%222f5075626c69632fd092d0b8d0b4d0b5d0be20d0b3d0bed182d0bed0b2d18bd0b520d184d0b8d0bbd18cd0bcd18b2fd188d0bad0bed0bbd0b0203733392fd09bd0a2d09e20d187d0b0d181d182d18c203320d098d0a2d09ed09320d0bbd0b0d0b3d0b5d180d0bdd0b0d18f20d0b6d0b8d0b7d0bdd18c20d181d0b6d0b0d182d0be2e6d7034%22&stdhtml=true&SynoToken=wpy.X4EsllC7w'} 
              playMusic={playMusic}
            />} />
            <Route path={`/video4`} element={<Video
              text='Наши педагоги'
              src={'https://eg.okay.com.tr:5002/fbdownload/%D0%9B%D0%A2%D0%9E%20%D1%87%D0%B0%D1%81%D1%82%D1%8C%204%20%D0%98%D0%A2%D0%9E%D0%93%20%D0%9D%D0%B0%D1%88%D0%B8%20%D0%BF%D0%B5%D0%B4%D0%B0%D0%B3%D0%BE%D0%B3%D0%B8%20%D1%81%D0%B6%D0%B0%D1%82%D0%BE.mp4?tid=%22oHK-MmQp7QGw5X0HjG5luW7EJ2ULEVr8l58C53oclaTXlDgtryCeHggsQ_aAalvuUCVMynuSukirOUVJ%22&mode=open&dlink=%222f5075626c69632fd092d0b8d0b4d0b5d0be20d0b3d0bed182d0bed0b2d18bd0b520d184d0b8d0bbd18cd0bcd18b2fd188d0bad0bed0bbd0b0203733392fd09bd0a2d09e20d187d0b0d181d182d18c203420d098d0a2d09ed09320d09dd0b0d188d0b820d0bfd0b5d0b4d0b0d0b3d0bed0b3d0b820d181d0b6d0b0d182d0be2e6d7034%22&stdhtml=true&SynoToken=wpy.X4EsllC7w'} 
              playMusic={playMusic}
            />} />
        </Routes>
  
    </Router>

      );
}

export default App;
