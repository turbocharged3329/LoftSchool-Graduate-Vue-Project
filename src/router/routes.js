import MainPage from '../components/main-page';
import UserIssuesList from '../components/user-issues-list';
import Slider from '../components/slider';

export default [
    {
        name: 'MainPage',
        path: '/',
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
    }
]