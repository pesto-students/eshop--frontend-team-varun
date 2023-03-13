import React, { useState } from "react";
import "./ListView.css";
import { products } from "../../../../localFiles/ProductsFile";
import Pagination from "../../../../components/Pagination/Pagination";

const ListView = ({ rawData, page }) => {
  const [showPerPage, setShowPerPage] = useState(12);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  console.log(page);
  return (
    <div className="container-fluid mb-2">
      <div className="mt-2">
        <div className="row">
          <div className="col-md-12">
            <table class="table">
              <thead class="">
                <tr class="border border-1 bg-light">
                  <th scope="col">
                    {page === "Orders"
                      ? "#Order Id"
                      : page === "Users"
                      ? "#User Id"
                      : "#Review Id"}
                  </th>
                  <th scope="col">
                    {page === "Orders"
                      ? "Username"
                      : page === "Users"
                      ? "Name"
                      : "Post Id"}
                  </th>
                  <th scope="col">
                    {page === "Orders"
                      ? "E-mail"
                      : page === "Users"
                      ? "E-mail"
                      : "User Id"}
                  </th>
                  <th scope="col">
                    {page === "Orders"
                      ? "Payment Method"
                      : page === "Users"
                      ? "Phone"
                      : "Usernamae"}
                  </th>
                  <th scope="col">
                    {page === "Orders"
                      ? "Payment Status"
                      : page === "Users"
                      ? "Role"
                      : "Comment"}
                  </th>
                  <th scope="col">
                    {page === "Orders"
                      ? "Total"
                      : page === "Users"
                      ? "Created At"
                      : "Rating"}
                  </th>
                  <th scope="col"></th>
                </tr>
                <div
                  class="row"
                  style={{
                    height: "10px",
                  }}
                ></div>
              </thead>
              <tbody>
                {rawData
                  ?.slice(pagination.start, pagination.end)
                  .map((data) => (
                    <>
                      <tr class="bg-light border border-1">
                        <td>
                          {page === "Orders" ? (
                            <i
                              class="fa fa-clipboard"
                              style={{
                                margin: "5px",
                                color:
                                  data.paymentStatus === "Paid"
                                    ? "#28C66F"
                                    : data.paymentStatus === "Pending"
                                    ? "#FFAB00"
                                    : "#EC5453",
                              }}
                            ></i>
                          ) : page === "Users" ? (
                            <i
                              class="fa fa-user"
                              aria-hidden="true"
                              style={{
                                margin: "5px",
                                color:
                                  data.role === "admin" ? "#28C66F" : "#FFAB00",
                              }}
                            ></i>
                          ) : (
                            <i
                              class="fa fa-comment"
                              aria-hidden="true"
                              style={{
                                margin: "5px",
                                color: "#FFAB00",
                              }}
                            ></i>
                          )}
                          {`# ${data.id}`}
                        </td>

                        <td>
                          {page === "Orders"
                            ? data.user.username
                            : page === "Users"
                            ? data.firstName
                            : `# ${data.postId}`}
                        </td>

                        <td>
                          {page === "Reviews"
                            ? `# ${data.user.id}`
                            : data.email}
                        </td>

                        {page === "Orders" ? (
                          <td
                            style={{
                              color:
                                data.payment === "Cash"
                                  ? "#28C66F"
                                  : data.payment === "UPI"
                                  ? "#FFAB00"
                                  : "#6259CE",
                            }}
                          >
                            {data.payment}
                          </td>
                        ) : page === "Users" ? (
                          <td>{data.phone}</td>
                        ) : (
                          <td>{data.user.username}</td>
                        )}

                        {page === "Orders" ? (
                          <td
                            style={{
                              color:
                                data.paymentStatus === "Paid"
                                  ? "#28C66F"
                                  : data.paymentStatus === "Pending"
                                  ? "#FFAB00"
                                  : "#EC5453",
                            }}
                          >
                            {data.paymentStatus}
                          </td>
                        ) : page === "Users" ? (
                          <td>{data.role}</td>
                        ) : (
                          <td>{data.body}</td>
                        )}

                        {page === "Orders" ? (
                          <td>{data.price}</td>
                        ) : page === "Users" ? (
                          <td>{data.birthDate}</td>
                        ) : (
                          <td>{data.rating}</td>
                        )}
                        <td style={{ cursor: "pointer" }}>
                          <i class="fa fa-trash"></i>
                        </td>
                      </tr>
                      <div
                        class="row"
                        style={{
                          height: "10px",
                        }}
                      ></div>
                    </>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={rawData.length}
        />
      </div>
    </div>
  );
};

export default ListView;
