import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetcFrontendData = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/settings/fetch-frontend-details`
    );
    // console.log("therapylist", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching therapies:", error);
    throw error;
  }
};

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/blog`);
    // console.log("therapylist", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching therapies:", error);
    throw error;
  }
};

export const handleSubmitForm = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/api/contact/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data }; // Return success and data
    } else {
      return { success: false, message: data.message || "Submission failed" }; // Return failure message
    }
  } catch (error) {
    return {
      success: false,
      message: "Error submitting form: " + error.message,
    }; // Handle errors
  }
};
