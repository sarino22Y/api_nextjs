import { Captions, Gamepad2, Home } from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'
import React from 'react'
import { buttonVariants } from '@/components/ui/button'

const Footer = () => {
    return (
        <div className='py-2 flex justify-between container gap-1 fixed bottom-0 left-0 right-0 bg-backgound max-w m-auto border-t border-t-accent'>
            <Link href="/" className={clsx(buttonVariants({
                variant: "ghost"
            }),
                'flex-1'
            )}>
                <Home size={16} />
            </Link>

            <Link href="/info" className={clsx(buttonVariants({
                variant: "ghost"
            }),
                'flex-1'
            )}>
                <Captions size={16} />
            </Link>

            <Link href="/jeu" className={clsx(buttonVariants({
                variant: "ghost"
            }),
                'flex-1'
            )}>
                <Gamepad2 size={16} />
            </Link>

        </div>
    )
}

export default Footer