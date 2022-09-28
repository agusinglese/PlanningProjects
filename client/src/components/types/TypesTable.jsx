import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Alert,
  AlertIcon,
  Button,
  Tooltip,
  Icon,
  ButtonGroup,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getProjects,
  getOneProject,
  getOrderName,
} from "../../store/slices/projects/projectsActions";
import { MdOutlineEditNote, MdDeleteSweep } from "react-icons/md";
import { BsArrowDownUp } from "react-icons/bs";

import { useState } from "react";
import { deleteType, getTypes } from "../../store/slices/types/typesActions";

function TypesTable() {
  const dispatch = useDispatch();
  const { msgConfirm } = useSelector((state) => state.messages);
  const { types } = useSelector((state) => state.types);
  const [orderName, setOrderName] = useState("");
  const [aux, setAux] = useState(false);

  const handleOrderName = () => {
    if (orderName === "") {
      setOrderName("asc");
      dispatch(setOrderName("asc"));
    } else if (orderName === "asc") {
      setOrderName("desc");
      dispatch(setOrderName("desc"));
    } else if (orderName === "desc") {
      setOrderName("asc");
      dispatch(getOrderName("asc"));
    }
  };

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch, aux, msgConfirm]);

  const handleDelete = (idType) => {
    dispatch(deleteType(idType));
    setAux(!aux);
  };

  return (
    <Box m="1rem" w="100%">
      <TableContainer>
        {types.length ? (
          <Table variant="simple" colorScheme={"pink"}>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>
                  Nombre
                  <Button
                    variant="ghost"
                    p={0}
                    size="sm"
                    onClick={handleOrderName}
                  >
                    <Icon
                      as={BsArrowDownUp}
                      h={3}
                      w={3}
                      color={orderName !== "" ? "blue" : false}
                    />
                  </Button>
                </Th>
                <Th>Color asignado</Th>

                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {types &&
                types.map((e) => (
                  <Tr key={e.id}>
                    <Td>{e.id}</Td>
                    <Td>{e.name}</Td>
                    <Td>
                      <Input
                        type="color"
                        isReadOnly
                        value={e.color}
                        p={0}
                        border="none"
                        w="30px"
                        h="30px"
                      />
                    </Td>
                    <Td>
                      <Tooltip label="Editar">
                        <Button variant="ghost">
                          <Icon as={MdOutlineEditNote} h={5} w={5} />
                        </Button>
                      </Tooltip>
                      <Tooltip label="Eliminar">
                        <Button
                          variant="ghost"
                          onClick={() => handleDelete(e.id)}
                        >
                          <Icon as={MdDeleteSweep} h={5} w={5} />
                        </Button>
                      </Tooltip>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        ) : (
          <Box display={"flex"} justifyContent="center" m="1rem">
            <Alert status="warning">
              <AlertIcon />
              No se encuentran registros existentes
            </Alert>
          </Box>
        )}
      </TableContainer>
    </Box>
  );
}

export default TypesTable;
