import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";
import BasicTableOne from "../tables/StudentPageTable";

export default function BasicTables() {
  return (
    <>
      <PageBreadcrumb pageTitle="Student View" />
      <div className="space-y-6">
          <BasicTableOne />
      </div>
    </>
  );
}
