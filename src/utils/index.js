import { toast } from "react-toastify";
export const getdoctors = () => {
  const doctors = localStorage.getItem("appertment");
  if (doctors) return JSON.parse(doctors);
  return [];
};
export const addDoctorApartment = (doctor) => {
  const doctors = getdoctors();
  const isExist = doctors.find((p) => p.id === doctor.id);
  if (isExist) return toast.error("Doctor Already Added");
  doctors.push(doctor);
  toast.success("Doctor Added Successfully!!");

  localStorage.setItem("appertment", JSON.stringify(doctors));
};
export const removeDoctors = (id) => {
  const doctors = getdoctors();
  const remaningDoctors = doctors.filter((doctor) => doctor.id !== id);
  localStorage.setItem("appertment", JSON.stringify(remaningDoctors));
  toast.warn("Cancel Appointment");
};
