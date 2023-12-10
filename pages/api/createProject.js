import Projects from "@/models/Projects";
import connectDB from "@/utils/connectDB";
connectDB();
export default async function handler(req, res) {
    
    try {
      const { projectImage, projectDescription, projectTitle} = req.body;
      const project = new Projects({
      projectImage,
      projectDescription,
      projectTitle
    });

    await project.save();
      res.status(200).json({ success: true, data: project });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }