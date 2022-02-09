import {useEffect, useState} from 'react';

function ListUsers(){
    const [advice, setAdvice] = useState(null);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.id);
                setAdvice(json.slip.advice);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <p>{advice}</p>
        </div>
    );
}

export default ListUsers;