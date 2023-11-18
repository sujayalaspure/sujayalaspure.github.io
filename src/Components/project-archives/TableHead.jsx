import styled from "styled-components"
import COLORS from "../../utils/Colors"

function TableHead({data}) {
  return (
    <THead>
      <tr>
        {data.map((item, index) => (
          <th key={index}>{item.label}</th>
        ))}
      </tr>
    </THead>
  )
}

export default TableHead

const THead = styled.thead`
  position: sticky;
  z-index: 10;
  top: 10px;
  border: 0px solid ${COLORS.slate}33;
  border-bottom-width: 1px;
  background-color: ${COLORS.navy};
  th {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: left;

    &:first-child {
      padding-left: 2rem;
    }
  }
`
