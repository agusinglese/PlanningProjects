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
  }, [dispatch]);

  console.log(projectDetail);
  return (
    <>
      <Box>
        <Heading as="h1">{projectDetail.name}</Heading>
        <Divider />

        <Box>
          {/*<Badge
            mt="1rem"
            variant="subtle"
            bgColor={`${projectDetail.type && projectDetail.type.color}40`}
            border={`1px solid ${
              projectDetail.type && projectDetail.type.color
            }`}
            color={projectDetail.type && projectDetail.type.color}
          >
            {projectDetail.type.name}
          </Badge>*/}
          <Box border={"1px solid red"} m="1rem">
            <Text textAlign={"justify"}>{projectDetail.description}</Text>
          </Box>
          <Box m="1rem">
            <Heading as="h6" fontSize={"lg"} mb="1rem">
              Objetivos
            </Heading>
            <List spacing={2}>
              {projectDetail.objetives.length
                ? projectDetail.objetives.map((e) => (
                    <ListItem>
                      <ListIcon as={BiChevronRight} />
                      {e}
                    </ListItem>
                  ))
                : "No se han definido los objetivos"}
            </List>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DetailsProject;
