import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const ThreadContent = () => {
    return (
      <div className="max-w-full mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
           
            className="border p-2 w-full box-border"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-gray-700">
            Content
          </label>
          <Editor
            id="content"
            initialValue=""
            
            init={{
              height: 275,
              menubar: true,
              plugins:
                "advlist autolink lists link image charmap preview anchor textcolor",
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
                              alignleft aligncenter alignright alignjustify | \
                              bullist numlist outdent indent | removeformat | help",
              content_css: "//www.tiny.cloud/css/codepen.min.css",
              setup: (editor) => {
                editor.on("init", () => {
                  editor.setContent("");
                });
              },
            }}
            className="w-full box-border " // Ensure full width within parent
          />
        </div>
      </div>
    );
  };
  

export default ThreadContent;
