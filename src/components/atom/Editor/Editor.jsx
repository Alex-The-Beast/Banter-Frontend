import Quill from "quill";
import { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css"; // this is css for quill
import { Button } from "@/components/ui/button";
import { PiTextAa } from "react-icons/pi";
import { Hint } from "../Hint/Hint";
import { ImageIcon } from "lucide-react";
import { MdSend } from "react-icons/md";

export const Editor = ({
    // varinat = "create",
      onSubmit
  // onCancel,
  // placeholder,
  // disabled,
  // defaultValue
}) =>

  {
    const [text, setText] = useState("");
    const [isToolbarVisible, setToolbarVisible] = useState(false);

    const containerRef = useRef(null);
    const submitRef = useRef(null);
    const disabledRef = useRef(null);
    const defaultValueRef = useRef(null);
    const quillRef = useRef(null);
    const placeholderRef = useRef(null);

    function toggleToolbar() {
      setToolbarVisible(!isToolbarVisible);
      const toolbar = containerRef.current.querySelector(".ql-toolbar");
      if (toolbar) {
        toolbar.classList.toggle("hidden");
      }
    }
    useEffect(() => {
      if (!containerRef.current) return; // if containerRef is not initialized,return

      const container = containerRef.current; // get the container element
      // container.innerHTML = "";

      const editorContainer = container.appendChild(
        container.ownerDocument.createElement("div")
      ); //create a new div element and append it to the container.

      const options = {
        theme: "snow",
        placeholder: placeholderRef.current,
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["link"],
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
                quill.insertText(quill.getSelection()?.index || 0, "\n"); //insert a new line .
              },
            },
          },
        },
      };

      const quill = new Quill(editorContainer, options);

      quillRef.current = quill;
      quillRef.current.focus();
      quill.setContents(defaultValueRef.current);
    }, []);

    return (
      <div className="flex flex-col">
        <div className="flex flex-col border border-slate-300 rounded-md overflow-hidden focus-within:shadow-sm focus-within:border-slate-400 bg-white transition focus-within:">
          <div ref={containerRef} />
          <div className="flex px-2 pb-2 z-[5]">
            <Hint
              label={!isToolbarVisible ? " Hide toolbar" : " Show toolbar"}
              side="bottom"
              align="center"
            >
              <Button
                size="iconSm"
                disabled={false}
                variant="ghost"
                onClick={toggleToolbar}
                className="cursor-pointer "
              >
                <PiTextAa className="size-4" />
              </Button>
            </Hint>

            <Hint label="image">
              <Button
                size="iconSm"
                variant="ghost"
                disabled={false}
                onClick={() => {}}
                className="ml-4"
              >
                <ImageIcon className="size-4" />
              </Button>
            </Hint>

            <Hint label="Send Message">
              <Button
                sizw="iconSm"
                className="ml-auto bg-[#007a6a] hover:bg-[#007a6a]/80 text-white"
                onClick={() => {
                  const mesageContent=JSON.stringify(quillRef.current?.getContents())
                  onSubmit({body:mesageContent});
                  quillRef.current?.setText("");
                }}
                disabled={false}
              >
                <MdSend />
              </Button>
            </Hint>
          </div>
        </div>
        <p className="p-2 text-[10px] text-muted-foreground flex justify-end">
          <strong>Shift + return </strong> &nbsp; to add a new line.
        </p>
      </div>
    );
  };


  //1:04:47