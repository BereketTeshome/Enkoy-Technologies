import axios from "axios";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { jwtDecode } from "jwt-decode";

const EditJobPage = () => {
  const [jobs, setJobs] = useState([]);
  const [description, setDescription] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobTime, setJobTime] = useState("");
  const [applyLink, setApplyLink] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  // Decode the JWT token

  const job_type = ["Remote", "On-site", "Hybrid (Remote + On-site)"];
  const job_time = ["Full-time", "Part-time", "Contract"];

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    ["clean"],
  ];
  const modules = { toolbar: toolbarOptions };

  const handleDescriptionChange = (value) => setDescription(value);

  const editJob = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const jobData = {
        title: title ? title : jobs.title,
        description: description ? description : jobs.description,
        jobTime: jobTime ? jobTime : jobs.jobTime,
        jobType: jobType ? jobType : jobs.jobType,
        applyLink: applyLink ? applyLink : jobs.applyLink,
      };
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/api/job/edit/${id}`,
        jobData
      );
      navigate("/jobs");
      window.location.reload();
    } catch (error) {
      alert("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/api/job/get/${id}`
        );
        setJobs(res.data.job);
        setDescription(res.data.job.description);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20  flex justify-center items-center"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
        className="p-10 bg-white shadow-lg shadow-yellow rounded-lg w-[90%] "
        whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="mb-6 text-3xl font-bold text-center text-gray-600"
        >
          Edit Job Post
        </motion.h1>

        <form onSubmit={(e) => !loading && editJob(e)}>
          {[{ label: "Title", value: title, onChange: setTitle }].map(
            (field, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: idx * 0.1 } }}
                className="mb-4"
              >
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                <motion.input
                  type="text"
                  className="w-full p-2 mt-1 border border-gray-300 rounded focus:border-[#ffa216]"
                  // value={field.value}
                  defaultValue={jobs.title}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </motion.div>
            )
          )}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image
            </label>
            <ImageUpload setImage={setImage} />
          </div> */}

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
            className="mb-4"
          >
            <label className="block text-sm font-medium text-gray-700">
              Job Type
            </label>
            <motion.select
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:border-[#ffa216]"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="">Select a job type</option>
              {job_type.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </motion.select>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
            className="mb-4"
          >
            <label className="block text-sm font-medium text-gray-700">
              Work Time
            </label>
            <motion.select
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:border-[#ffa216]"
              value={jobTime}
              onChange={(e) => setJobTime(e.target.value)}
            >
              <option value="">Select a work time</option>
              {job_time.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </motion.select>
          </motion.div>
          <div className="mb-3">
            <p className="block text-sm font-medium text-gray-700">Form Link</p>
            <input
              type="text"
              defaultValue={jobs.applyLink}
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:border-[#ffa216]"
              required
              onChange={(e) => setApplyLink(e.target.value)}
            />
          </div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
            className="mb-4"
          >
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <ReactQuill
              value={description}
              onChange={handleDescriptionChange}
              modules={modules}
              theme="snow"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full p-3 mt-4 text-white bg-[#ffa216] rounded hover:bg-[#ff8c00]"
            whileHover={{ scale: 1.05 }}
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="loader"
              ></motion.div>
            ) : (
              "Edit Job"
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EditJobPage;
