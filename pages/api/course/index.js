import connectToDb from "@/utils/db"
import courseModel from "@/models/course"
import { isValidObjectId } from "mongoose"


const handler = async (req, res) => {

    connectToDb()

    if (req.method === "POST") {
        // try {

        // } catch (error) {
        //     console.log(error);
        //     return res.status(500).json({ mess: "server err" })
        // }

        const { title } = req.body
        if (title.trim() === "" || title.length < 5) {
            return res.status(422).json({ mess: "not valid title" })
        }
        await courseModel.create({ title })
        return res.status(201).json({ mess: "create succ .. " })


    }

    if (req.method === "GET") {
        if (req.query.q) {
            const { q } = req.query
            const allCourse = await courseModel.find({ title: { $regex: q } })
            res.json(allCourse)
        } else {
            const allCourse = await courseModel.find({})
            res.json(allCourse)
        }

    }

    if (req.method === "DELETE") {
        const { courseID } = req.body
        if (isValidObjectId(courseID)) {
            await courseModel.findOneAndDelete({ _id: courseID })
            res.status(200).json({ mess: "course delete successfuly .." })
        } else {
            res.json({ mess: "this course id not exist .." })

        }


    }

    if (req.method === "PUT") {
        const { id } = req.query
        if (isValidObjectId(id)) {
            const { title } = req.body

            await courseModel.findOneAndUpdate({ _id: id }, { $set: { title } })
            res.json({ mess: "the update successfully .." })

        } else {
            res.status(404).json({ mess: "the id is not valid .. " })
        }

    }
}

export default handler