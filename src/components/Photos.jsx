import {React, useState, useEffect} from 'react';
import Photo from './Photo';
import './photos.scss'

const Photos = ({photoOpacity, setCurrentVideo, playMusic, isStarted}) => {


    return (
        <div className="photos-container">

            <Photo 
                delay={0}
                isStarted={isStarted}
                photoOpacity = {photoOpacity}
                photoUrl={`https://eg.okay.com.tr:5002/fbdownload/%D0%9B%D0%A2%D0%9E%20%D1%87%D0%B0%D1%81%D1%82%D1%8C%201%20%D0%BF%D0%BE%D0%B4%D1%8A%D0%B5%D0%BC%2C%20%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BA%D0%B0%2C%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%20%D1%81%D0%B6%D0%B0%D1%82%D0%BE.mp4?tid=%222TiAbiyhrSy0E-AFBNssyVg1VPhXA3_QcePOm6F8SWJShPnjRynrbBXYmDyd6G_Kyc2GoNpD5yaKYwYG%22&mode=open&dlink=%222f5075626c69632fd092d0b8d0b4d0b5d0be20d0b3d0bed182d0bed0b2d18bd0b520d184d0b8d0bbd18cd0bcd18b2fd188d0bad0bed0bbd0b0203733392fd09bd0a2d09e20d187d0b0d181d182d18c203120d0bfd0bed0b4d18ad0b5d0bc2c20d0b7d0b0d180d18fd0b4d0bad0b02c20d180d0b0d0b1d0bed182d0b020d181d0b6d0b0d182d0be2e6d7034%22&stdhtml=true&SynoToken=.pd0HirQ0g1tM`}
                thumbnailPhotoArray={[
                    `${process.env.PUBLIC_URL}/img/placeholders/morning/1.jpg`,
                    `${process.env.PUBLIC_URL}/img/placeholders/morning/2.jpg`,
                    `${process.env.PUBLIC_URL}/img/placeholders/morning/3.jpg`,
                    `${process.env.PUBLIC_URL}/img/placeholders/morning/4.jpg`
                ]}
                videoId='1'
                RomanNumeral='I'
                setCurrentVideo={setCurrentVideo}
                text={
                    <>
                        Утро в лагере
                        <br />
                        зарядка, работа
                    </>
                }
                playMusic={playMusic}
            />
            <Photo 
                delay={5000}
                isStarted={isStarted}
                photoOpacity = {photoOpacity}
                photoUrl={`https://eg.okay.com.tr:5002/fbdownload/%D0%9B%D0%A2%D0%9E%20%D1%87%D0%B0%D1%81%D1%82%D1%8C%202%20%D0%BE%D0%B1%D0%B5%D0%B4%20%D0%BC%D0%BE%D1%80%D0%B5%2C%20%D0%BE%D1%82%D0%B4%D1%8B%D1%85%2C%20%D1%8D%D0%BA%D1%81%D0%BA%D1%83%D1%80%D1%81%D0%B8%D0%B8%20%D1%81%D0%B6%D0%B0%D1%82%D0%BE.mp4?tid=%222TiAbiyhrSy0E-AFBNssyVg1VPhXA3_QcePOm6F8SWJShPnjRynrbBXYmDyd6G_Kyc2GoNpD5yaKYwYG%22&mode=open&dlink=%222f5075626c69632fd092d0b8d0b4d0b5d0be20d0b3d0bed182d0bed0b2d18bd0b520d184d0b8d0bbd18cd0bcd18b2fd188d0bad0bed0bbd0b0203733392fd09bd0a2d09e20d187d0b0d181d182d18c203220d0bed0b1d0b5d0b420d0bcd0bed180d0b52c20d0bed182d0b4d18bd1852c20d18dd0bad181d0bad183d180d181d0b8d0b820d181d0b6d0b0d182d0be2e6d7034%22&stdhtml=true&SynoToken=.pd0HirQ0g1tM`}
                thumbnailPhotoArray={[
                    `${process.env.PUBLIC_URL}/img/placeholders/lunch/1.jpg`,
                    `${process.env.PUBLIC_URL}/img/placeholders/lunch/2.jpg`,
                    `${process.env.PUBLIC_URL}/img/placeholders/lunch/3.jpg`,
                    `${process.env.PUBLIC_URL}/img/placeholders/lunch/4.jpg`
                ]}
                videoId='2'
                RomanNumeral='II'
                setCurrentVideo={setCurrentVideo}
                text={  
                    <>
                        Обед, отдых,
                        <br />
                        море, поездки
                    </>
                }
                playMusic={playMusic}
            />
            <Photo 
                delay={5000}
                isStarted={isStarted}
                photoOpacity = {photoOpacity}
                photoUrl={`https://eg.okay.com.tr:5002/fbdownload/%D0%9B%D0%A2%D0%9E%20%D1%87%D0%B0%D1%81%D1%82%D1%8C%203%20%D0%98%D0%A2%D0%9E%D0%93%20%D0%BB%D0%B0%D0%B3%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D0%B6%D0%B8%D0%B7%D0%BD%D1%8C%20%D0%BF%D0%BE%D0%BB%D0%BD%D0%B0%D1%8F%20%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%8F.mp4?tid=%22oHK-MmQp7QGw5X0HjG5luW7EJ2ULEVr8l58C53oclaTXlDgtryCeHggsQ_aAalvuUCVMynuSukirOUVJ%22&mode=open&dlink=%222f5075626c69632fd092d0b8d0b4d0b5d0be20d0b3d0bed182d0bed0b2d18bd0b520d184d0b8d0bbd18cd0bcd18b2fd188d0bad0bed0bbd0b0203733392fd09bd0a2d09e20d187d0b0d181d182d18c203320d098d0a2d09ed09320d0bbd0b0d0b3d0b5d180d0bdd0b0d18f20d0b6d0b8d0b7d0bdd18c20d0bfd0bed0bbd0bdd0b0d18f20d0b2d0b5d180d181d0b8d18f2e6d7034%22&stdhtml=true&SynoToken=wpy.X4EsllC7w`}
                thumbnailPhotoArray={[
                    `${process.env.PUBLIC_URL}/img/placeholders/life/1.jpg`,
                    `${process.env.PUBLIC_URL}/img/placeholders/life/2.jpg`,
                    `${process.env.PUBLIC_URL}/img/placeholders/life/3.jpg`,
                    `${process.env.PUBLIC_URL}/img/placeholders/life/4.jpg`
                ]}
                setCurrentVideo={setCurrentVideo}
                videoId='3'
                RomanNumeral='III'
                text={'Лагерная жизнь вечером'}
                playMusic={playMusic}
            />
            <Photo 
                delay={0}
                isStarted={isStarted}
                photoOpacity = {photoOpacity}
                photoUrl={`${process.env.PUBLIC_URL}/photos/example1.mp4`}
                thumbnailPhotoArray={[
                    `${process.env.PUBLIC_URL}/img/placeholders/teachers/1.jpg`,
                    `${process.env.PUBLIC_URL}/img/placeholders/teachers/2.jpg`,
                    `${process.env.PUBLIC_URL}/img/placeholders/teachers/3.jpg`,
                    `${process.env.PUBLIC_URL}/img/placeholders/teachers/4.jpg`
                ]}
                setCurrentVideo={setCurrentVideo}
                videoId='4'
                RomanNumeral='IV'
                text={'Наши педагоги'}
                playMusic={playMusic}
            />

        </div>
    )
}

export default Photos