import {React, useState, useEffect} from 'react';
import Video from './Video';
import './videos.scss'

const Videos = ({videoOpacity, toggleMusic}) => {
    const [placeholderCount1, setPlaceholderCount1 ] = useState(1)
    const [placeholderCount2, setPlaceholderCount2 ] = useState(1)
    const [placeholderCount3, setPlaceholderCount3 ] = useState(1)
    const [placeholderCount4, setPlaceholderCount4 ] = useState(1)
    const [placeholderOpacity1, setplaceholderOpacity1] = useState(1); 
    const [placeholderOpacity2, setplaceholderOpacity2] = useState(1); 
    const [placeholderOpacity3, setplaceholderOpacity3] = useState(1); 
    const [placeholderOpacity4, setplaceholderOpacity4] = useState(1); 
    
    useEffect(() => {
        const photoCount = 4;
        const interval1 = setInterval(() => {
            setplaceholderOpacity1(0)
            
            setTimeout(() => {
                setPlaceholderCount1((prevCount) => (prevCount % photoCount) + 1);
                setplaceholderOpacity1(1)
              }, 1000);
            }, 10000);

        const interval2 = setInterval(() => {
            setTimeout(() => {
                setplaceholderOpacity2(0)
              }, 5000);

            setTimeout(() => {
                setPlaceholderCount2((prevCount) => (prevCount % photoCount) + 1);
                setplaceholderOpacity2(1)
              }, 6000);

            }, 10000);

        const interval3 = setInterval(() => {
            setTimeout(() => {
                setplaceholderOpacity3(0)
              }, 5000);

            setTimeout(() => {
                setPlaceholderCount3((prevCount) => (prevCount % photoCount) + 1);
                setplaceholderOpacity3(1)
              }, 6000);


            }, 10000);

        const interval4 = setInterval(() => {
            setplaceholderOpacity4(0)

            setTimeout(() => {
                setPlaceholderCount4((prevCount) => (prevCount % photoCount) + 1);
              }, 1000);

            setTimeout(() => {
                setplaceholderOpacity4(1)
              }, 1100);
            }, 10000);

        
        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
            clearInterval(interval4);
        }
        }, []);

    return (
        <div className="videos-container">

            <Video 
                videoOpacity = {videoOpacity}
                videoUrl={`https://eg.okay.com.tr:5002/fbdownload/%D0%9B%D0%A2%D0%9E%20%D1%87%D0%B0%D1%81%D1%82%D1%8C%201%20%D0%BF%D0%BE%D0%B4%D1%8A%D0%B5%D0%BC%2C%20%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BA%D0%B0%2C%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%20%D1%81%D0%B6%D0%B0%D1%82%D0%BE.mp4?tid=%222TiAbiyhrSy0E-AFBNssyVg1VPhXA3_QcePOm6F8SWJShPnjRynrbBXYmDyd6G_Kyc2GoNpD5yaKYwYG%22&mode=open&dlink=%222f5075626c69632fd092d0b8d0b4d0b5d0be20d0b3d0bed182d0bed0b2d18bd0b520d184d0b8d0bbd18cd0bcd18b2fd188d0bad0bed0bbd0b0203733392fd09bd0a2d09e20d187d0b0d181d182d18c203120d0bfd0bed0b4d18ad0b5d0bc2c20d0b7d0b0d180d18fd0b4d0bad0b02c20d180d0b0d0b1d0bed182d0b020d181d0b6d0b0d182d0be2e6d7034%22&stdhtml=true&SynoToken=.pd0HirQ0g1tM`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/img/placeholders/morning/${placeholderCount1}.jpg`}
                placeholderOpacity={placeholderOpacity1}
                text={
                    <>
                        Утро в лагере
                        <br />
                        зарядка, работа
                    </>
                }
                toggleMusic={toggleMusic}
            />
            <Video 
                videoOpacity = {videoOpacity}
                videoUrl={`https://eg.okay.com.tr:5002/fbdownload/%D0%9B%D0%A2%D0%9E%20%D1%87%D0%B0%D1%81%D1%82%D1%8C%202%20%D0%BE%D0%B1%D0%B5%D0%B4%20%D0%BC%D0%BE%D1%80%D0%B5%2C%20%D0%BE%D1%82%D0%B4%D1%8B%D1%85%2C%20%D1%8D%D0%BA%D1%81%D0%BA%D1%83%D1%80%D1%81%D0%B8%D0%B8%20%D1%81%D0%B6%D0%B0%D1%82%D0%BE.mp4?tid=%222TiAbiyhrSy0E-AFBNssyVg1VPhXA3_QcePOm6F8SWJShPnjRynrbBXYmDyd6G_Kyc2GoNpD5yaKYwYG%22&mode=open&dlink=%222f5075626c69632fd092d0b8d0b4d0b5d0be20d0b3d0bed182d0bed0b2d18bd0b520d184d0b8d0bbd18cd0bcd18b2fd188d0bad0bed0bbd0b0203733392fd09bd0a2d09e20d187d0b0d181d182d18c203220d0bed0b1d0b5d0b420d0bcd0bed180d0b52c20d0bed182d0b4d18bd1852c20d18dd0bad181d0bad183d180d181d0b8d0b820d181d0b6d0b0d182d0be2e6d7034%22&stdhtml=true&SynoToken=.pd0HirQ0g1tM`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/img/placeholders/lunch/${placeholderCount2}.jpg`}
                placeholderOpacity={placeholderOpacity2}
                text={  
                    <>
                        Обед, отдых,
                        <br />
                        море, поездки
                    </>
                }
                toggleMusic={toggleMusic}
            />
            <Video 
                videoOpacity = {videoOpacity}
                videoUrl={`https://eg.okay.com.tr:5002/fbdownload/%D0%9B%D0%A2%D0%9E%20%D1%87%D0%B0%D1%81%D1%82%D1%8C%203%20%D0%BB%D0%B0%D0%B3%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D0%B6%D0%B8%D0%B7%D0%BD%D1%8C%20%D1%81%D0%B6%D0%B0%D1%82%D0%BE.mp4?tid=%222TiAbiyhrSy0E-AFBNssyVg1VPhXA3_QcePOm6F8SWJShPnjRynrbBXYmDyd6G_Kyc2GoNpD5yaKYwYG%22&mode=open&dlink=%222f5075626c69632fd092d0b8d0b4d0b5d0be20d0b3d0bed182d0bed0b2d18bd0b520d184d0b8d0bbd18cd0bcd18b2fd188d0bad0bed0bbd0b0203733392fd09bd0a2d09e20d187d0b0d181d182d18c203320d0bbd0b0d0b3d0b5d180d0bdd0b0d18f20d0b6d0b8d0b7d0bdd18c20d181d0b6d0b0d182d0be2e6d7034%22&stdhtml=true&SynoToken=.pd0HirQ0g1tM`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/img/placeholders/life/${placeholderCount3}.jpg`}
                placeholderOpacity={placeholderOpacity3}
                text={'Лагерная жизнь'}
                toggleMusic={toggleMusic}
            />
            <Video 
                videoOpacity = {videoOpacity}
                videoUrl={`${process.env.PUBLIC_URL}/videos/example1.mp4`}
                thumbnailVideoUrl={`${process.env.PUBLIC_URL}/img/placeholders/teachers/${placeholderCount4}.jpg`}
                placeholderOpacity={placeholderOpacity4}
                text={'Наши педагоги'}
                toggleMusic={toggleMusic}
            />

        </div>
    )
}

export default Videos