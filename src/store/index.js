import {createStore} from 'vuex';
import repositories from './modules/repositories';
import user from './modules/user';

export default createStore({
    modules: {
        repositories,
        user
    }
})
