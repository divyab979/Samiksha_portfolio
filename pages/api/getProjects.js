import Projects from '@/models/Projects';
import connectDB from '../../utils/connectDB';
// Connect to MongoDB
connectDB();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const projects = await Projects.find().sort({ date: -1 });
      res.status(200).json({ success: true, data: projects });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(404).json({ message: 'Not found' });
  }
}