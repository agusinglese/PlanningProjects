import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  ModalFooter,
  ModalBody,
  Button,
  ModalHeader,
  InputGroup,
  InputRightElement,
  ListItem,
  List,
  ListIcon,
  Select,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../../store/slices/projects/projectsActions";
import { getTypes } from "../../../store/slices/types/typesActions";

function NewProjectForm({ onClose }) {
  const { types } = useSelector((state) => state.types);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    description: "",
    objetives: [],
  });
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeList = (value) => {
    setForm({
      ...form,
      objetives: [...form.objetives, value],
    });
    setValue("");
  };
  const handleDeleteList = (obj) => {
    setForm({
      ...form,
      objetives: form.objetives.filter((o) => o !== obj),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProject(form));
    onClose();
  };

  return (
    <>
      <ModalHeader>Nuevo proyecto</ModalHeader>
      <ModalBody>
        <form>
          <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => handleChange(e)}
              placeholder="Asignar nombre al proyecto"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Tipo</FormLabel>
            <Select
              name="type"
              value={form.type}
              onChange={(e) => handleChange(e)}
            >
              <option>Seleccionar el tipo de proyecto</option>
              {types &&
                types.map((t) => (
                  <option key={t.id} value={t.name}>
                    {t.name}
                  </option>
                ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel mt="0.5rem">Descripción</FormLabel>
            <Textarea
              type="text"
              name="description"
              value={form.description}
              onChange={(e) => handleChange(e)}
              placeholder="Escribir una breve descripción"
            />
          </FormControl>
          <FormControl>
            <FormLabel mt="0.5rem">Objetivos</FormLabel>

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                name="objetives"
                type="text"
                placeholder="Escribir objetivo"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                borderTop="none"
                borderLeft="none"
                borderRight="none"
              />
              <InputRightElement width="4.3rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  mr="0.5rem"
                  onClick={() => handleChangeList(value)}
                >
                  Agregar
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <List>
            {form.objetives &&
              form.objetives.map((e, index) => (
                <ListItem key={index}>
                  <ListIcon as={BiChevronRight} />
                  {e}
                  <Button
                    onClick={() => handleDeleteList(e)}
                    size="sm"
                    variant="ghost"
                    m="0.5rem"
                  >
                    X
                  </Button>
                </ListItem>
              ))}
          </List>
          <FormControl isRequired>
            <FormLabel mt="0.5rem">Fecha Inicial Estimada</FormLabel>
            <Input
              type="date"
              name="planningDate"
              value={form.planningDate}
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl>
            <FormLabel mt="0.5rem">Duración estimada</FormLabel>
            <Input
              type="number"
              name="duration"
              value={form.duration}
              onChange={(e) => handleChange(e)}
              placeholder="Asignar la duración estimada en días"
            />
          </FormControl>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button variant="ghost" onClick={onClose}>
          Cancelar
        </Button>
        <Button colorScheme="blue" mr={3} onClick={(e) => handleSubmit(e)}>
          Continuar
        </Button>
      </ModalFooter>
    </>
  );
}

export default NewProjectForm;
