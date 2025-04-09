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

    // Obtener todos los objetos
    const getObjetos = async () => {
        try {
            const response = await fetch(API_URL);
            const json = await response.json();  
            setData(json);
        } catch (e) {
            console.error("Error al obtener objetos:", e.message);
        }
    };

    // Crear o actualizar
    const handleSubmit = async (e) => {
        e.preventDefault();
        const object = { name, color, age, power };

        try {
            let response;

            if (editingId) {
                // PUT (editar)
                response = await fetch(`${API_URL}/${editingId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(object) // NO incluir _id
                });
                setEditingId(null);
                await getObjetos(); // refresca lista
            } else {
                // POST (crear nuevo)
                response = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(object)
                });

                const saved = await response.json();
                setData((prev) => [...prev, saved]); // agrega a la lista
            }

            // Limpiar formulario
            setName("");
            setColor("");
            setAge("");
            setPower("");
        } catch (err) {
            console.error("Error:", err.message);
        }
    };

    // Inicializar edición
    const onEditInit = (item) => {
        setName(item.name);
        setColor(item.color);
        setAge(item.age);
        setPower(item.power);
        setEditingId(item._id);
    };

    // Eliminar objeto
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
        getObjetos(); // carga inicial
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
