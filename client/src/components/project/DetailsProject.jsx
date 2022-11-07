import { useDispatch, useSelector } from "react-redux";
import {
  Badge,
  Box,
  Container,
  Divider,
  Heading,
  List,
  ListIcon,
  Button,
  Icon,
  ListItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOneProject } from "../../store/slices/projects/projectsActions";
import { BiChevronRight } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import EditProjectForm from "./forms/EditProjectForm";

function DetailsProject() {
  const { projectDetail } = useSelector((state) => state.projects);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { idProject } = useParams();
  console.log(idProject);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProject(idProject));
  }, [dispatch, idProject]);

  console.log(projectDetail);
  return (
    <>
      {projectDetail && (
        <Box display={"flex"} justifyContent="center">
          <Box w="90vw">
            <Box display="flex" justifyContent={"space-between"}>
              <Heading as="h1">{projectDetail.name}</Heading>
              <Button mr="1rem" onClick={() => onOpen()}>
                <Icon as={FaRegEdit} />
              </Button>
            </Box>
            <Divider />
            {projectDetail && projectDetail.type && (
              <Badge color={projectDetail.type.color}>
                {projectDetail.type.name}
              </Badge>
            )}
            <Box>
              <Box border={"1px solid red"} m="1rem">
                <Text textAlign={"justify"}>{projectDetail.description}</Text>
              </Box>
              <Box m="1rem">
                <Heading as="h6" fontSize={"lg"} mb="1rem">
                  Objetivos
                </Heading>
                <List spacing={2}>
                  {projectDetail.objetives && projectDetail.objetives.length ? (
                    projectDetail.objetives.map((e) => (
                      <ListItem>
                        <ListIcon as={BiChevronRight} />
                        {e}
                      </ListItem>
                    ))
                  ) : (
                    <Text>No se han definido los objetivos</Text>
                  )}
                </List>
              </Box>
              <Box m="1rem">
                <Heading as="h6" fontSize={"lg"} mb="1rem">
                  Propuestas
                </Heading>
                <List spacing={2}>
                  {projectDetail.proposals && projectDetail.proposals.length ? (
                    projectDetail.proposals.map((e) => (
                      <ListItem>
                        <ListIcon as={BiChevronRight} />
                        {e}
                      </ListItem>
                    ))
                  ) : (
                    <Text>No se han definido las propuestas</Text>
                  )}
                </List>
              </Box>
            </Box>
            <Box>
              <Box m="1rem" display="flex">
                <Box w="50%">
                  <Heading as="h6" fontSize={"md"} mb="1rem" display="inline">
                    Fecha inicial estimada:{" "}
                  </Heading>
                  <Text display="inline">
                    {projectDetail.planningDate &&
                      projectDetail.planningDate.split("-").reverse().join("-")}
                  </Text>
                </Box>

                <Box w="50%">
                  <Heading as="h6" fontSize={"md"} mb="1rem" display="inline">
                    Fecha inicial real:{" "}
                  </Heading>
                  <Text display="inline">
                    {projectDetail.realDate &&
                      projectDetail.realDate.split("-").reverse().join("-")}
                  </Text>
                </Box>
              </Box>
              <Box m="1rem" display="flex">
                <Box w="50%">
                  <Heading as="h6" fontSize={"md"} mb="1rem" display="inline">
                    Duración estimada:
                  </Heading>
                  <Text display="inline"> {projectDetail.duration} días</Text>
                </Box>
                <Box w="50%">
                  <Heading as="h6" fontSize={"md"} mb="1rem" display="inline">
                    Duración real:
                  </Heading>
                  <Text display="inline"> calcular días</Text>
                </Box>
              </Box>
            </Box>
            <Box m="1rem" display="flex">
              <Box w="50%">
                <Heading as="h6" fontSize={"md"} mb="1rem" display="inline">
                  Costo Estimado:
                </Heading>
                <Text display="inline"> $ {projectDetail.estimatedCost}</Text>
              </Box>
              <Box w="50%">
                <Heading as="h6" fontSize={"md"} mb="1rem" display="inline">
                  Costo Real:
                </Heading>
                <Text display="inline"> $ sumar costos</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      <EditProjectForm onClose={onClose} isOpen={isOpen} />
    </>
  );
}

export default DetailsProject;
