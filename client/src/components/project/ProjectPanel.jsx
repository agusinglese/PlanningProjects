import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TasksProject from "./TasksProject";
import PaymentsProject from "./PaymentsProject";
import DetailsProject from "./DetailsProject";
import GanttProject from "./GanttProject";

function ProjectPanel() {
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
            <GanttProject />
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
