import { Router } from "./route.js"

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universe.html", "/pages/universe.html")
router.add("/exploration.html", "/pages/exploration.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
