import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/api/job/get`
        );
        setJobs(res.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, [deleted]);

  const deleteDonation = async (id) => {
    setBtnLoading(true);
    try {
      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/api/job/delete/${id}`
      );
      setDeleted((prev) => !prev);
    } catch (error) {
      console.error("Error deleting jobs:", error);
    }
    setBtnLoading(false);
  };

  const columns = useMemo(
    () => [
      // {
      //   accessorKey: "img",
      //   header: "Image",
      //   Cell: ({ cell }) => (
      //     <img
      //       src={cell.getValue()}
      //       alt="jobs"
      //       style={{ width: "80px", borderRadius: "8px" }}
      //     />
      //   ),
      //   size: 150,
      // },
      {
        accessorKey: "title",
        header: "Title",
        size: 250,
      },
      {
        accessorKey: "jobType",
        header: " Job Type",
        size: 100,
      },
      {
        accessorKey: "jobTime",
        header: "Work Time",
        size: 100,
      },

      {
        accessorKey: "createdAt",
        header: "Posted Date",
        size: 150,
        Cell: ({ cell }) => {
          const date = new Date(cell.getValue()).toString().slice(0, 16);
          return <span>{date}</span>;
        },
      },
      // {
      //   accessorKey: "views",
      //   header: "Views",
      //   size: 50,
      // },
      {
        accessorKey: "actions",
        header: "Actions",
        Cell: ({ row }) => (
          <div>
            <IconButton
              component="a"
              href={`/edit-jobs/${row.original._id}`}
              color="primary"
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => !btnLoading && deleteDonation(row.original._id)}
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
    <div className="py-10 px-5">
      <h1 className="text-center uppercase text-3xl font-bold text-[#070b22] mb-4">
        jobs Dashboard
      </h1>
      <div className="bg-white shadow-md">
        <p className="capitalize bg-[#070b22] py-1 px-3 text-gray-100 text-sm">
          Manage job Posts
        </p>
        <div className="px-3 py-3 flex flex-col gap-y-2 mt-2">
          <div>
            <a
              href="/add-jobs"
              className="bg-[#ffa216] px-3 py-2 uppercase text-sm text-gray-50"
            >
              create new job post
            </a>
          </div>

          <div className="overflow-x-scroll">
            {loading ? (
              <div className="w-full text-center">Loading...</div>
            ) : (
              <MaterialReactTable
                columns={columns}
                data={jobs}
                enableColumnActions={false}
                enableColumnFilters={false}
                enablePagination={true}
                enableSorting={true}
                muiTableBodyRowProps={{
                  sx: {
                    textAlign: "center",
                  },
                }}
                muiTableToolbarProps={{
                  sx: {
                    // display: "flex", // Flexbox to align content
                    justifyContent: "flex-end",
                    // backgroundColor: "#000", // Align toolbar buttons to the right
                  },
                }}
                muiTableProps={{
                  sx: {
                    minWidth: "850px",
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
