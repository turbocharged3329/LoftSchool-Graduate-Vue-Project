import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   //чтобы не производились запросы при переходе на страницу авторизации
//   if (to.name == "Authorization") {
//     next();
//     return;
//   }

//   this.axios({
//     url: "https://api.github.com/user",
//     method: "GET",
//     headers: {
//       Authorization: `token ${localStorage.getItem("token")}`,
//     },
//   }).then((response) => {
//     if (response.status >= 200 && response.status < 300) {
//       next();
//     } else {
//     if (response.status == '401') throw new Error();
//       next({ name: "Authorization" });
//     }
//   });
// });

export default router;
