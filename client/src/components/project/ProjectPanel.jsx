import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TasksProject from "./TasksProject";
import PaymentsProject from "./PaymentsProject";
import DetailsProject from "./DetailsProject";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOneProject } from "../../store/slices/projects/projectsActions";

function ProjectPanel() {
  const { idProject } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProject(idProject));
  }, [dispatch, idProject]);

  return (
    <>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Detalles</Tab>
          <Tab>Tareas</Tab>
          <Tab>Diagrama de Gantt</Tab>
          <Tab>Pagos asociados</Tab>
          <Tab>Tablero</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DetailsProject />
          </TabPanel>
          <TabPanel>
            <TasksProject />
          </TabPanel>
          <TabPanel>
            <p>Gannt!</p>
          </TabPanel>
          <TabPanel>
            <PaymentsProject />
          </TabPanel>
          <TabPanel>Tablero</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default ProjectPanel;
