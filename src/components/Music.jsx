import {React, useState, useEffect, useRef} from 'react';
import './music.scss'

const Music = ({setAudio, audioRef}) => {
    const [hideStatus, setHideStatus] = useState(0)
    const [page, setPage] = useState('authors')
    const [playStatus, setPlayStatus] = useState(0)
    const [blockWidth, setBlockWidth] = useState(0)
    const [isHovered, setIsHovered] = useState(false);
    const [topIndent, setTopIndent] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const blockRef = useRef(null);
    const [height, setHeight] = useState(0);

    const [currentAuthor, setCurrentAuthor] = useState(null);
    const [currentSong, setCurrentSong] = useState({
        name: 'Название', 
        author: 'Автор'
    });

    const songsArray = [
        {
            name: 'Лосев',
            songs: [
                {
                    title: 'Я предлагаю спеть о том',
                    src: `${process.env.PUBLIC_URL}/music/01 Я предлагаю спеть о том.mp3`
                },
                {
                    title: 'Берег моря каменистый',
                    src: `${process.env.PUBLIC_URL}/music/02 Берег моря каменистый.mp3`
                },
                {
                    title: 'Бросив дела',
                    src: `${process.env.PUBLIC_URL}/music/03 Бросив дела.mp3`
                },
                {
                    title: 'Непокорные дети',
                    src: `${process.env.PUBLIC_URL}/music/04 Непокорные дети.mp3`
                },
                {
                    title: 'Сизый лети голубок',
                    src: `${process.env.PUBLIC_URL}/music/07 Сизый лети голубок.mp3`
                },
                {
                    title: 'Клад',
                    src: `${process.env.PUBLIC_URL}/music/08 Клад.mp3`
                },
                {
                    title: 'В шахматы играют',
                    src: `${process.env.PUBLIC_URL}/music/12 В шахматы играют.mp3`
                },
                {
                    title: 'Этот потерянный рай',
                    src: `${process.env.PUBLIC_URL}/music/13 Этот потерянный рай.mp3`
                },
                {
                    title: 'Как-то раз засмеялся один поэт',
                    src: `${process.env.PUBLIC_URL}/music/14 Как-то раз засмеялся один поэт.mp3`
                },
                {
                    title: 'Как время жизнь перелистало',
                    src: `${process.env.PUBLIC_URL}/music/15 Как время жизнь перелистало.mp3`
                },
                {
                    title: 'Я спрошу у Господа',
                    src: `${process.env.PUBLIC_URL}/music/16 Я спрошу у Господа.mp3`
                },
                {
                    title: 'Осторожность',
                    src: `${process.env.PUBLIC_URL}/music/19 Осторожность.mp3`
                },
                {
                    title: 'Пускай звезда горит ночная',
                    src: `${process.env.PUBLIC_URL}/music/20 Пускай звезда горит ночная.mp3`
                },
                {
                    title: 'Прогулка',
                    src: `${process.env.PUBLIC_URL}/music/21 Прогулка.mp3`
                },
                {
                    title: 'Чайка Джонатан',
                    src: `${process.env.PUBLIC_URL}/music/22 Чайка Джонатан.mp3`
                },
                {
                    title: 'Ты крупица, я крупица',
                    src: `${process.env.PUBLIC_URL}/music/25 Ты крупица, я крупица.mp3`
                },
                {
                    title: 'Рыцарь',
                    src: `${process.env.PUBLIC_URL}/music/26 Рыцарь.mp3`
                },
                {
                    title: 'Мы с тобой стоим на берегу',
                    src: `${process.env.PUBLIC_URL}/music/27 Мы с тобой стоим на берегу.mp3`
                },
                {
                    title: 'Дороженька',
                    src: `${process.env.PUBLIC_URL}/music/31 Дороженька.mp3`
                },
                {
                    title: 'Чаша',
                    src: `${process.env.PUBLIC_URL}/music/32 Чаша.mp3`
                },
                    
            ]
        },
        {
            name: 'Буянов',
            songs: [

            ]
        },
        {
            name: 'Зарядка',
            songs: [

            ]
        },
        {
            name: 'Дискотека',
            songs: [

            ]
        },
        {
            name: 'Сон',
            songs: [

            ]
        },
    ]


    const playBtnContent = [<path  d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" ></path>,<path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z" ></path>]
    const hideOnclick = () => {
        if (hideStatus) {
            setBlockWidth(0)
            setHideStatus(0)
        } else {
            setBlockWidth('20vw')
            setHideStatus(1)
        }
    }
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const authorOnclick = (authorName) => {
        setPage('songs')
        setCurrentAuthor(authorName)
    };
    const songOnclick = (title, src, authorName) => {
        audioRef.current.pause();
        setCurrentSong({
            name: title, 
            author: authorName
        })
        setAudio(src)
        setTimeout(() => {
            audioRef.current.play();
            setPlayStatus(1)
        }, 500);
        
    };
    const playOnclick = () => {
        if (playStatus) {
            setPlayStatus(0)
            audioRef.current.pause();
        } else {
            setPlayStatus(1)
            audioRef.current.play();
        }
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleScroll = (event) => {
        if (isHovered) {
            const offset = 480 - height

            setTopIndent((prev) => {
                if (prev - event.deltaY / 4 > 0 || prev - event.deltaY / 4 < offset) {
                    return prev
                }
                return prev - event.deltaY / 4
            })

        }
    }
    let content;
    switch (page) {
        case 'authors':
            content = 
                <div className="authors"
                    style={{
                        top: topIndent
                    }}
                    ref={blockRef} 
                >
                    {songsArray.map((author, index) => (
                        <div className="author-card" key={index} onClick={() => {authorOnclick(author.name)}} >
                            {author.name}
                        </div>
                    ))}
                </div>
            break;
        case 'songs':
            content = 
                <div className="songs"
                    style={{
                        top: topIndent
                    }}
                    ref={blockRef} 
                >
                    {songsArray.map((author) => {
                        if (author.name === currentAuthor) {
                            return author.songs.map((song, index) => (
                                <div className="song-card" key={index} onClick={() => {songOnclick(song.title, song.src ,author.name)}} >
                                    {song.title}
                                </div>
                            ))

                        }

                    })}
                    <div className="to-authors-button"></div>
                </div>

            break;
    }
    useEffect(() => {
        const audio = audioRef.current;
        
        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };

        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        }
    }, [audioRef])
    useEffect(() => {
        if (blockRef.current) {
            console.log(blockRef.current.offsetHeight)
            setHeight(blockRef.current.offsetHeight);
        }
    }, [currentAuthor]);


    return (
        <div className="music-container"                 
            onWheel={handleScroll}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
            width: blockWidth
            }}
        >
            <button 
                className="music-button"
                onClick={hideOnclick}
            >
                Музыка
            </button>
            
            <div className="music-pleer">
                <div className="play-button-container">
                    <div className="play-button" onClick={playOnclick}>
                        <svg width='100%' height='100%' version="1.1" viewBox="0 0 36 36">{playBtnContent[playStatus]}</svg>
                    </div>
                </div>
                <div className="song-stats-container">
                    <div className="song-name">
                        {currentSong.name}
                    </div>
                    <div className="author-name">
                        {currentSong.author}
                    </div>
                    <div className="music-track">
                        <div className="music-track-played"
                            style={{
                                width: `${currentTime/duration * 100}%`
                            }}
                        >

                            <div className="music-track-cursor">

                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="content-container">
                {content}   
            </div>
           

        </div>
    )
}

export default Music;