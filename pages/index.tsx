import type { NextPage } from 'next'
import React, { useState } from 'react'
import { authProtected } from '../modules/withAuth'
import { timeOfDayMessage } from '../modules/@internal'
import { useAuthenticationStatus, useUserData } from '@nhost/nextjs'
import { IPOCalendar, ActivityFeed } from '../components/layout'

const Home: NextPage = () => {
  const timeOfDay = timeOfDayMessage()
  const user = useUserData()
  return (
    <>
      <section className='py-20 w-full md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="rounded-lg  overflow-hidden ">
          <h2 className="sr-only" id="profile-overview-title">
            Profile Overview
          </h2>
          <div className=" py-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">

                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                  <p className="text-md font-medium italic text-gray-600">Welcome back, {user?.displayName} </p>
                  <p className="text-4xl font-bold text-gray-900 sm:text-5xl mt-2">{timeOfDay}</p>

                </div>
              </div>
            </div>
          </div>
        </div>



        <div className='mt-4 flex flex-col md:flex-row'>
          <div className='w-full md:w-4/5'>


            <video class="w-11/12 mb-6" autoplay="" muted={true} controls="">
              <source src="https://flowbite.com/docs/videos/flowbite.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <IPOCalendar></IPOCalendar>
          </div>

          <div className='w-full md:w-1/5'>
            <ActivityFeed></ActivityFeed>
          </div>
        </div>
      </section>

    </>
  )
}

export default authProtected(Home)
