import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Icon,
  ButtonGroup,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import ProjectsTable from "./ProjectsTable";
import { FiGrid } from "react-icons/fi";
import { BsBarChartSteps } from "react-icons/bs";
import { VscNewFile } from "react-icons/vsc";
import { TbArrowBack } from "react-icons/tb";
import { Link } from "react-router-dom";
import ProjectModal from "../project/forms/ProjectModal";

function Panel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ButtonGroup>
        <Link to="/">
          <Button>
            <Icon as={TbArrowBack} h={5} w={5} m={2} />
            Menu principal
          </Button>
        </Link>
        <Button onClick={onOpen}>
          <Icon as={VscNewFile} h={5} w={5} m={2} /> Nuevo proyecto
        </Button>
      </ButtonGroup>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1rem">
          <Tab>
            <Icon as={FiGrid} h={4} w={4} mr={2} />
            Proyectos
          </Tab>
          <Tab>
            <Icon as={BsBarChartSteps} h={4} w={4} mr={2} />
            Cronograma General
          </Tab>
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
      <ProjectModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Panel;
