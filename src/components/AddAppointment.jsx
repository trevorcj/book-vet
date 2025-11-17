import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi";

function AddAppointment({ onSendAppointment }) {
  const payload = {
    petName: "",
    ownerName: "",
    aptNotes: "",
    aptDate: "",
    aptTime: "",
  };
  const [toggleForm, setToggleForm] = useState(false);
  const [formData, setFormData] = useState(payload);

  function handleToggleForm() {
    setToggleForm((prev) => !prev);
  }

  function formDataPublish() {
    const appointmentInfo = {
      id: `A-${Date.now()}`,
      petName: formData.petName,
      ownerName: formData.ownerName,
      aptNotes: formData.aptNotes,
      aptDate: `${formData.aptDate} ${formData.aptTime}`,
    };

    onSendAppointment(appointmentInfo);
    setFormData(payload);
    setToggleForm((prev) => !prev);
  }

  return (
    <div>
      <button
        onClick={handleToggleForm}
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left cursor-pointer ${
          toggleForm ? "rounded-t-md" : "rounded-md"
        }`}>
        <div>
          <BiCalendarPlus className="inline-block align-text-top" /> Add
          Appointment
        </div>
      </button>
      {toggleForm && (
        <div className="border border-gray-300 border-r border-b border-l border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="ownerName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Owner Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                onChange={(e) =>
                  setFormData({ ...formData, ownerName: e.target.value })
                }
                value={formData.ownerName}
                type="text"
                name="ownerName"
                id="ownerName"
                className="max-w-lg block w-full border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="petName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Pet Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                onChange={(e) =>
                  setFormData({ ...formData, petName: e.target.value })
                }
                value={formData.petName}
                type="text"
                name="petName"
                id="petName"
                className="max-w-lg block w-full border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptDate"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Apt Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                onChange={(e) =>
                  setFormData({ ...formData, aptDate: e.target.value })
                }
                value={formData.aptDate}
                type="date"
                name="aptDate"
                id="aptDate"
                className="max-w-lg block w-full border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptTime"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Apt Time
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                onChange={(e) =>
                  setFormData({ ...formData, aptTime: e.target.value })
                }
                value={formData.aptTime}
                type="time"
                name="aptTime"
                id="aptTime"
                className="max-w-lg block w-full border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptNotes"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Appointment Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                onChange={(e) =>
                  setFormData({ ...formData, aptNotes: e.target.value })
                }
                value={formData.aptNotes}
                id="aptNotes"
                name="aptNotes"
                rows="3"
                className="border focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                placeholder="Detailed comments about the condition"></textarea>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={formDataPublish}
                className="ml-3 inline-flex justify-center py-2 px-4 border-transparent border text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddAppointment;
