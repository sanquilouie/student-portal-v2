const BillingPage = () => {
  return (
    <div className="flex items-center justify-center p-20">
      <div className="mx-auto w-4/5">
        <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/3">
                <div className="mb-5">
                    <label htmlFor="studentname" className="mb-3 block text-base font-bold text-[#07074D]">
                        Student Name
                    </label>
                    <input type="text" name="studentname" id="studentname" placeholder="Student Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
            </div>
            <div className="w-full px-3 sm:w-1/3">
                <div className="mb-5">
                    <label htmlFor="yearlevel" className="mb-3 block text-base font-bold text-[#07074D]">
                        Year Level
                    </label>
                    <input type="text" name="yearlevel" id="yearlevel" placeholder="Year Level"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
            </div>
            <div className="w-full px-3 sm:w-1/3">
                <div className="mb-5">
                    <label htmlFor="section" className="mb-3 block text-base font-bold text-[#07074D]">
                        Section
                    </label>
                    <input type="text" name="section" id="section" placeholder="Section"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
            </div>
        </div>
        <div className="border border-gray-300 shadow-sm rounded-lg overflow-hidden mx-auto mt-8 bg-white">
          <div className="flex w-full">
              {/* First Table */}
              <table className="w-1/2 text-md leading-5 border-collapse border-r border-gray-300">
                <tbody>
                  <tr>
                    <td className="py-3 px-4 text-left font-bold text-gray-600">TUITION FEE</td>
                    <td className="py-3 px-4 text-left">240</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left font-bold text-gray-600">LEARNING AND INSTRUCTIONAL</td>
                    <td className="py-3 px-4 text-left">12g</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left font-bold text-gray-600">REGISTRATION FEE</td>
                    <td className="py-3 px-4 text-left">3.5g</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left font-bold text-gray-600">COMPUTER PROCESSING FEE</td>
                    <td className="py-3 px-4 text-left">0g</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left font-bold text-gray-600">GUIDANCE AND COUNSELING</td>
                    <td className="py-3 px-4 text-left">0g</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left font-bold text-gray-600">SCHOOL ID FEE</td>
                    <td className="py-3 px-4 text-left">0g</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left font-bold text-gray-600">STUDENT HANDBOOK</td>
                    <td className="py-3 px-4 text-left">0g</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left font-bold text-gray-600">SCHOOL PUBLICATION</td>
                    <td className="py-3 px-4 text-left">0g</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left font-bold text-gray-600">INSURANCE</td>
                    <td className="py-3 px-4 text-left">0g</td>
                  </tr>
                </tbody>
              </table>

              {/* Second Table */}
              <table className="w-1/2 text-sm leading-5 border-collapse">
                <tbody>
                  <tr>
                    <td className="py-3 px-4 text-left font-bold text-gray-600">TOTAL ASSESSMENT</td>
                    <td className="py-3 px-4 text-left">45mg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left font-bold text-gray-600">(Less) Discount/Scholar</td>
                    <td className="py-3 px-4 text-left">430mg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left font-bold text-gray-600">NET ASSESSED</td>
                    <td className="py-3 px-4 text-left">19g</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left font-bold text-gray-600">(Less) Cash/Cheque Payment</td>
                    <td className="py-3 px-4 text-left">3g</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left font-bold text-gray-600">OUTSTANDING BALANCE</td>
                    <td className="py-3 px-4 text-left">3g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </div>
  )
}

export default BillingPage