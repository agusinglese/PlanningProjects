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
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneType,
  getTypes,
  putType,
} from "../../store/slices/types/typesActions";

function EditTypeForm({ isOpen, onClose, idType }) {
  const { typeDetail } = useSelector((state) => state.types);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    form.name = typeDetail.name;
    form.color = typeDetail.color;
  }, [typeDetail, form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putType(form));
    onClose();

    dispatch(getTypes());
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modificar</ModalHeader>
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
              Modificar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditTypeForm;
