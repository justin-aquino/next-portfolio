
const animals = (req,res) => {
    const animals = [
        "cat",
        "dog",
        "ostrich",
        "guinea pig",
        "pangolin"
    ]

    const random = animals[Math.floor(Math.random() * animals.length)]
    res.status(200).json({random})
}

export default animals