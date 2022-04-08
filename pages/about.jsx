//import ssr caching image tag
import Image from "next/image"
import styles from "../styles/About.module.css"

const About = () => {
  return (
    <div>
        <h1 className={styles.tealText}>Justin Aquino</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet culpa pariatur optio quaerat iusto nesciunt nisi! Rem error culpa quo eveniet laboriosam vel, maxime dicta doloremque? Non, voluptatum accusamus?</p>
        {/* loading an image locally */}
        <Image 
            src="/tats.png"
            alt="tats"
            width={500}
            height={500}
        />

    {/* loading image from a site */}

    <Image 
        src="https://placekitten.com/300/300"
        alt="kitty"
        width={300}
        height={300}
    /> 

    {/* need to add whitelisted domain names in config to tell next that the domain is trusted. */}
    </div>


  )
}

export default About