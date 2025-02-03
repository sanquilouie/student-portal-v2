const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-40 h-screen overflow-hidden text-gray-400 bg-gray-900">
        <a className="flex items-center w-full px-3 mt-3" href="#">
            <span className="ml-2 text-sm font-bold">Admin</span>
        </a>
        <div className="w-full px-2 flex-grow">
            <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="ml-2 text-sm font-medium">Dashboard</span>
                </a>
            </div>
            <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="18" y="7" width="4" height="13" rx="1" stroke="currentColor" strokeLinejoin="round"/>
                    <rect x="10" y="13" width="4" height="7" rx="1" stroke="currentColor" strokeLinejoin="round"/>
                    <rect x="2" y="9" width="4" height="11" rx="1" stroke="currentColor" strokeLinejoin="round"/>
                    </svg>
                    <span className="ml-2 text-sm font-medium">Grades</span>
                </a>
            </div>
        </div>
        <a className="flex items-center justify-center w-full h-10 mt-auto bg-red-800 hover:bg-red-700 hover:text-gray-300" href="#">
            <svg width="25px" height="25px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 7.5L10.5 10.75M13.5 7.5L10.5 4.5M13.5 7.5L4 7.5M8 13.5H1.5L1.5 1.5L8 1.5" stroke="#000000"/>
            </svg>
            <span className="ml-2 text-sm font-medium">Logout</span>
        </a>
    </div>
  )
}

export default HomePage