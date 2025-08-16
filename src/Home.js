import { use, useState } from "react";

const Home = () => {
    const [name, setName] = useState("Mario");
    const [age, setAge] = useState(36);

    const handleClick = () => {
        setName("Luigi");
        setAge(age + 1);
    };

    return (
        <div className="home">
            <h2>Home page</h2>
            <p>
                {name} is {age} years old
            </p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default Home;
