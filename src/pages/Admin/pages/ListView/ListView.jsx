import React, { useEffect, useState } from "react";
import "./ListView.css";
import Loader from "../../../../components/Loader/Loader";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../../Services/helper";

const ListView = ({ page }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  // const { data, loading, reFetch } = useFetch(
  //   `${BASE_URL}/admin/${page}`
  // );

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/admin/${page}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const rawdata = page === "orders" ? data.orders : data.users;

  const handleDelete = (id) => {
    axios
      .delete(`${BASE_URL}/admin/${page.slice(0, -1)}/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        toast.success("Record has been deleted");
        fetchData();
      })
      .catch((err) => {
        toast.error("Something went wrong. Try Later.");
      });
  };

  const handleRoleChange = (id, role) => {
    try {
      axios.put(
        `${BASE_URL}/admin/${page.slice(0, -1)}/${id}`,
        { role },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Role changed Successfully.");
      fetchData();
    } catch (err) {
      toast.error("Something went wrong. Try Later.");
    }
  };

  const handleOrderStatusChange = (id, status) => {
    try {
      axios.put(
        `${BASE_URL}/admin/${page.slice(0, -1)}/${id}`,
        { status },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Status changed Successfully.");
      fetchData();
    } catch (err) {
      toast.error("Something went wrong. Try Later.");
    }
  };

  useEffect(()=>{
    fetchData();
  }, [page]);

  return (
    <div className="container-fluid m-0">
      <div className="m-0">
        <div className="row">
          <div className="col-md-12 m-0 p-0">
            {loading === true ? (
              <Loader />
            ) : (
              <table className="table">
                <thead className="">
                  <tr className="border border-1 bg-light">
                    <th>{page === "orders" ? "#OrderId" : "#UserId"}</th>
                    <th>{page === "orders" ? "UserId" : "Name"}</th>
                    <th>{page === "orders" ? "Product Name" : "E-mail"}</th>
                    <th>{page === "orders" ? "Order Status" : "Phone"}</th>
                    <th>{page === "orders" ? "Payment Status" : "Role"}</th>
                    <th>{page === "orders" ? "Total" : "Created At"}</th>
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
                                  data.orderStatus === "Delivered"
                                    ? "#28C66F"
                                    : data.orderStatus === "Processing"
                                    ? "#FFAB00"
                                    : "#12b2f1",
                              }}
                            ></i>
                          ) : (
                            <i
                              className="fa fa-user"
                              aria-hidden="true"
                              style={{
                                color:
                                  data.role === "admin" ? "#28C66F" : "#FFAB00",
                              }}
                            ></i>
                          )}
                          {`  #${data._id.substring(0, 7)}...`}
                        </td>

                        <td>
                          {page === "orders"
                            ? `${data.user.substring(0, 7)}...`
                            : data.firstname + " " + data.lastname}
                        </td>

                        {page === "orders" ? (
                          <td>{`${data.orderItems[0].name.substring(
                            0,
                            10
                          )}...`}</td>
                        ) : (
                          <td>{data.email}</td>
                        )}

                        {page === "orders" ? (
                          <td>
                            <select
                              class="form-select form-select-sm shadow-none"
                              aria-label=".form-select-sm example"
                              style={{
                                color:
                                  data.orderStatus === "Delivered"
                                    ? "#28C66F"
                                    : data.orderStatus === "Processing"
                                    ? "#FFAB00"
                                    : "#12b2f1",
                              }}
                              onChange={(e) =>
                                {
                                  handleOrderStatusChange(
                                    data._id,
                                    e.target.value
                                  );
                                }
                              }
                            >
                              <option selected>{data.orderStatus}</option>
                              {data.orderStatus === "Processing" && (
                                <>
                                  <option value="Dispatched">Dispatched</option>
                                  <option value="Delivered">Delivered</option>
                                </>
                              )}

                              {data.orderStatus === "Dispatched" && (
                                <option value="Delivered">Delivered</option>
                              )}
                            </select>
                          </td>
                        ) : (
                          <td>{data.phoneNo}</td>
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
                        ) : (
                          <td
                            style={{
                              color:
                                data.role === "admin" ? "#28C66F" : "#FFAB00",
                            }}
                          >
                            <select
                              class="form-select form-select-sm shadow-none"
                              aria-label=".form-select-sm example"
                              onChange={(e) =>
                                {
                                  handleRoleChange(data._id, e.target.value);
                                }
                              }
                            >
                              <option selected>{data.role}</option>
                              {data.role === "user" && (
                                <option value="admin">admin</option>
                              )}

                              {data.role === "admin" && (
                                <option value="user">user</option>
                              )}
                            </select>
                          </td>
                        )}

                        <td>
                          {page === "orders"
                            ? `${data.totalPrice}`
                            : data.createdAt?.substring(0, 10)}
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
