import styled from "styled-components"
import TableHead from "./TableHead"
import COLORS from "../../utils/Colors"
import TableRow from "./TableRow"

function ArchiveTable({tableHead, tableData}) {
  return (
    <Table>
      <TableHead data={tableHead} />
      <tbody>
        {tableData
          .filter((item) => !item.isFeatured)
          .map((project, index) => (
            <TableRow tableHead={tableHead} key={index} project={project} />
          ))}
      </tbody>
    </Table>
  )
}

export default ArchiveTable

const Table = styled.table`
  margin-top: 3rem;
  width: 100%;
  border-collapse: collapse;
  color: ${COLORS.lightestSlate};
  /* table-layout: fixed; */
  overflow: auto;
`
