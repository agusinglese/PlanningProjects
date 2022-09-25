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
import { useSelector } from "react-redux";

function TasksProject() {
  const { projectDetail } = useSelector((state) => state.projects);

  return (
    <>
      <Box>
        <TableContainer>
          {projectDetail.tasks.length ? (
            <Table variant="simple" colorScheme={"pink"}>
              <TableCaption>
                Tareas asociadas al proyecto {projectDetail.name}
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Tarea</Th>
                  <Th>Fecha inicial estimada</Th>
                  <Th>Duración [días]</Th>
                  <Th>Presupuesto</Th>
                  <Th>Responsable</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {projectDetail.tasks &&
                  projectDetail.tasks.map((e) => (
                    <Tr key={e.id}>
                      <Td>{e.id}</Td>
                      <Td>{e.name}</Td>

                      <Td>{e.planningDate.split("-").reverse().join("/")}</Td>
                      <Td>{e.duration}</Td>
                      <Td>{e.estimatedCost}</Td>
                      <Td>responsable</Td>
                      <Td>
                        <Button>Modificar</Button>
                        <Button>Eliminar</Button>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>#</Th>
                  <Th>Tarea</Th>
                  <Th>Fecha inicial estimada</Th>
                  <Th>Duración [días]</Th>
                  <Th>Presupuesto</Th>
                  <Th>Responsable</Th>
                  <Th></Th>
                </Tr>
              </Tfoot>
            </Table>
          ) : (
            <Box display={"flex"} justifyContent="center" m="1rem">
              <Alert status="warning">
                <AlertIcon />
                No existen tareas asociadas al proyecto
              </Alert>
            </Box>
          )}
        </TableContainer>
      </Box>
    </>
  );
}

export default TasksProject;
