import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  FormControl,
  FormLabel,
  Input,
  List,
  Select,
  ListItem,
  ListIcon,
  InputRightElement,
  Button,
  Textarea,
  InputGroup,
  ModalFooter,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getOneProject,
  putProject,
} from "../../../store/slices/projects/projectsActions";
import { useParams } from "react-router-dom";

function EditProjectForm({ isOpen, onClose }) {
  const { idProject } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProject(idProject));
  }, [dispatch, idProject]);

  const { projectDetail } = useSelector((state) => state.projects);
  const { types } = useSelector((state) => state.types);
  console.log(projectDetail);
  let projectData = {};
  if (projectDetail) {
    projectData = {
      id: projectDetail.id,
      name: projectDetail.name,
      type: projectDetail.type.name || "none",
      description: projectDetail.description,
      objetives: projectDetail.objetives,
      planningDate: projectDetail.planningDate,
      duration: projectDetail.duration,
      estimatedCost: projectDetail.estimatedCost,
      proposals: projectDetail.proposals,
      realCost: projectDetail.realCost,
      realDate: projectDetail.realDate,
    };
  }
  console.log("data", projectData);
  sessionStorage.setItem("projectData", JSON.stringify(projectData));
  const dataForm = JSON.parse(sessionStorage.getItem("projectData"));

  const [form, setForm] = useState(dataForm);
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putProject(form));
  };
  const handleDeleteList = () => {};
  const handleChangeList = () => {};

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Modificar datos</ModalHeader>
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
                    value=""
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
            <Button colorScheme="blue" onClick={(e) => handleSubmit(e)}>
              Modificar proyecto
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditProjectForm;
