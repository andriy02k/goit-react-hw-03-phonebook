import React from 'react'
import { Filters } from './Filter.styled'

const Filter = ({title, filter, handleFilterChange}) => {
  return (
    <Filters>
        {title}
          <input type="text" value={filter} onChange={handleFilterChange} />
    </Filters>
  )
}

export default Filter

// import React from 'react'

// const Filter = ({title, filter, handleFilterChange}) => {
//   return (
//     <label>
//         {title}
//           <input type="text" value={filter} onChange={handleFilterChange} />
//     </label>
//   )
// }

// export default Filter