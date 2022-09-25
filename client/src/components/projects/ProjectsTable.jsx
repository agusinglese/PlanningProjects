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
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProjects } from "../../store/slices/projects/projectsActions";

function ProjectsTable() {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);

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
                <Th>Proyecto</Th>
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
                        <Button>Detalles</Button>
                      </Link>
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
