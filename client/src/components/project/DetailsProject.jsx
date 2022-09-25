import { useSelector } from "react-redux";

function DetailsProject() {
  const { projectDetail } = useSelector((state) => state.projects);
  console.log(projectDetail);
  return <>Details</>;
}

export default DetailsProject;
