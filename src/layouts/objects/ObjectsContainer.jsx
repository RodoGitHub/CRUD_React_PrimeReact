import { useState, useEffect } from "react";
import ObjectsView from "./ObjectsView";

const ObjectsContainer = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [age, setAge] = useState("");
    const [power, setPower] = useState("");
    const [editingId, setEditingId] = useState(null);

    const API_URL = "https://crudcrud.com/api/1c00d1236f8440a58c8e810ffa898075/unicorns";

    const getObjetos = async () => {
        try {
            const response = await fetch(API_URL);
            const json = await response.json();  
            setData(json);
        } catch (e) {
            console.error("Error al obtener objetos:", e.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const object = { name, color, age, power };

        try {
            let response;

            if (editingId) {
                response = await fetch(`${API_URL}/${editingId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(object)
                });
                setEditingId(null);
                await getObjetos();
            } else {
                response = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(object)
                });

                const saved = await response.json();
                setData((prev) => [...prev, saved]);
            }

            setName("");
            setColor("");
            setAge("");
            setPower("");
        } catch (err) {
            console.error("Error:", err.message);
        }
    };

    const onEditInit = (item) => {
        setName(item.name);
        setColor(item.color);
        setAge(item.age);
        setPower(item.power);
        setEditingId(item._id);
    };

    const onDelete = async (item) => {
        try {
            const response = await fetch(`${API_URL}/${item._id}`, {
                method: "DELETE",
            });
            if (!response.ok) throw new Error("Error al eliminar");
            await getObjetos();
        } catch (err) {
            console.error("Error al eliminar:", err.message);
        }
    };

    useEffect(() => {
        getObjetos();
    }, []);

    return (
        <ObjectsView
            data={data}
            name={name}
            setName={setName}
            color={color}
            setColor={setColor}
            age={age}
            setAge={setAge}
            power={power}
            setPower={setPower}
            setSearchObjects={getObjetos} 
            handleSubmit={handleSubmit}
            onEditInit={onEditInit}
            editingId={editingId}
            onDelete={onDelete}
        />
    );
};

export default ObjectsContainer;
