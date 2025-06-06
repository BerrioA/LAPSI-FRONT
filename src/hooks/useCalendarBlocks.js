import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useCalendarBlocks = (roomId, currentDate, selectedDuration) => {
  const [allBlocks, setAllBlocks] = useState([]);
  const [filteredBlocks, setFilteredBlocks] = useState([]);

  const fetchBlocks = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/lapsi/v1/rooms/${roomId}`,
        { params: { date: currentDate } }
      );
      setAllBlocks(data);
    } catch (error) {
      console.error("Error fetching room blocks:", error);
      setAllBlocks([]);
    }
  }, [roomId, currentDate]);

  const filterByDuration = useCallback(() => {
    if (selectedDuration === null) {
      setFilteredBlocks(allBlocks);
      return;
    }

    const margin = 0.3;
    const filtered = allBlocks.filter(({ start_time, end_time }) => {
      const start = moment(start_time, "HH:mm:ss");
      const end = moment(end_time, "HH:mm:ss");
      const hours = moment.duration(end.diff(start)).asHours();
      return (
        hours >= selectedDuration - margin && hours <= selectedDuration + margin
      );
    });

    setFilteredBlocks(filtered);
  }, [allBlocks, selectedDuration]);

  useEffect(() => {
    if (roomId) fetchBlocks();
  }, [roomId, currentDate, fetchBlocks]);

  useEffect(() => {
    filterByDuration();
  }, [allBlocks, selectedDuration, filterByDuration]);

  return { filteredBlocks };
};

export default useCalendarBlocks;
