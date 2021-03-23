import React, { useEffect, useState } from "react";

import QuillEditor from "../../../editor/QuillEditor";
import { Typography, Button, Form, message } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";

const { Title } = Typography;

const CreatePage = (props) => {
  const user = useSelector((state) => state.user);

  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);

  const onEditorChange = (value) => {
    setContent(value);
    console.log(content);
  };

  const onFilesChange = (files) => {
    setFiles(files);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // Clear contents in editor after submitting
    setContent("");

    // Ensure user is logged in before submitting
    if (user.userData && !user.userData.isAuth) {
      return alert("Please Log in first");
    }

    // Get the user's data so that we can make a POST request
    const variables = {
      content: content,
      userID: user.userData._id,
    };

    // Make the post request
    axios.post("/api/blog/createPost", variables).then((response) => {
      if (response) {
        message.success("Post Created!");

        setTimeout(() => {
          props.history.push("/blog");
        }, 2000);
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <Title level={2}> Editor</Title>
      </div>
      <QuillEditor
        placeholder={"Start Posting Something"}
        onEditorChange={onEditorChange}
        onFilesChange={onFilesChange}
      />

      <Form onSubmit={onSubmit}>
        <div style={{ textAlign: "center", margin: "2rem" }}>
          <Button
            size="large"
            htmlType="submit"
            className=""
            onSubmit={onSubmit}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreatePage;
