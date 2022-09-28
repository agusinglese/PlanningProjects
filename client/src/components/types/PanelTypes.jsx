import {
  Icon,
  ButtonGroup,
  Button,
  useDisclosure,
  Box,
  Divider,
  Heading,
} from "@chakra-ui/react";

import { MdOutlineAdd } from "react-icons/md";
import { TbArrowBack } from "react-icons/tb";
import { Link } from "react-router-dom";
import TypesTable from "./TypesTable";
function PanelTypes() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Heading as="h2" textAlign={"center"} m="1rem">
        Clasificación de proyectos
      </Heading>
      <Divider />
      <Box
        display="flex"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        w="100vw"
        justifyContent="start"
      >
        <ButtonGroup
          mt="2rem"
          display={"flex"}
          flexDirection="column"
          w={{ base: "100%", sm: "100%", md: "100%", lg: "20%", xl: "20%" }}
          alignItems={"start"}
        >
          <Link to="/" w="100%">
            <Button variant="ghost" w="100%">
              <Icon
                as={TbArrowBack}
                h={10}
                w={10}
                m={2}
                p={2}
                bgColor="blue.300"
                color="white"
              />
              Menu principal
            </Button>
          </Link>

          <Button onClick={onOpen} variant="ghost" mt="1rem">
            <Icon
              as={MdOutlineAdd}
              h={10}
              w={10}
              m={2}
              ml={0}
              p={2}
              bgColor="blue.300"
              color="white"
            />
            Agregar
          </Button>
        </ButtonGroup>

        <TypesTable />
      </Box>
    </>
  );
}

export default PanelTypes;
