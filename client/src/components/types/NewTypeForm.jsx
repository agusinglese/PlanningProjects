import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createType, getTypes } from "../../store/slices/types/typesActions";
function NewTypeForm({ isOpen, onClose }) {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createType(form));
    onClose();
    setForm({});
    dispatch(getTypes());
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nuevo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input
                  name="name"
                  type="name"
                  value={form.name}
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel mt="1rem">Seleccionar un color:</FormLabel>
                <Input
                  name="color"
                  type="color"
                  value={form.color}
                  onChange={(e) => handleChange(e)}
                  w="50%"
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue" onClick={(e) => handleSubmit(e)}>
              Agregar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NewTypeForm;
