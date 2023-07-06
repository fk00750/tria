import { Col, Form, Row } from "react-bootstrap";
import "../../index.css";
import React, { useState } from "react";

const AddClassroomForm = () => {
  const [submenuName, setSubmenuName] = useState("");
  const [activityStatus, setActivityStatus] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(submenuName, activityStatus, parentCategory, url);
    // Handle form submission here
  };

  return (
    <>
      <div className="category_heading">
        <div>
          <span>Category List</span>
        </div>
      </div>
      <div className="sub_courses_heading">
        <span>Add New Sub Courses</span>
      </div>
      {/* form */}
      <Form className="form-container" onSubmit={handleSubmit}>
        <Row>
          <Col>
            <div className="mb-3">
              <label htmlFor="submenuName" id="form-label" className="mb-2">
                Sub Menu Name
              </label>
              <input
                type="text"
                className="form-control"
                id="submenuName"
                placeholder="Enter Sub Menu Name"
                value={submenuName}
                onChange={(e) => {
                  setSubmenuName(e.target.value);
                }}
              />
            </div>
          </Col>
          <Col sm={4}>
            <div className="mb-3">
              <label htmlFor="url" id="form-label" className="mb-2">
                Enter URL
              </label>
              <input
                type="text"
                className="form-control"
                id="url"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm>
            {" "}
            <div className="">
              <label htmlFor="parentCategory" id="form-label" className="mb-2">
                Parent Category
              </label>
              <select
                className="form-select"
                id="parentCategory"
                aria-label="Default select example"
                value={parentCategory}
                onChange={(e) => {
                  setParentCategory(e.target.value);
                }}
              >
                <option defaultValue="Please Select">Please Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </Col>
          <Col sm>
            {" "}
            <div className="">
              <label htmlFor="parentCategory" id="form-label" className="mb-2">
                Activity Status
              </label>
              <select
                className="form-select"
                id="parentCategory"
                aria-label="Default select example"
                value={activityStatus}
                onChange={(e) => {
                  setActivityStatus(e.target.value);
                }}
              >
                <option defaultValue="Active">Active</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </Col>
          <Col sm>
            <div className="form-button">
              <button type="submit" className="btn btn-primary">
                Add Category
              </button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default AddClassroomForm;
