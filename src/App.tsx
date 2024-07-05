import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Form from "@rjsf/material-ui";
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import "./App.css";

const schema: RJSFSchema = {
  title: "Person",
  type: "object",
  required: ["firstName", "lastName"],
  properties: {
    firstName: { type: "string", title: "First Name" },
    lastName: { type: "string", title: "Last Name" },
    age: { type: "integer", title: "Age" },
  },
};

const uiSchema: UiSchema = {
  firstName: {
    "ui:widget": "text",
    "ui:classNames": "custom-class-first-name",
  },
  lastName: { "ui:widget": "text", "ui:classNames": "custom-class-last-name" },
  age: { "ui:widget": "updown", "ui:classNames": "custom-class-age" },
};

const log = (type: string) => console.log.bind(console, type);

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="form-container">
        <Form
          validator={validator}
          schema={schema}
          uiSchema={uiSchema}
          onChange={log("changed")}
          onSubmit={log("submitted")}
          onError={log("errors")}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
