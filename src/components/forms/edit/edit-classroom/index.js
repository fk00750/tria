import { useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";

const EditClassroomForm = () => {
  const [categoryName, setCategoryName] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [activeStatus, setActiveStatus] = useState("Active");
  const [usedFor, setUsedFor] = useState("About Us");
  const [titleName, setTitleName] = useState("");
  const [url, setUrl] = useState("");
  const [headTag, setHeadTag] = useState("");
  const [bodyTag, setBodyTag] = useState("");

  return (
    <>
      <div className="category_heading">
        <div>
          <span>Category List</span>
        </div>
      </div>
      <div className="sub_courses_heading">
        <span>Add New Categories</span>
      </div>
      {/* forms */}
      <div className="mt-5">
        <Form className="edit-form-container">
          <Row>
            <Col xs={6}>
              <Stack gap={3}>
                <div className="">
                  <label
                    htmlFor="CategoryName"
                    id="form-label"
                    className="mb-2"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoryName"
                    placeholder="SSB Interview"
                    value={categoryName}
                    onChange={(e) => {
                      setCategoryName(e.target.value);
                    }}
                  />
                </div>
                <div className="">
                  <label htmlFor="Meta Title" id="form-label" className="mb-2">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="metatitle"
                    placeholder="Enter Meta Name"
                    value={metaTitle}
                    onChange={(e) => {
                      setMetaTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="metadescription"
                    id="form-label"
                    className="mb-2"
                  >
                    Meta Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="metadescription"
                    placeholder="Enter Description"
                    value={metaDescription}
                    onChange={(e) => {
                      setMetaDescription(e.target.value);
                    }}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="activitystatus"
                    id="form-label"
                    className="mb-2"
                  >
                    Active Status
                  </label>
                  <select
                    className="form-select"
                    id="parentCategory"
                    aria-label="Default select example"
                    value={activeStatus}
                    onChange={(e) => {
                      setActiveStatus(e.target.value);
                    }}
                  >
                    <option defaultValue="Active">Active</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </Stack>
            </Col>
            <Col xs={6}>
              <Stack gap={3}>
                <div className="">
                  <label htmlFor="usedfor" id="form-label" className="mb-2">
                    Used For
                  </label>
                  <select
                    className="form-select"
                    id="usedfor"
                    aria-label="Default select example"
                    value={usedFor}
                    onChange={(e) => {
                      setUsedFor(e.target.value);
                    }}
                  >
                    <option>About Us</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="">
                  <label htmlFor="title" id="form-label" className="mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="titleName"
                    placeholder="Enter Title Name"
                    value={titleName}
                    onChange={(e) => {
                      setTitleName(e.target.value);
                    }}
                  />
                </div>
                <div className="">
                  <label htmlFor="url" id="form-label" className="mb-2">
                    Url
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="#"
                    value={url}
                    onChange={(e) => {
                      setUrl(e.target.value);
                    }}
                  />
                </div>
                <div className="">
                  <label htmlFor="headtag" id="form-label" className="mb-2">
                    Head Tags (For SEO)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="headTag"
                    placeholder="Enter Head Tag"
                    value={headTag}
                    onChange={(e) => {
                      setHeadTag(e.target.value);
                    }}
                  />
                </div>
                <div className="">
                  <label htmlFor="bodytag" id="form-label" className="mb-2">
                    Body Tags (For SEO)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bodytag"
                    placeholder="Enter Body Tag"
                    value={bodyTag}
                    onChange={(e) => {
                      setBodyTag(e.target.value);
                    }}
                  />
                </div>
                <Button>Update</Button>
              </Stack>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default EditClassroomForm;
