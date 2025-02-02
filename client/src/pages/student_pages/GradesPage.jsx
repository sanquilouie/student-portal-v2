import Dropdown from "../../components/Dropdown"

const GradesPage = () => {
  return (
    <div className="flex items-center justify-center p-20">
      <div className="overflow-x-auto mx-auto w-4/5">
        <div className="min-w-full inline-block align-middle">
            <div className="flex space-x-6 relative  text-gray-500 focus-within:text-gray-900 mb-4">
              <Dropdown label="School Year" items={["Option 1", "Option 2", "Option 3"]} />
              <Dropdown label="Semester" items={["Option 1", "Option 2", "Option 3"]} />
              <button className="py-2.5 px-6 rounded-lg text-sm font-medium bg-blue-500 text-white">Search</button>
            </div>
            <div className="overflow-hidden ">
                <table className=" min-w-full rounded-xl">
                    <thead>
                        <tr className="bg-gray-50">
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Subject </th>
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Faculty Name </th>
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Units </th>
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Prelim </th>
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Midterm </th>
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Finals </th>
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Final Grade </th>
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Average </th>
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Status </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300 ">
                        <tr className="transition-all duration-500 hover:bg-gray-50">
                            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> Louis Vuitton</td>
                            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> 20010510 </td>
                            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Customer</td>
                            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Accessories</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
      </div>
  )
}

export default GradesPage