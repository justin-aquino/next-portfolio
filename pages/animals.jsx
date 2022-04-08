import axios from "axios"
const Animals = ({data, otherProp}) => {
  return (
    <div>Random Animal: {data.random}</div>
  )
}

export default Animals

//export a function thats called "getStaticProps"

export async function getStaticProps() {
    //we can do all of our ajax/axios/fetch here
    // we can call external APIs express back end next backend

    const { data } = await axios.get(`${process.env.SERVER_URL}/api/animals`)

    console.log(data)

    return {
        props: {
            data,
            otherProp: "Hi!"
        }
    }
}

//asdfasdfasdf