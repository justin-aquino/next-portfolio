//next proves hooks for using params
import { useRouter } from "next/router"


const UserIdPage = () => {

    //open an instance of useRouter
    const router = useRouter()

    //pull the path param (called query) from the router object
    const { userId } = router.query
  return (
    <div>
        <h1>hello user, with an id of {userId}</h1>


    </div>
  )
}




export default UserIdPage