import { BiCalendar, BiTrash } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [appointmentList, setAppointmentList] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("petName");
  const [orderBy, setOrderBy] = useState("asc");

  const filteredAppointment = appointmentList
    .filter((appointment) => {
      return (
        appointment.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        appointment.aptNotes.toLowerCase().includes(query.toLowerCase()) ||
        appointment.petName.toLowerCase().includes(query.toLowerCase())
      );
    })
    .sort((a, b) => {
      let order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  function handleDeleteAppointment(id) {
    setAppointmentList(
      appointmentList.filter((appointment) => appointment.id !== id)
    );
    console.log("Deleted item with ID:", id);
  }

  function handleQueryChange(e) {
    setQuery(e);
  }

  function handleSendAppointment(myAppointment) {
    setAppointmentList([...appointmentList, myAppointment]);
  }

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setAppointmentList(data));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container mx-auto mt-3 tracking-tight">
      <h1 className="text-5xl tracking-tighter mb-6">
        <BiCalendar className="inline-block text-red-400 align-top" /> Your
        Appointments
      </h1>
      <AddAppointment onSendAppointment={handleSendAppointment} />
      <Search
        query={query}
        onQueryChange={handleQueryChange}
        onSortByChange={setSortBy}
        onOrderByChange={setOrderBy}
        sortBy={sortBy}
        orderBy={orderBy}
      />

      <ul className="divide-y divide-gray-200">
        {filteredAppointment.map((appointment) => (
          <AppointmentInfo
            key={appointment.ownerName}
            icon={<BiTrash />}
            appointment={appointment}
            onDeleteAppointment={handleDeleteAppointment}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
