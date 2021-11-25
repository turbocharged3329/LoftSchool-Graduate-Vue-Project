import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import axios from 'axios';

const Axios = axios.create({})

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  //чтобы не производились запросы при переходе на страницу авторизации
  if (to.name == "entryPage") {
    next();
    return;
  }

  try {
  await Axios({
    url: "https://api.github.com/user",
    method: "GET",
    headers: {
      Authorization: `token ${localStorage.getItem("token")}`,
    },
  }).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      next()
    }
  })  
} catch (e) {
  next({name: 'entryPage'})
}
});

export default router;
