import { CheckIcon, ThumbUpIcon, UserIcon } from '@heroicons/react/solid'

export const navigation = [
    {
        label: 'Dashboard',
        href: '/'
    },
    {
        label: 'Journal',
        href: '/journal'
    },
    {
        label: 'Feed',
        href: '/feed'
    }
]

export const upcomingDates = [
    {
        id: 1,
        date: 'January 10th, 2022',
        time: '5:00 PM',
        datetime: '2022-01-10T17:00',
        name: 'Scotiabank Jamaica Group, Limited (Placeholder)',
        imageUrl:
            'https://play-lh.googleusercontent.com/bcftETD6sC224oU0gEDOh6e86-HGQlbZaL-kzYZ0Asos3CvDfETJhD5l6C5SUtZ7G_E=w480-h960-rw',
        location: 'Kingston, Jamaica',
    },
    {
        id: 2,
        date: 'January 10th, 2022',
        time: '5:00 PM',
        datetime: '2022-01-10T17:00',
        name: 'National Commercial Group, Limited (Placeholder)',
        imageUrl: 'https://scontent.fpei1-1.fna.fbcdn.net/v/t39.30808-6/251329907_10158354207417611_1674666004679794502_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SPKX2-qKRq0AX_7AFzZ&_nc_ht=scontent.fpei1-1.fna&oh=00_AT880tQ5C0ycXkyqFKN5BORolJeGiJ7gfBXDvr02eIkgTg&oe=63277023',
        location: 'Kingston, Jamaica',
    },
    {
        id: 3,
        date: 'January 10th, 2022',
        time: '8:00 AM',
        datetime: '2022-01-10T17:00',
        name: 'Edufocal Group, Limited (Placeholder)',
        imageUrl:
            'https://www.jamstockex.com/wp-content/uploads/2022/03/EduFocal-websized-900-x-600-Logo-with-Tagline-vertical-RGB.png',
        location: 'Kingston, Jamaica',
    },
]


export const timeline = [
    {
        id: 1,
        content: 'Dre Williams posted a new article on',
        target: 'Upcoming IPO Dates',
        href: '#',
        date: 'Sep 20',
        datetime: '2020-09-20',
        icon: UserIcon,
        iconBackground: 'bg-gray-400',
    },
    {
        id: 2,
        content: 'Jamie Smith posted a new article on',
        target: 'Article',
        href: '#',
        date: 'Sep 22',
        datetime: '2020-09-22',
        icon: ThumbUpIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 3,
        content: 'Completed phone screening with',
        target: 'Martha Gardner',
        href: '#',
        date: 'Sep 28',
        datetime: '2020-09-28',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
    },
    {
        id: 4,
        content: 'Advanced to interview by',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 30',
        datetime: '2020-09-30',
        icon: ThumbUpIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 5,
        content: 'Completed interview with',
        target: 'Katherine Snyder',
        href: '#',
        date: 'Oct 4',
        datetime: '2020-10-04',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
    },
]


export const journalPosts = [
    {
        title: 'Boost your conversion rate',
        href: '#',
        image: 'https://images.unsplash.com/photo-1663138763894-0cc4a5421dab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        category: { name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800' },
        description:
            'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Paul York',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        readingTime: '6 min',
    },
    {
        title: 'How to use search engine optimization to drive sales',
        href: '#',
        image: 'https://images.unsplash.com/photo-1663138763894-0cc4a5421dab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        category: { name: 'Video', href: '#', color: 'bg-pink-100 text-pink-800' },
        description:
            'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        author: {
            name: 'Dessie Ryan',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        readingTime: '4 min',
    },
    {
        title: 'Improve your customer experience',
        href: '#',
        image: 'https://images.unsplash.com/photo-1663138763894-0cc4a5421dab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        category: { name: 'Case Study', href: '#', color: 'bg-green-100 text-green-800' },
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        author: {
            name: 'Easer Collins',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        readingTime: '11 min',
    },
]
