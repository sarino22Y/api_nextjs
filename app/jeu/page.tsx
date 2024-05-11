"use client"

import { Button } from '@/components/ui/button';
import AnimationBird from '@/src/features/utils/AnimationBird';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const page = () => {
    const [number, setNumber] = useState(0);
    const [randomNumber, setRandomNumber] = useState(0);
    const [randomNumberColor, setRandomNumberColor] = useState("");
    const { setTheme, theme } = useTheme();

    // // Quand le composant est monté
    // useEffect(() => {
    //     console.log("Le composant est monté");
    // }, []);

    // // Quand le composant est demonté (c'est grâce au 'return')
    // useEffect(() => {
    //     return () => {
    //         console.log("Le composant est demonté")
    //     };
    // }, []);

    // // Quand le nombre change
    // useEffect(() => {
    //     console.log(`Le nombre est maintenant ${number}`);

    // }, [number]);

    // Decrement et increment
    const increment = () => setNumber(number + 1);
    const decrement = () => setNumber(number - 1);

    if (number < 0) {
        setNumber(0)
    }

    // Random number
    // function randomNumber(){
    //     return Math.floor(Math.random() * 100);
    // }
    const setBgAndRandomNumber = () => {
        const random = Math.floor(Math.random() * 100);

        setRandomNumber(random);

        if (random < 60) {
            let currentTheme = theme;
            for (let index = 0; index < random; index++) {
                setTimeout(() => {
                    setRandomNumberColor(prevColor => prevColor === 'bg-red-700' ? 'bg-blue-700' : 'bg-red-700');
                    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
                    setTheme(currentTheme);
                }, index * 500); // Change color every 500ms
            }
        }
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold underline justify-center items-center flex'>{number}</h1>
            <div className='flex flex-row justify-center items-center'>
                <Button className='m-2' onClick={() => increment()}>+1</Button>
                <Button onClick={() => decrement()}>-1</Button>
            </div>
            <div className='flex justify-between items-center w-[200px] min-w-[100px]'>
                <Button onClick={() => setBgAndRandomNumber()}>Random</Button>
                <h2 className={clsx(randomNumberColor, "min-w-10 text-center")}>{randomNumber}</h2>
            </div>

            <AnimationBird />
        </div>
    )
}

export default page