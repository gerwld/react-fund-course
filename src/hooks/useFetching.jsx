import { useState } from "react";

export default function useFetching(callback) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setLoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return [fetching, isLoading, error];
}
