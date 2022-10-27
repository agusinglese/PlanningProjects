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
  Tag,
  Badge,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getProjects,
  getOneProject,
  getOrderName,
  filterProjects,
  deleteProject,
} from "../../store/slices/projects/projectsActions";
import { MdOutlineEditNote, MdDeleteSweep } from "react-icons/md";
import { BsArrowDownUp } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";

import { useState } from "react";
import { setMsgConfirm } from "../../store/slices/messages/messagesSlices";

function ProjectsTable() {
  const { nameType } = useParams();
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);
  const { msgConfirm } = useSelector((state) => state.messages);
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
    dispatch(filterProjects(nameType));
  }, [dispatch, aux, msgConfirm]);

  const handleDelete = (idProject) => {
    dispatch(deleteProject(idProject));
    setAux(!aux);
  };
  return (
    <Box>
      <TableContainer>
        {projects && projects.length ? (
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
                    <Td>{e.type ? e.type.name : "-"}</Td>
                    <Td>{e.planningDate.split("-").reverse().join("/")}</Td>
                    <Td>{e.duration}</Td>
                    <Td>{e.estimatedCost}</Td>
                    <Td>
                      {(!e.estimatedCost ||
                        !e.duration ||
                        e.tasks.length === 0) && (
                        <Badge colorScheme="red">Completar</Badge>
                      )}

                      <Link to={`/projects/${e.id}`}>
                        <Tooltip label="Ver más">
                          <Button
                            onClick={() => dispatch(getOneProject(e.id))}
                            variant="ghost"
                          >
                            <Icon as={FiMoreVertical} h={5} w={5} />
                          </Button>
                        </Tooltip>
                      </Link>
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
