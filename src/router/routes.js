import MainPage from '../components/main-page';
import UserIssuesList from '../components/user-issues-list';
import Slider from '../components/slider';
import Authorization from '../components/authorization/authorization'
import Profile from '../components/profile/profile';
import UserLiked from '../components/user-liked/user-liked';
import UserFollowings from '../components/user-followings/user-followings'

export default [
    {
        name: 'entryPage',
        path: '/',
        component: Authorization
    },
    {
        name: 'MainPage',
        path: '/mainpage',
        component: MainPage,
        children: [
            {
                name: 'UserIssuesList',
                path: 'user-issues',
                component: UserIssuesList,
            },
            {
                name: 'Profile',
                path: 'profile',
                component: Profile,
                children: [
                    {
                        name: 'UserLiked',
                        path: 'user-liked',
                        component: UserLiked,   
                    },
                    {
                        name: 'UserFollowings',
                        path: 'user-followings',
                        component: UserFollowings,   
                    }
                ]
            }
        ]
    },
    {
        name: 'Slider',
        path: '/slider',
        component: Slider,
        props: true
    }
]