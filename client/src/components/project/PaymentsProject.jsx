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
function PaymentsProject() {
  let payments = [];
  return (
    <>
      {" "}
      <Box>
        <TableContainer>
          {payments.length ? (
            <Table variant="simple" colorScheme={"pink"}>
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Concepto</Th>
                  <Th>Fecha</Th>
                  <Th>Monto</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {payments &&
                  payments.map((e) => (
                    <Tr key={e.id}>
                      <Td>{e.id}</Td>
                      <Td>{e.name}</Td>

                      <Td>{e.planningDate.split("-").reverse().join("/")}</Td>
                      <Td>{e.duration}</Td>
                      <Td>{e.estimatedCost}</Td>
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
                  <Th>Concepto</Th>
                  <Th>Fecha</Th>
                  <Th>Monto</Th>
                  <Th></Th>
                </Tr>
              </Tfoot>
            </Table>
          ) : (
            <Box display={"flex"} justifyContent="center" m="1rem">
              <Alert status="warning">
                <AlertIcon />
                No existen pagos asociados al proyecto
              </Alert>
            </Box>
          )}
        </TableContainer>
      </Box>
    </>
  );
}

export default PaymentsProject;
