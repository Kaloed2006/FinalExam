import React from 'react'
import st from './Card.module.css'
import Text from '../Text/Text'

export default function Card() {
    const cardsData = [
        {
            id: 0,
            image: '/images/Course Image.png',
            title: 'Learn Python Programming Masterclass',
            madeby: 'by Tim Buchalka',
            desc: 'This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3',
            hours: '42',
            lessons: '31',
            level: 'Medium'
        },
        {
            id: 1,
            image: '/images/Course Image (1).png',
            title: 'React - The Complete Guide ',
            madeby: 'by Maximilian Schwarzmüller',
            desc: 'Dive in and learn React 16.8 from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
            hours: '45',
            lessons: '146',
            level: 'All'
        },
        {
            id: 2,
            image: '/images/Course Image (2).png',
            title: 'Sketch from A to Z: Become an App Designer',
            madeby: 'by Joseph Angelo Todaro',
            desc: 'Finally a comprehensive guide to using Sketch for designing mobile applications. Learn to design an app from A to Z.',
            hours: '3.5',
            lessons: '15',
            level: 'Easy'
        },
    ]

    return (
        <>
            {cardsData.map((item, i) => (
                <div key={i} className={st.card}>
                    <div className={st.card__content}>
                        <img src={item.image} />
                        <div className={st.card__block}>
                            <Text mycolor={'#081F32'} myff={'DM'} myfse={'22px'} mytext={item.title} />
                            <Text mycolor={'#A5ADBB'} myff={'OS-R'} myfse={'16px'} mytext={item.madeby} />
                            <Text mycolor={'#6E798C'} myff={'OS-R'} myfse={'16px'} mytext={item.desc} />
                        </div>
                    </div>
                    <div className={st.card__info}>
                        <div className={st.card__info_block}>
                            <img src="/images/Clock Icon.png" />
                            <Text mycolor={'#081F32'} myfse={'16px'} myff={'OS-R'} mytext={item.hours}/>
                            <Text mycolor={'#6E798C'} myfse={'16px'} myff={'OS-R'} mytext={'hours'}/>
                        </div>
                        <div className={st.card__info_block}>
                            <img src="/images/Lesson Icon.png" />
                            <Text mycolor={'#081F32'} myfse={'16px'} myff={'OS-R'} mytext={item.lessons}/>
                            <Text mycolor={'#6E798C'} myfse={'16px'} myff={'OS-R'} mytext={'lessons'}/>
                        </div>
                        <div className={st.card__info_block}>
                            <img src="/images/Level Icon.png" />
                            <Text mycolor={'#081F32'} myfse={'16px'} myff={'OS-R'} mytext={item.level}/>
                            <Text mycolor={'#6E798C'} myfse={'16px'} myff={'OS-R'} mytext={'level'}/>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
