import "./UploadDocuments.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaIdCard,
  FaFileInvoice,
  FaUniversity,
  FaBolt,
  FaMobileAlt,
  FaUpload
} from "react-icons/fa";

function UploadDocuments() {

  const navigate = useNavigate();

  const [files, setFiles] = useState({
    aadhaar: null,
    pan: null,
    salary: null,
    bank: null,
    electricity: null,
    upi: null
  });

  const handleFileChange = (e, key) => {

    setFiles({
      ...files,
      [key]: e.target.files[0]
    });

  };

  const handleUpload = () => {

    alert("Documents Uploaded Successfully!");

    navigate("/ocr-processing");

  };

  return (

    <div className="upload-page">

      <div className="upload-card">

        <h1>Upload Required Documents</h1>

        <p className="subtitle">
          Please upload all mandatory documents for verification.
        </p>

        <div className="upload-grid">

          <UploadBox
            icon={<FaIdCard />}
            title="Aadhaar Card"
            file={files.aadhaar}
            onChange={(e)=>handleFileChange(e,"aadhaar")}
          />

          <UploadBox
            icon={<FaIdCard />}
            title="PAN Card"
            file={files.pan}
            onChange={(e)=>handleFileChange(e,"pan")}
          />

          <UploadBox
            icon={<FaFileInvoice />}
            title="Salary Slip"
            file={files.salary}
            onChange={(e)=>handleFileChange(e,"salary")}
          />

          <UploadBox
            icon={<FaUniversity />}
            title="Bank Statement"
            file={files.bank}
            onChange={(e)=>handleFileChange(e,"bank")}
          />

          <UploadBox
            icon={<FaBolt />}
            title="Electricity Bill"
            file={files.electricity}
            onChange={(e)=>handleFileChange(e,"electricity")}
          />

          <UploadBox
            icon={<FaMobileAlt />}
            title="UPI Statement"
            file={files.upi}
            onChange={(e)=>handleFileChange(e,"upi")}
          />

        </div>

        <button
          className="upload-btn"
          onClick={handleUpload}
        >

          <FaUpload />

          Upload Documents

        </button>

      </div>

    </div>

  );

}

function UploadBox({icon,title,file,onChange}){

  return(

    <div className="upload-box">

      <div className="upload-icon">

        {icon}

      </div>

      <h3>{title}</h3>

      <label className="choose-btn">

        Choose File

        <input
          type="file"
          hidden
          onChange={onChange}
        />

      </label>

      <p>

        {file ? file.name : "No file selected"}

      </p>

    </div>

  );

}

export default UploadDocuments;