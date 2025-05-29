import Quill from "quill";
import { use, useEffect, useRef, useState } from "react";

export const Editor = (
  varinat = "create",
  onSubmit,
  onCancel,
  placeholder,
  disabled,
  defaultValue
) => {
  const [text, setText] = useState("");
  const [isToolbarVisible, setToolbarVisible] = useState(false);

  const containerRef = useRef(null);
  const submitRef = useRef(null);
  const disabledRef = useRef(null);
  const defaultValueRef=useRef(null)
  const quillRef=useRef(null)
  const placeholderRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return; // if containerRef is not initialized,return
    const container = containerRef.current; // get the container element

    const editorContainer=container.appendChild(container.ownerDocument.createElement("div")) //create a new div element and append it to the container.

    const options = {
      theme: "snow",
      placeholder: placeholderRef.current,
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          ["link", "image"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["clean"],
        ],
        keyboard: {
          bindings: {
            enter: {
              key: "Enter",
              handler: () => {
                return;
              },
            },
          },
          shift_enter: {
            key: "Enter",
            shiftKey: true,
            handler: () => {
             quill.insertText(quill.getSelection()?.index || 0, "\n");  //insert a new line .
            },
          },
        },
      },
    };

    const quill = new Quill(editorContainer, options);

    quillRef.current=quill
    quillRef.current.focus()
    quill.setContents(defaultValueRef.current)
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col border border-slate-300 rounded-md overflow-hidden focus-within:shadow-sm focus-within:border-slate-400 bg-white transition focus-within:">
        <div ref={containerRef} />
      </div>
    </div>
  );
};
