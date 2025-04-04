import {React, useState, useEffect, useRef} from 'react';
import './music.scss'
const btnSVG = (
    <svg version="1.0" viewBox="0 0 485.000000 1280.000000" height='100%' preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path d="M2536 12470 c-225 -36 -424 -138 -592 -305 -253 -251 -400 -579 -466 -1045 -20 -142 -17 -649 5 -865 53 -511 161 -1092 326 -1745 38 -151 71 -280 73 -287 1 -7 -49 -55 -112 -109 -508 -427 -881 -807 -1079 -1098 -277 -409 -448 -853 -518 -1351 -25 -179 -25 -596 0 -775 77 -551 288 -1001 641 -1368 185 -192 382 -335 621 -452 407 -199 816 -280 1345 -267 225 5 348 19 524 58 49 11 91 18 93 15 9 -9 85 -299 119 -456 101 -467 120 -858 53 -1118 -63 -248 -259 -500 -518 -668 -225 -144 -503 -189 -677 -110 -50 23 -144 99 -144 117 0 4 33 25 73 46 108 56 230 182 284 293 56 115 73 191 80 345 4 106 1 148 -15 226 -65 313 -308 576 -609 661 -102 28 -286 30 -383 4 -306 -83 -552 -290 -634 -536 -73 -219 -51 -481 59 -699 152 -303 430 -475 719 -445 l91 10 67 -38 c336 -194 714 -246 1097 -152 383 94 632 336 745 725 51 178 60 264 61 554 0 209 -4 299 -18 400 -29 202 -81 451 -142 674 -31 112 -55 204 -53 206 2 1 39 14 83 29 546 189 860 584 941 1184 18 139 21 447 4 577 -42 335 -152 635 -331 904 -212 319 -417 515 -671 645 -236 120 -446 159 -865 160 -123 1 -223 1 -223 2 0 0 -70 243 -155 539 -85 296 -155 543 -155 549 0 6 48 48 108 92 550 415 970 961 1251 1630 150 358 267 787 318 1169 25 187 24 616 -1 775 -65 415 -223 742 -477 985 -156 150 -317 243 -504 291 -112 29 -332 41 -439 24z m372 -506 c128 -26 214 -73 312 -173 129 -129 200 -281 235 -495 34 -212 28 -540 -16 -811 -68 -416 -215 -772 -457 -1103 -97 -134 -153 -201 -306 -362 -171 -181 -635 -620 -655 -620 -9 0 -24 68 -97 420 -194 943 -250 1704 -163 2220 25 151 61 283 98 365 124 274 409 498 711 560 90 18 246 18 338 -1z m-844 -4651 c20 -64 163 -556 221 -763 25 -91 47 -170 50 -177 3 -8 -36 -25 -110 -48 -490 -153 -889 -554 -986 -990 -8 -35 -13 -116 -13 -195 1 -115 5 -148 28 -223 59 -198 171 -358 349 -501 32 -25 61 -46 65 -46 4 0 6 80 4 178 -3 151 -1 192 18 282 69 336 264 543 616 653 87 28 253 62 260 54 8 -7 707 -2235 750 -2389 6 -21 -63 -48 -196 -76 -139 -30 -268 -42 -452 -42 -621 0 -1051 151 -1389 489 -280 281 -449 657 -498 1113 -16 142 -13 442 4 598 82 711 440 1440 920 1873 109 99 314 255 337 256 3 1 13 -20 22 -46z m1186 -1793 c104 -25 282 -111 371 -179 103 -79 250 -238 333 -363 117 -176 183 -335 222 -534 27 -133 24 -376 -5 -514 -50 -236 -158 -417 -333 -555 -74 -59 -261 -166 -270 -155 -3 3 -30 93 -62 200 -144 485 -476 1526 -606 1900 -79 228 -77 218 -38 223 77 12 304 -2 388 -23z"/>
        </g>
    </svg>
)

const Music = ({setAudio, audioRef}) => {
    const [hideStatus, setHideStatus] = useState(0)
    const [buttonText, setButtonText] = useState(btnSVG)
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
            } else {
                if (window.innerWidth < 768) {
                    setBlockWidth('70vw')
                } else {
                    setBlockWidth('20vw')
                }
                
                setHideStatus(1)
            }
        } else {
            setCurrentAuthor(null)
            setButtonText(btnSVG)
            setPage('authors')
        }
        

    }
    const authorOnclick = (authorName) => {
        setPage('songs')
        setButtonText('Назад')
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