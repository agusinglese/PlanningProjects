import {
  Icon,
  ButtonGroup,
  Button,
  useDisclosure,
  Box,
  Divider,
  Heading,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";

import { MdOutlineAdd } from "react-icons/md";
import { TbArrowBack } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cleanMsg } from "../../store/slices/messages/messagesSlices";
import NewTypeForm from "./NewTypeForm";
import TypesTable from "./TypesTable";

function PanelTypes() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { msgConfirm, msgError } = useSelector((state) => state.messages);

  const dispatch = useDispatch();
  console.log(msgConfirm);
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
        <Box w={{ base: "100%", sm: "100%", md: "100%", lg: "60%", xl: "60%" }}>
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
          <TypesTable />
        </Box>
      </Box>
      <NewTypeForm onClose={onClose} isOpen={isOpen} />
    </>
  );
}

export default PanelTypes;
