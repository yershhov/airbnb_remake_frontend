import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { ChangeEvent, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { appService } from "./app.service";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "dark.800");

  const [file, setFile] = useState<any>();

  const onChange = (file: ChangeEvent) => {
    const { files } = file.target as HTMLInputElement;
    if (files && files.length !== 0) {
      setFile(files[0]);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    console.log(file);
  };

  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <Box h="100vh" w="100%" bg={bg}>
              <Box h="6rem" w="100%" bg="black">
                <Box>airdnd</Box>
                <Button onClick={toggleColorMode}>
                  Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
              </Box>
              <Box h="6rem" w="100%" bg="#181818"></Box>
              <Formik
                initialValues={{ file: null }}
                onSubmit={(values) => {
                  handleUpload();
                }}
              >
                <Form>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={onChange}
                  />
                  <Button type="submit">Submit</Button>
                </Form>
              </Formik>
            </Box>
          }
        />
      </Routes>
    </>
  );
}

export default App;
