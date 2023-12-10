import { useState } from 'react';

const Admin = () => {

    const [projectDescription, setProjectDescription] = useState([]);
    const [projectImage, setProjectImage] = useState([]);
    const [projectTitle, setProjectTitle] = useState([]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            projectImage,
            projectDescription,
            projectTitle
        };
        try {
            const response = await fetch('/api/createProject', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Project created successfully');
            } else {
                console.error('Failed to create project');
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto  p-4">

                <div className="mb-4">
                    <label htmlFor="projectImage" className="block text-lg mb-1">
                        project Image URL
                    </label>
                    <input
                        type="text"
                        id="projectImage"
                        className="w-full px-4 py-2 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
                        placeholder="Project Image URL"
                        value={projectImage}
                        onChange={(e) => setProjectImage(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="projectDescription" className="block text-lg mb-1">
                        Description
                    </label>
                    <input
                        type="text"
                        id="projectDescription"
                        className="w-full px-4 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Description"
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="projectTitle" className="block text-lg mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        id="projectTitle"
                        className="w-full px-4 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Title"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Post
                </button>
            </form>

        </div>

    );
};

export default Admin;