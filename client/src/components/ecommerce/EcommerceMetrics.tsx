interface EcommerceMetricsProps {
  totalStudents: number;
  totalFaculty: number;
  totalPrograms: number;
  totalSubjects: number;
}

const EcommerceMetrics: React.FC<EcommerceMetricsProps> = ({ 
  totalStudents, 
  totalFaculty, 
  totalPrograms, 
  totalSubjects 
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-3 xl:grid-cols-4 text-center items-center">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <dt className="text-sm font-semibold leading-6 dark:text-gray-400">Total Students</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight dark:text-white/90">{totalStudents}</dd>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <dt className="text-sm font-semibold leading-6 dark:text-gray-400">Total Faculty</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight dark:text-white/90">{totalFaculty}</dd>
      </div>
      {/* <!-- Metric Item End --> */}
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <dt className="text-sm font-semibold leading-6 dark:text-gray-400">Total Courses</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight dark:text-white/90">{totalPrograms}</dd>
      </div>
      {/* <!-- Metric Item End --> */}
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <dt className="text-sm font-semibold leading-6 dark:text-gray-400">Total Subjects</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight dark:text-white/90">{totalSubjects}</dd>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
}

export default EcommerceMetrics;