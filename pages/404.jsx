import { useRouter } from "next/router"
import { useEffect } from "react"


export default function NotFound404() {
  const router = useRouter()
  console.log(router)

  useEffect(() => {
    setTimeout(() => {
      router.push(-1)
    }, 3000)
  }, [])

  return <h1>404 - Page Not Found</h1>
}