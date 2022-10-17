import { Box, Button, Text, Icon, Link, Divider } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { FiGrid } from "react-icons/fi";
import { VscTypeHierarchy } from "react-icons/vsc";
import { TbReportMoney } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../store/slices/types/typesActions";
import { filterProjects } from "../store/slices/projects/projectsActions";
function Home() {
  const [active, setActive] = useState("");
  const dispatch = useDispatch();
  const { types } = useSelector((state) => state.types);
  console.log(types);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <>
      <Box
        color="white"
        display="flex"
        flexDirection={"row"}
        flexWrap="wrap"
        justifyContent={"center"}
      >
        <Button
          bgColor="blue"
          w="200px"
          h="150px"
          m="1rem"
          _hover={{ transform: "scale(1.1)", opacity: "0.6" }}
          onClick={() => {
            if (active === "projects") {
              setActive("");
            } else {
              setActive("projects");
            }
          }}
        >
          <Icon as={FiGrid} h={10} w={10} m={2} />
          <Text fontSize="2xl">Proyectos</Text>
        </Button>
        <Link as={ReactLink} to="types" _hover={{ textDecoration: "none" }}>
          <Button
            bgColor="red"
            w="200px"
            h="150px"
            m="1rem"
            _hover={{ transform: "scale(1.1)", opacity: "0.6" }}
          >
            <Icon as={VscTypeHierarchy} h={10} w={10} m={2} />
            <Text fontSize="xl" whiteSpace={"normal"}>
              Clasificación de proyectos
            </Text>
          </Button>
        </Link>
        <Button
          bgColor="green"
          w="200px"
          h="150px"
          m="1rem"
          _hover={{ transform: "scale(1.1)", opacity: "0.6" }}
        >
          <Icon as={TbReportMoney} h={10} w={10} m={2} />
          <Text fontSize="2xl">Pagos</Text>
        </Button>
        <Button
          bgColor="orange"
          w="200px"
          h="150px"
          m="1rem"
          _hover={{ transform: "scale(1.1)", opacity: "0.6" }}
        >
          <Icon as={FaChartLine} h={10} w={10} m={2} />
          <Text fontSize="2xl">Reportes</Text>
        </Button>
        {active === "projects" && (
          <Box
            mt="1rem"
            display="flex"
            flexDirection={"row"}
            flexWrap="wrap"
            justifyContent={"center"}
          >
            <Divider m="1rem" />
            {types &&
              types.map((e) => (
                <Link
                  as={ReactLink}
                  to="projects"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button
                    bgColor={e.color}
                    w="200px"
                    h="150px"
                    m="1rem"
                    _hover={{ transform: "scale(1.1)", opacity: "0.6" }}
                    onClick={() => dispatch(filterProjects(e.id))}
                  >
                    <Icon as={FiGrid} h={10} w={10} m={2} />
                    <Text whiteSpace={"normal"} fontSize="xl">
                      {e.name}
                    </Text>
                  </Button>
                </Link>
              ))}
            <Link
              as={ReactLink}
              to="projects"
              _hover={{ textDecoration: "none" }}
            >
              <Button
                bgColor="blue"
                w="200px"
                h="150px"
                m="1rem"
                _hover={{ transform: "scale(1.1)", opacity: "0.6" }}
              >
                <Icon as={FiGrid} h={10} w={10} m={2} />
                <Text whiteSpace={"normal"} fontSize="xl">
                  Ver todos
                </Text>
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Home;
