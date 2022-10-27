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
  Box,
  Alert,
  AlertDescription,
  AlertIcon,
} from "@chakra-ui/react";
import ProjectsTable from "./ProjectsTable";
import { FiGrid } from "react-icons/fi";
import { BsBarChartSteps } from "react-icons/bs";
import { VscNewFile } from "react-icons/vsc";
import { TbArrowBack } from "react-icons/tb";
import { Link } from "react-router-dom";
import ProjectModal from "../project/forms/ProjectModal";
import { useDispatch, useSelector } from "react-redux";
import { cleanMsg } from "../../store/slices/messages/messagesSlices";

function Panel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { msgConfirm, msgError } = useSelector((state) => state.messages);

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
            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              }}
            >
              {(msgConfirm || msgError) && (msgConfirm.msg || msgError.msg) && (
                <Alert status={msgConfirm.msg ? "success" : "error"} m="1rem">
                  <AlertIcon />
                  <Box>
                    <AlertDescription>
                      {msgConfirm.msg || msgError.msg}
                    </AlertDescription>
                  </Box>
                  <Button
                    alignSelf="flex-start"
                    position="absolute"
                    right={5}
                    top={1}
                    _hover={{ bgColor: "transparent", transform: "scale(1.3)" }}
                    onClick={() => {
                      dispatch(cleanMsg({}));
                    }}
                    variant="ghost"
                  >
                    X
                  </Button>
                </Alert>
              )}

              <ProjectsTable />
            </Box>
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
