import { useState, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import ObjectsView from "./ObjectsView";

const ObjectsContainer = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [age, setAge] = useState("");
    const [power, setPower] = useState("");
    const [editingId, setEditingId] = useState(null);

    const toast = useRef(null);
    const API_URL = "https://crudcrud.com/api/7e1f21274de44c6f88529281f3b40112/unicorns";

    const getObjetos = async () => {
        try {
            const response = await fetch(API_URL);
            const json = await response.json();
            setData(json);
        } catch (e) {
            toast.current?.show({
                severity: "error",
                summary: "Error al cargar",
                detail: e.message,
                life: 3000,
            });
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

                if (response.ok) {
                    toast.current?.show({ severity: "success", summary: "Actualizado", detail: "El objeto fue actualizado" });
                    setEditingId(null);
                    await getObjetos();
                } else {
                    throw new Error("Error al actualizar");
                }
            } else {
                response = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(object)
                });

                if (response.ok) {
                    const saved = await response.json();
                    setData((prev) => [...prev, saved]);
                    toast.current?.show({ severity: "success", summary: "Creado", detail: "Objeto guardado exitosamente" });
                } else {
                    throw new Error("Error al guardar");
                }
            }

            setName("");
            setColor("");
            setAge("");
            setPower("");
        } catch (err) {
            toast.current?.show({ severity: "error", summary: "Error", detail: err.message });
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

            if (!response.ok) throw new Error("No se pudo eliminar");

            toast.current?.show({ severity: "success", summary: "Eliminado", detail: `${item.name} fue eliminado` });
            await getObjetos();
        } catch (err) {
            toast.current?.show({ severity: "error", summary: "Error al eliminar", detail: err.message });
        }
    };

    useEffect(() => {
        getObjetos();
    }, []);

    return (
        <>
            <Toast ref={toast} />
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
        </>
    );
};

export default ObjectsContainer;

