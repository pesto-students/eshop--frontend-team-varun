import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../../Services/helper";

const AddProduct = () => {
  const [description, setDescription] = useState("");
  const [productName, setProductName] = useState("");
  const [normalPrice, setNormalPrice] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [featured, setFeatured] = useState("False");
  const [images, setImages] = useState([]);
  const [fileObj, setFileObj] = useState([]);
  const [fileArray, setFileArray] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [validationError, setValidationError] = useState("");
  const [imagesArray, setImagesArray] = useState([]);

  function uploadMultipleFiles(e) {
    e.preventDefault();

    setImages([]);
    setFileArray([]);
    setFileObj([]);

    fileObj.push(e.target.files);
    setImagesArray(e.target.files);

    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }

    setImages(fileArray);
    setSelectedImage(fileArray[0]);
  }

  const { currentUser } = useSelector((state) => state.user);
  const handleClick = async (e) => {
    e.preventDefault();

    if (validateFields() === false) {
      return;
    }

    try {
      const list = await Promise.all(
        Object.values(imagesArray).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "products");

          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/shubhamsaticloud/image/upload",
            data
          );

          const value = {
            public_id: uploadRes.data.url,
            url: uploadRes.data.secure_url,
          };

          return value;
        })
      );

      await axios.post(
        `${BASE_URL}/admin/product/new`,
        {
          name: productName,
          description,
          price: normalPrice,
          stock,
          brand,
          category,
          images: list,
          featured,
          user: currentUser,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Product added successfully");
      window.location.reload(false);
    } catch (err) {
      toast.error("Something went wrong. Try again later");
    }
  };

  const validateFields = () => {
    if (productName === "") {
      setValidationError("Please enter product name");
      return false;
    } else if (description === "") {
      setValidationError("Please enter product description");
      return false;
    } else if (normalPrice === "") {
      setValidationError("Please enter product price");
      return false;
    } else if (stock === "") {
      setValidationError("Please enter product stock");
      return false;
    } else if (brand === "") {
      setValidationError("Please enter product brand");
      return false;
    } else if (category === "") {
      setValidationError("Please enter product category");
      return false;
    } else if (images.length > 4) {
      setValidationError(
        "You can upload max 4 photos. Please reselect your photos"
      );
      return false;
    } else if (images.length === 0) {
      setValidationError("Please add atleast 1 photo");
      return false;
    } else {
      setValidationError("");
      return true;
    }
  };

  return (
    <div className="row mt-5">
      <div
        className="col-9 mt-2 mb-5 border border-0 rounded-3"
        style={{ backgroundColor: "white" }}
      >
        <section className="">
          <div className="row d-flex justify-content-start align-items-start h-100">
            <form className=" border border-0 rounded-3">
              <div className="form-outline m-4 d-flex align-items-center">
                <div className="col-3">
                  <label className="form-label" htmlFor="form3Example3">
                    Product Name :
                  </label>
                </div>
                <div className="col-9 border border-0">
                  <input
                    type="text"
                    placeholder="Product Name"
                    id="form3Example3"
                    onChange={(e) => setProductName(e.target.value)}
                    className="form-control input-text rounded-2 shadow-none"
                  />
                </div>
              </div>

              <div className="form-outline m-4 d-flex align-items-start ">
                <div className="col-3">
                  <label className="form-label" htmlFor="form3Example3">
                    Product Descriptions :
                  </label>
                </div>
                <div className="col-9 border border-0">
                  <div
                    style={{
                      height: "250px",
                      borderBottom: "1px solid lightgray",
                      borderRight: "1px solid lightgray",
                    }}
                  >
                    <ReactQuill
                      style={{
                        height: "83%",
                        width: "100%",
                        border: "none",
                      }}
                      placeholder="Product Descriptions.... {give your description in key value pair seperated by '|' }"
                      theme="snow"
                      value={description}
                      onChange={setDescription}
                    />
                  </div>
                </div>
              </div>

              <div className="form-outline m-4 d-flex align-items-center">
                <div className="col-3">
                  <label className="form-label" htmlFor="form3Example3">
                    Product Price :
                  </label>
                </div>
                <div className="col-9 d-flex justify-content-between gap-2">
                  {/* <div className=""> */}
                  <div className="col-6 border border-1 rounded-3">
                    <input
                      type="number"
                      id="form3Example3"
                      placeholder="Normal Price"
                      onChange={(e) => setNormalPrice(e.target.value)}
                      className="form-control input-text rounded-2 shadow-none"
                      style={{ border: "none" }}
                    />
                  </div>
                  {/* <div className="col-6">
                    <input
                      type="number"
                      id="form3Example3"
                      placeholder="Sale Price"
                      onChange={(e) => setSalesPrice(e.target.value)}
                      className="form-control input-text rounded-2 shadow-none"
                      style={{ border: "none" }}
                    />
                    <select
                      className="form-select shadow-none"
                      aria-label="Default select example"
                      onChange={(e) => setFeatured(e.target.value)}
                    >
                      <option value="False">False</option>
                      <option value="True">True</option>
                    </select>
                  </div> */}
                </div>
              </div>

              <div className="form-outline m-4 d-flex align-items-center">
                <div className="col-3">
                  <label className="form-label" htmlFor="form3Example3">
                    Stock :
                  </label>
                </div>
                <div className="col-9 d-flex justify-content-between ">
                  <div className="col-6 bg-light border border-1 rounded-3">
                    <input
                      type="number"
                      id="form3Example3"
                      placeholder="Stock"
                      onChange={(e) => setStock(e.target.value)}
                      className="form-control input-text rounded-2 shadow-none"
                      style={{ border: "none" }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-outline m-4 d-flex align-items-center">
                <div className="col-3">
                  <label className="form-label" htmlFor="form3Example3">
                    Featured :
                  </label>
                </div>
                <div className="col-9 d-flex justify-content-between ">
                  <div className="col-6 bg-light rounded-3">
                    <select
                      className="form-select shadow-none"
                      aria-label="Default select example"
                      onChange={(e) => setFeatured(e.target.value)}
                    >
                      <option value="False">False</option>
                      <option value="True">True</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-outline m-4 d-flex align-items-center">
                <div className="col-3">
                  <label className="form-label" htmlFor="form3Example3">
                    Brand :
                  </label>
                </div>
                <div className="col-9 border border-0">
                  <input
                    type="text"
                    placeholder="Brand"
                    id="form3Example3"
                    onChange={(e) => setBrand(e.target.value)}
                    className="form-control input-text rounded-2 shadow-none"
                  />
                </div>
              </div>

              <div className="form-outline m-4 d-flex align-items-center">
                <div className="col-3">
                  <label className="form-label" htmlFor="form3Example3">
                    Category :
                  </label>
                </div>
                <div className="col-9 border border-0">
                  <input
                    type="text"
                    placeholder="Category"
                    id="form3Example3"
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-control input-text rounded-2 shadow-none"
                  />
                </div>
              </div>

              {/* <div className="form-outline m-4 d-flex align-items-center">
                <div className="col-3">
                  <label className="form-label" htmlFor="form3Example3">
                    Tags :
                  </label>
                </div>
                <div className="col-9 border border-0">
                  <div
                    className="d-flex flex-column"
                    style={{
                      border: "1.3px solid lightgray",
                      padding: ".5em",
                      borderRadius: "3px",
                      marginTop: "1em",
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: ".5em",
                    }}
                  >
                    <div className="d-flex flex-wrap gap-2 mb-2">
                      {tags.map((tag, index) => (
                        <div
                          style={{
                            backgroundColor: "rgb(218, 216, 216)",
                            display: "inline-block",
                            padding: ".5em .75em",
                            borderRadius: "20px",
                          }}
                          key={index}
                        >
                          <span className="text">{tag}</span>

                          <span
                            style={{
                              height: "20px",
                              width: "20px",
                              backgroundColor: "#52057B",
                              color: "#fff",
                              borderRadius: "50%",
                              display: "inline-flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ".5em",
                              fontSize: "18px",
                              cursor: "pointer",
                            }}
                            onClick={() => removeTag(index)}
                          >
                            &times;
                          </span>
                        </div>
                      ))}
                    </div>
                    <input
                      type="text"
                      onKeyDown={handleKeyDown}
                      placeholder="Type some tags...."
                      className="form-control input-text rounded-2 shadow-none"
                      style={{
                        flexGrow: "1",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </div> */}
            </form>
          </div>
        </section>
      </div>

      <div className="col-3 mt-2 px-4 pt-0 my-5" style={{ height: "300px" }}>
        <section className="">
          <div
            className="row d-flex py-2 justify-content-center align-items-center border border-0 rounded-3"
            style={{ height: "220px", backgroundColor: "white" }}
          >
            <p>Product Images:</p>
            <div
              className="mb-5 p-0"
              style={{
                height: "150px",
                width: "180px",
                backgroundColor: "lightgray",
              }}
            >
              {selectedImage && (
                <img
                  className="m-0"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={selectedImage}
                  alt="..."
                />
              )}
            </div>
          </div>
          <div
            className="row d-flex mt-2 justify-content-center align-items-start border border-0 rounded-3"
            style={{ backgroundColor: "white" }}
          >
            <div className="row">
              <div className="col-12">
                <form>
                  <div className="d-flex gap-1 p-2 flex-wrap justify-content-evenly col-12 form-group multi-preview">
                    {(images || []).map((url, index) => (
                      <img
                        className="my-2"
                        style={{
                          width: "45.84px",
                          height: "32.67px",
                          border:
                            selectedImage === images[index]
                              ? "2px solid #1c09e9"
                              : "none",
                        }}
                        src={url}
                        alt="..."
                        onClick={() => setSelectedImage(images[index])}
                      />
                    ))}
                  </div>
                  <div className="form-group my-1">
                    <input
                      type="file"
                      className="form-control mb-3"
                      onChange={uploadMultipleFiles}
                      accept="image/*"
                      multiple
                    />
                  </div>
                </form>
              </div>
              {/* make upload button here to upload only four images */}
            </div>
          </div>
          <div className="col-12 my-5 d-flex flex-column gap-2 justify-content-center">
            <label style={{ fontSize: "14px", color: "red" }}>
              {validationError}
            </label>
            <button
              className="btn border border-0 "
              style={{
                backgroundColor: "#52057B",
                color: "white",
                width: "120px",
                height: "2.8rem",
              }}
              onClick={handleClick}
            >
              Add Product
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddProduct;
