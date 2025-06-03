import TableRegister from '../../components/eficences/TableRegister';
import DataExport from '../../components/exportData/DataExport';

export default function AdminData() {
  return (
    <>
      <div>
        <DataExport />
      </div>
      <TableRegister />
    </>
  );
}
