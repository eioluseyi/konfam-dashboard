import axios from "axios";

const token = "a56d34d777288aa5e18adfb06d2806e88283ec6e";

export const getData = ({ page, perPage }) =>
  axios.get(
    `https://admin.welkom-u.ca/api/data:get?page=${page}&pageSize=${perPage}`,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
