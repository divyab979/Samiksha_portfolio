import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    
    projectImage: {
        type: String,
        required: true,
    },
    projectTitle: {
        type: String,
        required: true,
    },
    projectDescription: {
        type: String,
        required: true,
    },
   
});
export default mongoose.models.Projects || mongoose.model('Projects', projectSchema)

