export default (req,res) => {

    const eventId = req.query.eventId

    if (req.method === 'POST') {

        const {email,text,name} = req.body

        if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
            res.status(422).json({
                message: 'invalid data'
            })
            return
        }

        
        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text
        }

        res.json({
            message: "Added successfully",
            comment: newComment
        })

    }

    if (req.method === 'GET') {

    }
}