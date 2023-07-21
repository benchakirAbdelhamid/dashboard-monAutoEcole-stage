import * as React from "react";

import DropDown from "../components/DropDown";
import { AiFillAmazonCircle, AiOutlineEdit, AiOutlineMenu } from "react-icons/ai";

const FileManager = () => {
  return (
    <div className="p-4">
      File Manager
      
      <DropDown
        row={[
          { id: 1, name: "hamid",icon : <AiOutlineEdit /> },
          { id: 2, name: "5254" ,icon : <AiOutlineMenu /> },
          { id: 3, name: "21848" ,icon : <AiFillAmazonCircle /> },
          { id: 4, name: "bobo" ,icon : <AiOutlineEdit /> },
        ]}
      />
    </div>
  );
};

export default FileManager;
