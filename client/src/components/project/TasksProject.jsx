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
  Icon,
  Tooltip,
  ButtonGroup,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { MdOutlineEditNote, MdDeleteSweep } from "react-icons/md";
import { VscNewFile } from "react-icons/vsc";
import { BiFilterAlt } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
function TasksProject() {
  const { projectDetail } = useSelector((state) => state.projects);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenMenu(!openMenu)}>
        <Icon as={FiMenu} />
      </Button>
      <Box display="flex" flexDirection={"row"}>
        {openMenu && (
          <Box w={{ base: "100%", xl: "20%" }}>
            <ButtonGroup flexDirection={"column"} alignItems="start">
              <Button variant="ghost">
                <Icon as={VscNewFile} h={8} w={8} pr={2} />
                Crear tarea
              </Button>
              <Button variant="ghost">
                <Icon as={BiFilterAlt} h={8} w={8} pr={2} />
                Filtrar
              </Button>
            </ButtonGroup>
          </Box>
        )}
        <TableContainer>
          {projectDetail &&
          projectDetail.tasks &&
          projectDetail.tasks.length ? (
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
                  <Th>Estado</Th>
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
                      <Td>%</Td>
                      <Td>
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
