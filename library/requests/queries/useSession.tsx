"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useSession = () => {
  return useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const result = await axios.get("/api/v1/session/all", {
        withCredentials: true,
      });
      const data = result.data;
      return data;
    },
  });
};
