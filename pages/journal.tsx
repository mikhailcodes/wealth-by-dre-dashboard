import type { NextPage } from 'next'
import React, { useState } from 'react'
import { authProtected } from '../modules/withAuth'
import { timeOfDayMessage } from '../modules/@internal'
import { useAuthenticationStatus, useUserData } from '@nhost/nextjs'
import { JournalFeed } from '../components/layout'

const Journal: NextPage = () => {
  const timeOfDay = timeOfDayMessage()
  const user = useUserData()
  return (
    <>
      <section className='py-20 w-full md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <JournalFeed></JournalFeed>
      </section>

    </>
  )
}

export default authProtected(Journal)
