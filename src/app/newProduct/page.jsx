'use client'
import { useState, useEffect } from "react";
import DynamicForm from '../../components/DynamicForm'
import Modal from '../../components/Modal'
import SuccessModal from '../../components/SuccessModal'
import productProps from '../../models/productProps'

const NewProducts= () => {

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [clientToDelete, setClientToDelete] = useState(null);
    const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
    
    const closeDeleteModal = () => {
        setClientToDelete(null);
        setIsDeleteModalOpen(false);
      };
      
      const handleEditCliente = () => {
        setSelectedCliente();
        setIsFormVisible(true);
      };

      const handleDelete = () => {
        openDeleteModal();
      };

      const handleNewClick = () => {
        setSelectedCliente(null);
        setIsFormVisible(true);
      };
      
    
    const [Product, setProduct] = useState({
        name: "",
        price: 0,
        description: "",
    });

    const handleChange = (e) => {
            console.log(e)
        }
    return (
        <>
        <div>
        <Modal
          isOpen={isDeleteModalOpen}
          title="Confirmar Eliminación"
          message={`¿Estás seguro de que deseas eliminar al cliente ${clientToDelete?.nombre}?`}
          onConfirm={async () => {
            try {
              if (clientToDelete) {
                await deleteCliente(clientToDelete.id);
                closeDeleteModal();
                setIsDeleteSuccess(true);
                loadClientes();
              }
            } catch (error) {
              console.error("Error al eliminar el cliente:", error);
            }
          }}
          onCancel={closeDeleteModal}
          // @ts-ignore
          onUpdate=""
          showUpdateButton={false}
          showConfirmButton={true} // Configura según tus necesidades
        />
        
        <SuccessModal
          isOpen={isDeleteSuccess}
          onClose={() => setIsDeleteSuccess(false)}
          message="El cliente se ha eliminado correctamente."
          buttonText="Aceptar"
        />
        <Modal
          isOpen={isFormVisible}
          title= "Nuevo Cliente"
          onCancel={() => {
            setIsFormVisible(false);
            setSelectedCliente(null);
          }}
          showCancelButton={true}
          showConfirmButton={false}
          showUpdateButton={false}
          onConfirm=""
        ></Modal>

            <DynamicForm 
            columns={1} 
            formProps={productProps}
            showCreateButton={true}
            showUpdateButton={true}
            />
        </div>
        </>
    )
}

export default NewProducts;