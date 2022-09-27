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

function ProjectsTable() {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);
  const [orderName, setOrderName] = useState("");

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
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <Box>
      <TableContainer>
        {projects.length ? (
          <Table variant="simple" colorScheme={"pink"}>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>
                  Proyecto{" "}
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
                <Th>Tipo</Th>
                <Th>Fecha inicial estimada</Th>
                <Th>Duración [días]</Th>
                <Th>Costo Total</Th>

                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {projects &&
                projects.map((e) => (
                  <Tr key={e.id}>
                    <Td>{e.id}</Td>
                    <Td>{e.name}</Td>
                    <Td>{e.type.name}</Td>
                    <Td>{e.planningDate.split("-").reverse().join("/")}</Td>
                    <Td>{e.duration}</Td>
                    <Td>{e.estimatedCost}</Td>
                    <Td>
                      <Link to={`${e.id}`}>
                        <Button onClick={() => dispatch(getOneProject(e.id))}>
                          Detalles
                        </Button>
                      </Link>
                      <Tooltip label="Editar">
                        <Button variant="ghost">
                          <Icon as={MdOutlineEditNote} h={5} w={5} />
                        </Button>
                      </Tooltip>
                      <Tooltip label="Eliminar">
                        <Button variant="ghost">
                          <Icon as={MdDeleteSweep} h={5} w={5} />
                        </Button>
                      </Tooltip>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>#</Th>
                <Th>Proyecto</Th>
                <Th>Tipo</Th>
                <Th>Fecha inicial estimada</Th>
                <Th>Duración [días]</Th>
              </Tr>
            </Tfoot>
          </Table>
        ) : (
          <Box display={"flex"} justifyContent="center" m="1rem">
            <Alert status="warning">
              <AlertIcon />
              No existen proyectos registrados
            </Alert>
          </Box>
        )}
      </TableContainer>
    </Box>
  );
}

export default ProjectsTable;
