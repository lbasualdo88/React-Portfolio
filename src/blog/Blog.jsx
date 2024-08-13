import React from 'react';
import useBlog from '../hooks/useBlog';

export default function Blog() {
    const { post } = useBlog();
    const baseURL = import.meta.env.VITE_API_URL;
    console.log(post);

    const createContentWithImages = (post) => {
        let description = post.description; 


        if (post.images && post.images.length > 0) {
            post.images.forEach((image, index) => {
                const regex = new RegExp(`\\{imagen\\[${index}\\]\\}`, 'g');
                const imageTag = `<img src="${baseURL}/${image.image_path}" alt="imagen ${index}" />`;
                description = description.replace(regex, imageTag);
                console.log(imageTag)
            });
        }
        return description;
    };

    return (
        <div className="bg-gray-200 dark:bg-dark-color1 p-8 flex flex-col h-full">
            <div className="w-auto p-8">
                <h1 className="text-center text-bold font-krub text-color8 uppercase text-4xl dark:text-dark-color8">Mis Post</h1>
            </div>
            <div className="flex flex-col">
                {post.map((post, index) => (
                    <section key={index} className="m-8 p-8 shadow-custom bg-color1 rounded-lg dark:bg-dark-color1 dark:shadow-custom-dark">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                            <div className="flex flex-col">
                                <h2 className="font-bold text-3xl text-color8 dark:text-dark-color8 text-center">{post.title}</h2>
                                <span className="text-2xl text-color5 dark:text-dark-color5">Categoria: {post.categoria}</span>
                                <div className="text-2xl text-color5 dark:text-dark-color5" dangerouslySetInnerHTML={{ __html: createContentWithImages(post) }} />
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
