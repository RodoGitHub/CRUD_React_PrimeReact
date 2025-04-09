import React from "react";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { motion } from 'framer-motion';

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
    const isFormValid = name && color && age !== null && power;

    const confirmDelete = (item) => {
        confirmDialog({
            message: `¿Estás seguro de eliminar a ${item.name}?`,
            header: 'Confirmar eliminación',
            icon: 'pi pi-exclamation-triangle',
            acceptClassName: 'p-button-danger',
            accept: () => onDelete(item),
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-4 w-11 md:w-8 lg:w-6 mx-auto"
        >
            <form onSubmit={handleSubmit} className="p-fluid grid gap-3 mb-4">
                <div className="field col-12 md:col-6">
                    <label htmlFor="name">Nombre</label>
                    <InputText
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className={!name ? 'p-invalid' : ''}
                    />
                    {!name && <small className="p-error">El nombre es requerido.</small>}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor="color">Color</label>
                    <InputText
                        id="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        required
                        className={!color ? 'p-invalid' : ''}
                    />
                    {!color && <small className="p-error">El color es requerido.</small>}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor="age">Edad</label>
                    <InputNumber
                        inputId="age"
                        value={parseInt(age)}
                        onValueChange={(e) => setAge(e.value)}
                        useGrouping={false}
                        required
                        className={age === null ? 'p-invalid' : ''}
                    />
                    {age === null && <small className="p-error">La edad es requerida.</small>}
                </div>

                <div className="field col-12 md:col-6">
                    <label htmlFor="power">Poder</label>
                    <InputText
                        id="power"
                        value={power}
                        onChange={(e) => setPower(e.target.value)}
                        required
                        className={!power ? 'p-invalid' : ''}
                    />
                    {!power && <small className="p-error">El poder es requerido.</small>}
                </div>

                <div className="col-12 text-center">
                    <Button
                        type="submit"
                        label={editingId ? "Actualizar" : "Guardar"}
                        icon="pi pi-save"
                        className="p-button-success"
                        disabled={!isFormValid}
                    />
                </div>
            </form>

            <div className="mb-4 text-center">
                <Button label="Buscar objetos" icon="pi pi-search" onClick={setSearchObjects} />
            </div>

            <h2 className="text-center mb-3">Lista de Productos</h2>
            <DataTable
                value={data}
                stripedRows
                responsiveLayout="scroll"
                loading={data.length === 0}
            >
                <Column field="name" header="Nombre" />
                <Column field="color" header="Color" />
                <Column field="age" header="Edad" />
                <Column field="power" header="Poder" />
                <Column
                    header="Editar"
                    body={(rowData) => (
                        <Button
                            icon="pi pi-pencil"
                            className="p-button-text p-button-warning p-button-sm"
                            onClick={() => onEditInit(rowData)}
                            tooltip="Editar"
                        />
                    )}
                />
                <Column
                    header="Eliminar"
                    body={(rowData) => (
                        <Button
                            icon="pi pi-trash"
                            className="p-button-text p-button-danger p-button-sm"
                            onClick={() => confirmDelete(rowData)}
                            tooltip="Eliminar"
                        />
                    )}
                />
            </DataTable>

            <footer className="mt-6 text-sm text-center text-gray-600">
                <p><strong>Team:</strong> Rodo Palacios, Joni Detsplas, Nico Cardinali, Cristian Druetta</p>
            </footer>

            <ConfirmDialog />
        </motion.div>
    );
};

export default ObjectsView;

