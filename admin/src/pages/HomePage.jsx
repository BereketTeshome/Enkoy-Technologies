import {
  Event,
  Newspaper,
  Person,
  RssFeedRounded,
  VolunteerActivism,
} from "@mui/icons-material";
import React, { useEffect, useMemo, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as Chartjs, Tooltip, Legend, ArcElement } from "chart.js";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

Chartjs.register(Tooltip, Legend, ArcElement);

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [ebooks, setEbooks] = useState([]);
  const [users, setUsers] = useState([]);
  // const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/blog/get`
      );
      setBlogs(res.data.blogs);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/ebook/get`
      );
      setEbooks(res.data.ebooks);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/user/users`
      );
      setUsers(res.data.users);
      console.log(res.data.users);
      setLoading(false);
    };
    fetchData();
  }, []);

  const options = {};
  const data = {
    labels: ["Blogs", "Ebooks"],
    datasets: [
      {
        label: "Total Posts",
        data: [blogs.length, ebooks.length],
        backgroundColor: ["#49BD81", "#FFA001"],
        hoverOffset: 4,
      },
    ],
  };
  const deleteBlog = async (id) => {};
  const columns = useMemo(
    () => [
      {
        accessorKey: "profileImg",
        header: "Image",
        Cell: ({ cell }) => (
          <img
            src={cell.getValue() ? cell.getValue() : "/user.png"}
            alt="Blog"
            style={{ width: "40px", height: "40px", borderRadius: "100%" }}
          />
        ),
        size: 150,
      },
      {
        accessorKey: "username",
        header: "Username",
        size: 250,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 150,
      },
      {
        accessorKey: "createdAt",
        header: "Logged In Date",
        size: 150,
        Cell: ({ cell }) => {
          const date = new Date(cell.getValue()).toString().slice(0, 16);
          return <span>{date}</span>;
        },
      },

      {
        accessorKey: "actions",
        header: "Actions",
        Cell: ({ row }) => (
          <div>
            <IconButton
              component="a"
              href={`/edit-blog/${row.original._id}`}
              color="primary"
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => !btnLoading && deleteBlog(row.original._id)}
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ),
        size: 150,
      },
    ],
    [btnLoading]
  );
  return (
    <div className="py-4">
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 *:rounded-md *:shadow-sm">
          <div className="flex items-center bg-white py-5 gap-4 justify-center">
            <div className="bg-[#D1F3E0] text-[#49BD81] p-3 rounded-full">
              <RssFeedRounded sx={{ fontSize: "60px" }} />
            </div>
            <div>
              <p className="text-gray-400 text-lg">Blogs Posts</p>
              <p className="text-lg font-semibold">{blogs.length}</p>
            </div>
          </div>
          {/* <div className="flex items-center bg-white py-5 gap-4 justify-center">
          <div className="bg-[#E1F1FF] text-[#3F7AFC] p-3 rounded-full">
            <Event sx={{ fontSize: "60px" }} />
          </div>
          <div>
            <p className="text-gray-400 text-lg">Event Posts</p>
            <p className="text-lg font-semibold">{ebooks.length}</p>
          </div>
        </div> */}
          <div className="flex items-center bg-white py-5 gap-4 justify-center">
            <div className="bg-[#FFF2D8] text-[#FFA001] p-3 rounded-full">
              <Newspaper sx={{ fontSize: "60px" }} />
            </div>
            <div>
              <p className="text-gray-400 text-lg">Ebook Posts</p>
              <p className="text-lg font-semibold">{ebooks.length}</p>
            </div>
          </div>
          <div className="flex items-center bg-white py-5 gap-4 justify-center">
            <div className="bg-[#E1F1FF] text-[#3F7AFC] p-3 rounded-full">
              <Person sx={{ fontSize: "60px" }} />
            </div>
            <div>
              <p className="text-gray-400 text-lg">Number of Users</p>
              <p className="text-lg font-semibold">{users.length}</p>
            </div>
          </div>
        </div>
        <br />
        <div>
          <p className="capitalize bg-[#070b22] py-1 px-3 text-gray-100 text-sm">
            Manage Users
          </p>
          <div className="overflow-x-scroll">
            {loading ? (
              <div className="w-full text-center">Loading...</div>
            ) : (
              <MaterialReactTable
                columns={columns}
                data={users}
                enableColumnActions={false}
                enableColumnFilters={false}
                enablePagination={true}
                enableSorting={true}
              />
            )}
          </div>
        </div>
      </div>

      <div className="lg:h-[100vh] w-[100%] flex justify-center mt-8 bg-white rounded-md shadow py-2">
        <Pie options={options} data={data} />
      </div>
    </div>
  );
};

export default HomePage;
