"use client"

import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react'

const page = () => {
    const [number, setNumber] = useState(0);

    // Quand le composant est monté
    useEffect(() => {
        console.log("Le composant est monté");
    }, []);

    // Quand le composant est demonté (c'est grâce au 'return')
    useEffect(() => {
        return () => {
            console.log("Le composant est demonté")
        };
    }, []);

    // Quand le nombre change
    useEffect(() => {
        console.log(`Le nombre est maintenant ${number}`);
        
    }, [number]);

    const increment = () => setNumber(number + 1);
    const decrement = () => setNumber(number - 1);

    if (number < 0) {
        setNumber(0)      
    }

    return (
        <div>
            <h1 className='text-3xl font-bold underline justify-center items-center flex'>{number}</h1>
            <div className='flex flex-row justify-center items-center'>
                <Button className='m-2' onClick={() => increment()}>+1</Button>
                <Button onClick={() => decrement()}>-1</Button>
            </div>
        </div>
    )
}

export default page