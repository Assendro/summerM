import {React, useState, useEffect, useRef} from 'react';
import './music.scss'

const Music = ({setAudio, audioRef}) => {
    const [hideStatus, setHideStatus] = useState(0)
    const [buttonText, setButtonText] = useState('НАШИ ПЕСНИ')
    const [page, setPage] = useState('authors')
    const [playStatus, setPlayStatus] = useState(0)
    const [blockWidth, setBlockWidth] = useState(0)
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const blockRef = useRef(null);

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
                {
                    title: 'Водосточная труба',
                    src: `${process.env.PUBLIC_URL}/music/Водосточная труба.mp3`
                },
                {
                    title: 'Нам с сетрёнкой каюк',
                    src: `${process.env.PUBLIC_URL}/music/Нам с сетрёнкой каюк.mp3`
                },
                {
                    title: 'Слева справ нас рать',
                    src: `${process.env.PUBLIC_URL}/music/Слева справ нас рать.mp3`
                }
            ]
        },
        {
            name: 'Веселитский',
            songs: [
                {
                    title: 'Пяти-шестикантропы',
                    src: `${process.env.PUBLIC_URL}/music/08-Веселитский_Песня_Пяти-шестикантропы_В_Туриянский [Москва, Перово, 22.03.25].mp3`
                },
                {
                    title: 'Синяя Птица 1 вариант',
                    src: `${process.env.PUBLIC_URL}/music/09-Веселитский - Синяя Птица [Машина Времени] 1 вар.mp3`
                },
                {
                    title: 'Синяя Птица 2 вариант',
                    src: `${process.env.PUBLIC_URL}/music/10-Веселитский - Синяя Птица [Машина Времени] 2 вар.mp3`
                },
            ]
        },
        {
            name: 'Зарядка',
            songs: [
                {
                    title: 'F.R.David - Pick Up The Phone',
                    src: `${process.env.PUBLIC_URL}/music/F. R. David - Pick Up The Phone [1982].mp3`
                },
                {
                    title: 'Men At Work - Down Under',
                    src: `${process.env.PUBLIC_URL}/music/Men At Work - Down Under [1981].mp3`
                },
                {
                    title: 'Асуллин Альберт - Мальчик с девочкой дружил',
                    src: `${process.env.PUBLIC_URL}/music/Асуллин Альберт - Мальчик с девочкой дружил [1985].mp3`
                },
                {
                    title: 'Малежик Вячеслав - Двести лет',
                    src: `${process.env.PUBLIC_URL}/music/Малежик Вячеслав - Двести лет [1984].mp3`
                },
                {
                    title: 'Новиков Александр - Город древний',
                    src: `${process.env.PUBLIC_URL}/music/Новиков Александр - Город древний [1984].mp3`
                },

            ]
        },
        {
            name: 'Дискотека',
            songs: [
                {
                    title: 'Depeche Mode – Enjoy The Silence',
                    src: `${process.env.PUBLIC_URL}/music/Depeche Mode – Enjoy The Silence [1990].mp3`
                },
                {
                    title: 'Europe - The Final Countdown',
                    src: `${process.env.PUBLIC_URL}/music/Europe - The Final Countdown [1986].mp3`
                },
                {
                    title: 'Radiorama - Yeti',
                    src: `${process.env.PUBLIC_URL}/music/Radiorama - Yeti [1986].mp3`
                },
                {
                    title: 'София Ротару - Луна-луна',
                    src: `${process.env.PUBLIC_URL}/music/София Ротару - Луна-луна [1986].mp3`
                },
            ]
        },
        {
            name: 'Сон',
            songs: [
                {
                    title: 'Аутогенная тренировка - Мелодии спокойного сна',
                    src: `${process.env.PUBLIC_URL}/music/03-Аутогенная тренировка - Мелодии спокойного сна (CD).mp3`
                },
            ]
        },
    ]


    const playBtnContent = [<path  d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" ></path>,<path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z" ></path>]

    const hideOnclick = () => {
        if (page === 'authors') {
            if (hideStatus) {
                setBlockWidth(0)
                setHideStatus(0)
                setButtonText('НАШИ ПЕСНИ')
            } else {
                setButtonText('НАЗАД')
                if (window.innerWidth < 768) {
                    setBlockWidth('70vw')
                } else {
                    setBlockWidth('20vw')
                }
                
                setHideStatus(1)
            }
        } else {
            setCurrentAuthor(null)
            setPage('authors')
        }
        

    }
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


    let content;
    switch (page) {
        case 'authors':
            content = 
                <div className="authors"
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

    return (
        <div className="music-container"                 
            style={{
            width: blockWidth
            }}
        >
            <button 
                className="music-button"
                onClick={hideOnclick}
            >
                {buttonText}

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