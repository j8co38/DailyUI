import Home from "../components/home/home";
import Article from "../components/article/article";

export default [
  {
    path: "/",
    component: Home,
    name: "home"
  },
  {
    path: "/article/:slug",
    component: Article,
    name: "article"
  }
]
