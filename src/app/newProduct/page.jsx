'use client'
import { useEffect, useState } from "react";
import DynamicForm from '../../components/DynamicForm';
import Modal from '../../components/Modal';
import SuccessModal from '../../components/SuccessModal';
import productProps from '../../models/productProps';
import axios from "axios";

const NewProducts = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [clientToDelete, setClientToDelete] = useState(null);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });

  const closeDeleteModal = () => {
    setClientToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleEditCliente = () => {
    setSelectedProduct(null); // Assuming you want to open the form for a new entry
    setIsFormVisible(true);
  };

  const handleDelete = () => {
    openDeleteModal();
  };

  const handleNewClick = () => {
    setSelectedProduct(null);
    setIsFormVisible(true);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/api/products', product);
      console.log(res);
      setIsSubmitSuccess(true);
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  const handleSuccessModalClose = () => {
    setIsFormVisible(false);
    setIsSubmitSuccess(false);
    setProduct({
      name: "",
      price: 0,
      description: "",
    });
  };

  return (
    <>
      <div>
        <button onClick={handleNewClick}>New</button>
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
          title="Nuevo Cliente"
          onCancel={handleSuccessModalClose}
          showCancelButton={true}
          showConfirmButton={false}
          showUpdateButton={false}
          onConfirm=""
        >
          <DynamicForm
            columns={1}
            onSubmit={handleSubmit}
            formProps={productProps} // Make sure to replace this with your actual props
            showCreateButton={true}
            showUpdateButton={false}
          />
        </Modal>

        <SuccessModal
          isOpen={isSubmitSuccess}
          onClose={handleSuccessModalClose}
          message="Producto ingresado correctamente."
          buttonText="Aceptar"
        />
      </div>
    </>
  );
};

export default NewProducts;
