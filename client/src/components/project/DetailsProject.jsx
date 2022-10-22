import { useDispatch, useSelector } from "react-redux";
import {
  Badge,
  Box,
  Container,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOneProject } from "../../store/slices/projects/projectsActions";
import { BiChevronRight } from "react-icons/bi";

function DetailsProject() {
  const { projectDetail } = useSelector((state) => state.projects);
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
        <Box>
          <Heading as="h1">{projectDetail.name}</Heading>
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
            <Box m="1rem">
              <Heading as="h6" fontSize={"md"} mb="1rem" display="inline">
                Fecha inicial estimada:{" "}
              </Heading>
              <Text display="inline">
                {projectDetail.planningDate &&
                  projectDetail.planningDate.split("-").reverse().join("-")}
              </Text>
            </Box>
            <Box m="1rem">
              <Heading as="h6" fontSize={"md"} mb="1rem" display="inline">
                Duración:
              </Heading>
              <Text display="inline"> {projectDetail.duration} días</Text>
            </Box>
          </Box>
          <Box m="1rem">
            <Heading as="h6" fontSize={"md"} mb="1rem" display="inline">
              Costo Estimado:
            </Heading>
            <Text display="inline"> $ {projectDetail.estimatedCost}</Text>
          </Box>
        </Box>
      )}
    </>
  );
}

export default DetailsProject;
