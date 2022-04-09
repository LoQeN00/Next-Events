
export default (req,res) => {
    if (req.method === "POST") {
        const {email} = req.body

        if (!email || !email.includes('@')) {
            res.status(422).json({
                message: "invalid email address"
            })
            return
        }

        res.json({
            email
        })
    }
}