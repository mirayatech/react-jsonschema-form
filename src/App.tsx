import Form from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

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

const log = (type: string) => console.log.bind(console, type);

function App() {
  return (
    <Form
      validator={validator}
      schema={schema}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")}
    />
  );
}

export default App;
