import Form from "@rjsf/core";
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
  firstName: { "ui:classNames": "custom-class-first-name" },
  lastName: { "ui:classNames": "custom-class-last-name" },
  age: { "ui:classNames": "custom-class-age" },
};

const log = (type: string) => console.log.bind(console, type);

function App() {
  return (
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
  );
}

export default App;
