import MainPage from '../components/main-page';
import UserIssuesList from '../components/user-issues-list';
import Slider from '../components/slider';
import Authorization from '../components/authorization/authorization'

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