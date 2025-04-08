import { useState, useEffect } from "react";
import ObjectsView from "./ObjectsView";

const ObjectsContainer = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)
    const [searchObjects, setSearchObjects] = useState(false)

    const getObjects = async () => {
        const bodyPost = {
            name: 'laptop',
            price: 2000
        }

        try {
            const response = await fetch(`https://api.restful-api.dev/objects`, {
                method: 'POST',
                body: JSON.stringify(bodyPost)
            });
            if (response.status === 200) {
                const data = await response.json();
                setUsers(data)

            } else {
                setError(response.statusText)
            }
        } catch (e) {
            console.log(e.message)
        } finally {
            setLoading(false)
            setSearchObjects(false)
        }

    }

    useEffect(() => {
        if (searchObjects) {
            setLoading(true)
            getObjects();
        }
    }, [searchObjects]);

    return (
        <ObjectsView users={users} loading={loading} error={error} setSearchObjects={setSearchObjects} />
    )

}

export default ObjectsContainer