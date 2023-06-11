"use client"
import { useState, useEffect } from 'react'
import Router from 'next/navigation'

const LoadingIndicator = () => {
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   const startLoading = () => setLoading(true)
  //   const endLoading = () => setLoading(false)

  //   Router.events.on('routeChangeStart', startLoading)
  //   Router.events.on('routeChangeComplete', endLoading)
  //   Router.events.on('routeChangeError', endLoading)

  //   return () => {
  //     Router.events.off('routeChangeStart', startLoading)
  //     Router.events.off('routeChangeComplete', endLoading)
  //     Router.events.off('routeChangeError', endLoading)
  //   }
  // }, [])

  return (
    // loading && (
    //   <div className="loading-indicator">
    //     <h1>Loading</h1>
    //   </div>
    // )
    <div></div>
  )
}

export default LoadingIndicator
