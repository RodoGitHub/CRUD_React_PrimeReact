import { useState, useEffect } from "react";
import ObjectsView from "./ObjectsView";

const ObjectsContainer = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)
    const [searchObjects, setSearchObjects] = useState(false);
   
    const [data , setData] = useState([])
    


    const getObjects = async () => {
        const bodyPost = {
            name: 'laptop',
            color: 'rojo',
            age: 10,
            power: 'prueba-power'

        }

        try {
            const response = await fetch('https://crudcrud.com/api/bebba3caeee2484ca4f1f5d18201e852/unicorns', {
                method: "POST",
                headers: {
                  "content-type": "application/json"
                },
                body: JSON.stringify(bodyPost) }
                );
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


    const getObjetos = async () => {
        const response = await fetch('https://crudcrud.com/api/bebba3caeee2484ca4f1f5d18201e852/unicorns');
        const data = await response.json();  
        setData(data)          
      };


    useEffect(() => {
        if (searchObjects) {
            setLoading(true)
            getObjects();
            getObjetos();
        }
    }, [searchObjects]);

    return (
        <ObjectsView data={data} loading={loading} error={error} setSearchObjects={setSearchObjects} />
    )

}

export default ObjectsContainer