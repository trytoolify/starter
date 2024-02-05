import { dummyAction } from "./actions";

import {
  Form,
  Checkbox,
  Input,
  Radio,
  Select,
  Switch,
  Textarea,
  DatePicker,
  Button,
  FileInput,
} from "@trycreo/ui/components";

async function MyForm() {
  return (
    <div className="grid place-items-center">
      <Form action={dummyAction}>
        <Input
          name="fullName"
          label="Full Name"
          description="Your full name"
          minLength={3}
          maxLength={7}
          disabled
        />

        <FileInput
          name="document"
          label="Document"
          description="Upload your document"
        />

        <br />

        <Select
          name="email"
          options={["rohan.mayya@gmail.com", "saifsmailbox98@gmail.com"]}
          required
        />
        <Checkbox
          name="mobile"
          description="Do you accept the terms and conditions?"
        />
        <Radio
          name="type"
          label="Notify me about..."
          options={[
            "All new messages",
            "Direct messages and mentions",
            "Nothing",
          ]}
          required
        />

        <br />

        <Switch
          name="emails"
          label="Marketing Emails"
          description="Receive emails about new products, features, and more."
        />

        <br />

        <Textarea
          name="textAreaMessage"
          description="Your message"
          label="Your Message"
        />

        <br />

        <Button>Submit</Button>

        <br />
      </Form>
    </div>
  );
}

export default MyForm;
