import React from "react";
import "./Showcase.css";
import { IoEyeSharp } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import my_project from "../../assets/image/my_project.png";
const Showcase = () => {
  return (
    <div className="container py-5">
      <div className="row showcase_container p-5 my ">
        <div className="col-md-6">
          <div className="position-relative py-1">
            <h4 className="text-white project_Name ">coffee&cake</h4>
          </div>
          <p className="text-white my-4">
            coffee & cake is online website that design for sell and all kind of coffee and cake , also provide other product to customer
          </p>
          <div className="d-flex my-5 ">
            <a href="https://ymengsea.github.io/Coffee-Shop/" type="button" className=" showcase_btn me-3" target="_blank" rel="noreferrer">
              {<IoEyeSharp />}Views Live
            </a>
            <a href="https://github.com/ymengsea/Coffee-Shop" type="button" className=" showcase_btn" target="_blank" rel="noreferrer">
              {<FiGithub />}Source
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="Project_showcase_img">
            <img src={my_project} className="img-fluid img_show" alt="" />
          </div>
        </div>
      </div>
      <div className="row showcase_container p-5 my-4 flex-row-reverse">
        <div className="col-md-6">
          <div className="position-relative py-1">
            <h4 className="text-white project_Name ">coffee&cake</h4>
          </div>
          <p className="text-white my-4">
            coffee & cake is online website that design for sell and all kind of coffee and cake , also provide other product to customer
          </p>
          <div className="d-flex my-5 ">
            <a href="https://ymengsea.github.io/Coffee-Shop/" type="button" className=" showcase_btn me-3" target="_blank" rel="noreferrer">
              {<IoEyeSharp />}Views Live
            </a>
            <a href="https://github.com/ymengsea/Coffee-Shop" type="button" className=" showcase_btn" target="_blank" rel="noreferrer">
              {<FiGithub />}Source
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="Project_showcase_img">
            <img src={my_project} className="img-fluid img_show" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
