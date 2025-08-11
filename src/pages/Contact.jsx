import React from "react";

const contactList = [
  {
    name: "Dr. Ayesha Rahman",
    phone: "+8801711001101",
    email: "ayesha.rahman@example.com",
  },
  {
    name: "Dr. Imran Hossain",
    phone: "+8801711001102",
    email: "imran.hossain@example.com",
  },
  {
    name: "Dr. Nusrat Jahan",
    phone: "+8801711001103",
    email: "nusrat.jahan@example.com",
  },
  {
    name: "Dr. Farhan Ahmed",
    phone: "+8801711001104",
    email: "farhan.ahmed@example.com",
  },
  {
    name: "Dr. Tamanna Islam",
    phone: "+8801711001105",
    email: "tamanna.islam@example.com",
  },
  {
    name: "Dr. Saiful Alam",
    phone: "+8801711001106",
    email: "saiful.alam@example.com",
  },
  {
    name: "Dr. Rukhsana Karim",
    phone: "+8801711001107",
    email: "rukhsana.karim@example.com",
  },
  {
    name: "Dr. Mahfuz Rahman",
    phone: "+8801711001108",
    email: "mahfuz.rahman@example.com",
  },
  {
    name: "Dr. Mehnaz Chowdhury",
    phone: "+8801711001109",
    email: "mehnaz.chowdhury@example.com",
  },
  {
    name: "Dr. Tanvir Haque",
    phone: "+8801711001110",
    email: "tanvir.haque@example.com",
  },
  {
    name: "Dr. Sumaiya Nasrin",
    phone: "+8801711001111",
    email: "sumaiya.nasrin@example.com",
  },
  {
    name: "Dr. Kamrul Islam",
    phone: "+8801711001112",
    email: "kamrul.islam@example.com",
  },
];

const Contact = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
        📞 Doctor Contact List
      </h2>
      <div className="overflow-x-auto shadow-lg rounded-2xl bg-white">
        <table className="min-w-full table-auto border border-purple-300 rounded-2xl overflow-hidden">
          <thead className="bg-purple-100 text-purple-800">
            <tr>
              <th className="px-6 py-3 border-b border-purple-300 text-left text-sm font-semibold">
                Name
              </th>
              <th className="md:px-10 py-3 border-b border-purple-300 text-left text-sm font-semibold">
                Phone
              </th>
              <th className="md:px-10 py-3 border-b border-purple-300 text-left text-sm font-semibold">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {contactList.map((contact, index) => (
              <tr
                key={index}
                className="hover:bg-purple-50 transition duration-200"
              >
                <td className="px-6 py-4 border-b border-gray-200 text-gray-800 font-medium">
                  {contact.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-700">
                  {contact.phone}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-blue-600 underline">
                  {contact.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
