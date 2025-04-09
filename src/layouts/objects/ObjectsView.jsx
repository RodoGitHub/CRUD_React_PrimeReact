import React from "react";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const ObjectsView = ({
    data,
    name,
    setName,
    color,
    setColor,
    age,
    setAge,
    power,
    setPower,
    setSearchObjects,
    handleSubmit,
    onEditInit,
    onDelete,
    editingId
}) => {
    return (
        <div className="p-4 w-11 md:w-8 lg:w-6">
            <form onSubmit={handleSubmit} className="p-fluid p-formgrid p-grid gap-3 mb-4">
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="name">Nombre</label>
                    <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="color">Color</label>
                    <InputText id="color" value={color} onChange={(e) => setColor(e.target.value)} required />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="age">Edad</label>
                    <InputNumber inputId="age" value={parseInt(age)} onValueChange={(e) => setAge(e.value)} required useGrouping={false} />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="power">Poder</label>
                    <InputText id="power" value={power} onChange={(e) => setPower(e.target.value)} required />
                </div>
                <div className="p-col-12">
                    <Button type="submit" label={editingId ? "Actualizar" : "Guardar"} icon="pi pi-save" className="p-button-success" />
                </div>
            </form>

            <div className="mb-4">
                <Button label="Buscar objetos" icon="pi pi-search" onClick={setSearchObjects} />
            </div>

            <h2>Lista de Usuarios</h2>
            <DataTable value={data} stripedRows responsiveLayout="scroll">
                <Column field="name" header="Nombre" />
                <Column field="color" header="Color" />
                <Column field="age" header="Edad" />
                <Column field="power" header="Poder" />
                <Column
                    header="Editar"
                    body={(rowData) => (
                        <Button
                            icon="pi pi-pencil"
                            className="p-button-warning p-button-sm"
                            onClick={() => onEditInit(rowData)}
                        />
                    )}
                />
                <Column
                    header="Eliminar"
                    body={(rowData) => (
                        <Button
                            icon="pi pi-trash"
                            className="p-button-danger p-button-sm"
                            onClick={() => onDelete(rowData)}
                        />
                    )}
                />
            </DataTable>

            <footer className="mt-6 text-sm text-center text-gray-600">
                <p><strong>Team:</strong> Rodo Palacios, Joni Detsplas, Nico Cardinali, Cristian Druetta</p>
            </footer>
        </div>
    );
};

export default ObjectsView;
