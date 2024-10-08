"use client"

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import ConfettiComponent from "@/components/Confetti"
import Link from 'next/link';
import Fireworks from "@/components/Fireworks";

export default function Home() {
    const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

    useEffect(() => {
        const startDate = new Date('2023-10-26T00:00:00')

        const updateElapsedTime = () => {
            const now = new Date()
            const difference = now.getTime() - startDate.getTime()

            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((difference % (1000 * 60)) / 1000)

            setTimeElapsed({ days, hours, minutes, seconds })
        }

        updateElapsedTime()
        const intervalId = setInterval(updateElapsedTime, 1000)

        return () => clearInterval(intervalId)
    }, [])

    const formatNumber = (num: number) => num.toString().padStart(2, '0')

    return (
        <div className="flex flex-col items-center justify-center">
            <ConfettiComponent/>
            <div className="absolute inset-0">
                <Fireworks/>
            </div>
            <h2 className="text-4xl font-bold text-purple-800 mb-8">M&X已经在一起</h2>
            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 bg-opacity-20">
                <div className="text-10xl font-bold text-pink-600 mb-6 drop-shadow-lg animate-pulse leading-none">
                    {timeElapsed.days}
                </div>
                <div className="text-4xl font-semibold text-purple-700">天</div>
            </div>
            <div className="flex justify-center items-center space-x-4 text-4xl font-mono font-bold text-gray-800 mb-4">
                <span>{formatNumber(timeElapsed.hours)}</span>
                <span className="text-pink-500">:</span>
                <span>{formatNumber(timeElapsed.minutes)}</span>
                <span className="text-pink-500">:</span>
                <span>{formatNumber(timeElapsed.seconds)}</span>
            </div>
            <div className="flex justify-center items-center space-x-4 text-lg text-gray-700 mb-8">
                <span className="w-16 text-center">时</span>
                <span className="w-20 text-center">分</span>
                <span className="w-16 text-center">秒</span>
            </div>
            <div style={{height: '6rem'}}></div>
            <Link href="/timeline/0" passHref>
                <Button
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold w-[17rem] h-18 py-4 px-8 rounded-full
                    text-3xl text-center transition-all duration-200 ease-in-out transform hover:scale-110 shadow-lg"
                >
                    <span style={{letterSpacing: '0.8em', marginRight: '-0.8em'}}>开启旅程</span>
                </Button>
            </Link>
        </div>
    )
}