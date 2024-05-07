"use client"

import { PrismaClient } from '@prisma/client'
import React from 'react'
import CreatePost from './CreatePost';

const prisma = new PrismaClient();

const Post = async ({ req, res }: any) => {
    const posts = await prisma.post.findMany();

    return (
        <div>
            <div className=''>
                <div>
                    {/* <CreatePost /> */}
                </div>
                <div>
                    {
                        posts.map(
                            (post: any) => <p key={post.id}>{post.title}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Post