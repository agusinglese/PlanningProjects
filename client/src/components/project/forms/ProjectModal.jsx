import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import NewProjectForm from "./NewProjectForm";

function ProjectModal({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <NewProjectForm onClose={onClose} />
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProjectModal;
