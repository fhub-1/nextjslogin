import { useUser } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>...loading please wait</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    return (
      <>
        <h1>Welcome to hack the coding{user.name}</h1>
        <a href="/api/auth/logout">Logout</a>
      </>
    )
  }

  return <a href="/api/auth/login">Login</a>
}
