import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ProjectsTable from "./ProjectsTable";

function Panel() {
  return (
    <>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Proyectos</Tab>
          <Tab>Nose</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ProjectsTable />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default Panel;
