import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function members() {
    return (
        <withPageAuthRequired>
            <h1>
                members onlinyyy
            </h1>
        </withPageAuthRequired>
    )
}