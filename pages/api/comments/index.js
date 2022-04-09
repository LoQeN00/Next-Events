export default (req,res) => {

    if (req.method === 'POST') {
        const {text,name,email} = req.body

        res.json({
            text,
            name,
            email
        })

    } else {
        res.json({
            message: "Wrong type of request"
        })
    }



}