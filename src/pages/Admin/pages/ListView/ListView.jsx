import React, { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import "./ListView.css";
import Loader from "../../../../components/Loader/Loader";
import axios from "axios";
import { toast } from "react-toastify";

const ListView = ({ page }) => {
  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:4000/api/v1/admin/${page}`
  );
  const rawdata = page === "orders" ? data.orders : data.users;

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/api/v1/admin/${page.slice(0, -1)}/${id}`)
      .then((res) => {
        toast.success("Record has been deleted");
        reFetch();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong. Try later");
      });
  };

  return (
    <div className="container-fluid mb-2">
      <div className="m-0">
        <div className="row">
          <div className="col-md-12">
            {loading === true ? (
              <Loader />
            ) : (
              <table className="table">
                <thead className="">
                  <tr className="border border-1 bg-light">
                    <th>
                      {page === "orders"
                        ? "#OrderId"
                        : page === "users"
                        ? "#UserId"
                        : "#ReviewId"}
                    </th>
                    <th>
                      {page === "orders"
                        ? "UserId"
                        : page === "users"
                        ? "Name"
                        : "PostId"}
                    </th>
                    <th>
                      {page === "orders"
                        ? "Product Name"
                        : page === "users"
                        ? "E-mail"
                        : "UserId"}
                    </th>

                    <th>
                      {page === "orders"
                        ? "Order Status"
                        : page === "users"
                        ? "Phone"
                        : "Usernamae"}
                    </th>
                    <th>
                      {page === "orders"
                        ? "Payment Status"
                        : page === "users"
                        ? "Role"
                        : "Comment"}
                    </th>
                    <th>
                      {page === "orders"
                        ? "Total"
                        : page === "users"
                        ? "Created At"
                        : "Rating"}
                    </th>
                    <th></th>
                  </tr>
                  <div
                    className="row"
                    style={{
                      height: "10px",
                    }}
                  ></div>
                </thead>

                <tbody>
                  {rawdata?.map((data) => (
                    <>
                      <tr className="bg-light border border-1">
                        <td>
                          {page === "orders" ? (
                            <i
                              className="fa fa-clipboard"
                              style={{
                                color:
                                  data.orderStatus === "Completed"
                                    ? "#28C66F"
                                    : data.orderStatus === "Processing"
                                    ? "#FFAB00"
                                    : "#EC5453",
                              }}
                            ></i>
                          ) : page === "users" ? (
                            <i
                              className="fa fa-user"
                              aria-hidden="true"
                              style={{
                                color:
                                  data.role === "admin" ? "#28C66F" : "#FFAB00",
                              }}
                            ></i>
                          ) : (
                            <i
                              className="fa fa-comment"
                              aria-hidden="true"
                              style={{
                                margin: "5px",
                                color: "#FFAB00",
                              }}
                            ></i>
                          )}
                          {`  #${data._id.substring(0, 7)}...`}
                        </td>

                        <td>
                          {page === "orders"
                            ? `${data.user.substring(0, 7)}...`
                            : page === "users"
                            ? data.firstname + " " + data.lastname
                            : `# ${data.postId.substring(0, 7)}...`}
                        </td>

                        {page === "orders" ? (
                          <td>{`${data.orderItems[0].name.substring(
                            0,
                            10
                          )}...`}</td>
                        ) : page === "users" ? (
                          <td>{data.email}</td>
                        ) : (
                          <td>{data.user.username}</td>
                        )}

                        {page === "orders" ? (
                          <td
                            style={{
                              color:
                                data.orderStatus === "Completed"
                                  ? "#28C66F"
                                  : data.orderStatus === "Processing"
                                  ? "#FFAB00"
                                  : "#EC5453",
                            }}
                          >
                            {data.orderStatus}
                          </td>
                        ) : page === "users" ? (
                          <td>Add phone no.</td>
                        ) : (
                          <td>{data.body}</td>
                        )}

                        {page === "orders" ? (
                          <td
                            style={{
                              color:
                                data.paymentInfo.status === "Completed"
                                  ? "#28C66F"
                                  : data.paymentInfo.status === "Pending"
                                  ? "#FFAB00"
                                  : "#6259CE",
                            }}
                          >
                            {data.paymentInfo.status}
                          </td>
                        ) : page === "users" ? (
                          <td
                            style={{
                              color:
                                data.role === "admin" ? "#28C66F" : "#FFAB00",
                            }}
                          >
                            {data.role}
                          </td>
                        ) : (
                          <td>{data.rating}</td>
                        )}

                        <td>
                          {page === "orders"
                            ? `${data.totalPrice}`
                            : page === "users"
                            ? data.createdAt.substring(0, 10)
                            : `# ${data.postId.substring(0, 7)}...`}
                        </td>

                        <td style={{ cursor: "pointer" }}>
                          <i
                            className="fa fa-trash"
                            style={{ color: "#f00e0e" }}
                            onClick={(e) => handleDelete(data._id)}
                          ></i>
                        </td>
                      </tr>
                      <div
                        className="row"
                        style={{
                          height: "10px",
                        }}
                      ></div>
                    </>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        {/* <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={rawData.length}
        /> */}
      </div>
    </div>
  );
};

export default ListView;
