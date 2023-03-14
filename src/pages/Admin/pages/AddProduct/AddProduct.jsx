import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddProduct = () => {
  const [description, setDescription] = useState("");
  const [productName, setProductName] = useState("");
  const [normalPrice, setNormalPrice] = useState("");
  const [salesPrice, setSalesPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [fileObj, setFileObj] = useState([]);
  const [fileArray, setFileArray] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  //   console.log("productName => " + productName);
  //   console.log("description => " + description);
  //   console.log("normalPrice => " + normalPrice);
  //   console.log("salesPrice => " + salesPrice);
  //   console.log("brand => " + brand);
  //   console.log("category => " + category);
  //   console.log("tags => " + tags);

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
  }

  function uploadMultipleFiles(e) {
    e.preventDefault();

    setImages([]);
    setFileArray([]);
    setFileObj([]);

    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
    setImages(fileArray);
    setSelectedImage(fileArray[0]);
  }

  const handleClick = (e) => {
    e.preventDefault();

    if (images.length > 4) {
      alert("You can upload max 4 photos. Please reselect your photos.");
    } else if (images.length === 0) {
      alert("Add atleast 1 photo");
    } else {
      alert("data submitted");
    }
  };

  //   function uploadFiles(e) {
  //     e.preventDefault();

  //     if (images.length > 4) {
  //       alert("You can upload max 4 photos. Please reselect your photos.");
  //     } else {
  //       alert("successfull");
  //     }
  //   }

  return (
    <div class="row">
      <div
        class="col-9 mt-4 my-5 border border-0 rounded-3"
        style={{ backgroundColor: "white" }}
      >
        <section class="">
          <div class="row d-flex justify-content-start align-items-start h-100">
            <form class=" border border-0 rounded-3">
              <div class="form-outline m-4 d-flex align-items-center">
                <div class="col-3">
                  <label class="form-label" for="form3Example3">
                    Product Name :
                  </label>
                </div>
                <div class="col-9 border border-0">
                  <input
                    type="text"
                    placeholder="Product Name"
                    id="form3Example3"
                    onChange={(e) => setProductName(e.target.value)}
                    class="form-control input-text rounded-2 shadow-none"
                  />
                </div>
              </div>

              <div class="form-outline m-4 d-flex align-items-start ">
                <div class="col-3">
                  <label class="form-label" for="form3Example3">
                    Product Descriptions :
                  </label>
                </div>
                <div class="col-9 border border-0">
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
                      placeholder="Product Descriptions...."
                      theme="snow"
                      value={description}
                      onChange={setDescription}
                    />
                  </div>
                </div>
              </div>

              <div class="form-outline m-4 d-flex align-items-center">
                <div class="col-3">
                  <label class="form-label" for="form3Example3">
                    Product Price :
                  </label>
                </div>
                <div className="col-9 d-flex justify-content-between bg-light border border-1 rounded-3">
                  <div class="col-6 ">
                    <input
                      type="number"
                      id="form3Example3"
                      placeholder="Normal Price"
                      onChange={(e) => setNormalPrice(e.target.value)}
                      class="form-control input-text rounded-2 shadow-none"
                      style={{ border: "none" }}
                    />
                  </div>
                  <div class="col-6 ">
                    <input
                      type="number"
                      id="form3Example3"
                      placeholder="Sale Price"
                      onChange={(e) => setSalesPrice(e.target.value)}
                      class="form-control input-text rounded-2 shadow-none"
                      style={{ border: "none" }}
                    />
                  </div>
                </div>
              </div>

              <div class="form-outline m-4 d-flex align-items-center">
                <div class="col-3">
                  <label class="form-label" for="form3Example3">
                    Brand :
                  </label>
                </div>
                <div class="col-9 border border-0">
                  <input
                    type="text"
                    placeholder="Brand"
                    id="form3Example3"
                    onChange={(e) => setBrand(e.target.value)}
                    class="form-control input-text rounded-2 shadow-none"
                  />
                </div>
              </div>

              <div class="form-outline m-4 d-flex align-items-center">
                <div class="col-3">
                  <label class="form-label" for="form3Example3">
                    Category :
                  </label>
                </div>
                <div class="col-9 border border-0">
                  <input
                    type="text"
                    placeholder="Category"
                    id="form3Example3"
                    onChange={(e) => setCategory(e.target.value)}
                    class="form-control input-text rounded-2 shadow-none"
                  />
                </div>
              </div>

              <div class="form-outline m-4 d-flex align-items-center">
                <div class="col-3">
                  <label class="form-label" for="form3Example3">
                    Tags :
                  </label>
                </div>
                <div class="col-9 border border-0">
                  <div
                    class="d-flex flex-column"
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
                    <div class="d-flex flex-wrap gap-2 mb-2">
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
                          <span class="text">{tag}</span>

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
                      class="form-control input-text rounded-2 shadow-none"
                      style={{
                        flexGrow: "1",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* <div class="col-12 my-5 d-flex justify-content-center">
                <button
                  class="btn border border-0 "
                  style={{
                    backgroundColor: "#52057B",
                    color: "white",
                    width: "110px",
                    height: "2.8rem",
                  }}
                  onClick={handleClick}
                >
                  Add Product
                </button>
              </div> */}
            </form>
          </div>
        </section>
      </div>

      <div class="col-3 mt-4 px-4 pt-0 my-5" style={{ height: "300px" }}>
        <section class="">
          <div
            class="row d-flex py-2 justify-content-center align-items-center border border-0 rounded-3"
            style={{ height: "200px", backgroundColor: "white" }}
          >
            <p>Product Images:</p>
            <div
              class="mb-3 p-0"
              style={{
                height: "150px",
                width: "180px",
                backgroundColor: "lightgray",
              }}
            >
              {selectedImage && (
                <img
                  class="m-0"
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
            class="row d-flex mt-2 justify-content-center align-items-start border border-0 rounded-3"
            style={{ backgroundColor: "white" }}
          >
            <div class="row">
              <div class="col-12">
                <form>
                  <div class="d-flex gap-1 p-2 flex-wrap col-12 form-group multi-preview">
                    {(images || []).map((url, index) => (
                      <img
                        class="my-2"
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
                  <div class="form-group my-1">
                    <input
                      type="file"
                      class="form-control mb-3"
                      onChange={uploadMultipleFiles}
                      multiple
                    />
                  </div>
                  {/* <button
                    type="button"
                    class="btn btn-block my-2 border border-1"
                    style={{ backgroundColor: "#52057B", color: "white" }}
                    onClick={uploadFiles}
                  >
                    Upload
                  </button> */}
                </form>
              </div>
              {/* make upload button here to upload only four images */}
            </div>
          </div>
          <div class="col-12 my-5 d-flex justify-content-center">
            <button
              class="btn border border-0 "
              style={{
                backgroundColor: "#52057B",
                color: "white",
                width: "110px",
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
