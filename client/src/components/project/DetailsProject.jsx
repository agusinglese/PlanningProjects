import { useDispatch, useSelector } from "react-redux";
import { Box, Divider, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOneProject } from "../../store/slices/projects/projectsActions";

function DetailsProject() {
  const { projectDetail } = useSelector((state) => state.projects);
  const { idProject } = useParams();
  console.log(idProject);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProject(1));
  }, [dispatch]);

  console.log(projectDetail);
  return (
    <>
      <Box>
        <Heading as="h1">{projectDetail.name}</Heading>
        <Divider />
      </Box>
    </>
  );
}

export default DetailsProject;
