import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";

function NewProject() {
  const [form, setForm] = useState({});

  return (
    <>
      <form>
        <FormControl isRequired>
          <FormLabel>
            <Input type="text" name="name" value={form.name} />
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel>
            <Textarea type="text" name="description" value={form.description} />
          </FormLabel>
        </FormControl>
      </form>
    </>
  );
}

export default NewProject;
