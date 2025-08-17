import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "My new website",
            body: "lorem ipsum....",
            author: "Mario",
            id: 1,
        },
        {
            title: "Welcome party",
            body: "lorem ipsum....",
            author: "Yoshi",
            id: 2,
        },
        {
            title: "Web dev top tips",
            body: "lorem ipsum....",
            author: "Mario",
            id: 3,
        },
    ]);

    const [name, setName] = useState("Mario");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        console.log(`Use Effect Run`);
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <BlogList
                blogs={blogs}
                title="All blogs"
                handleDelete={handleDelete}
            />
            <button onClick={() => setName("luigi")}>Change Name</button>
            <p>{name}</p>
        </div>
    );
};

export default Home;
