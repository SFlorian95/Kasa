import './Lodging.scss'
import { useParams } from 'react-router-dom'
import { useGet } from '../utils/hook'

const Lodging = () => {

    const { id } = useParams()
    const findById = {
      method: 'find',
      callback: (item) => item.id === id,
    }
    const { data, isLoading, error } = useGet('/lodgings.json', findById)

    if (error) {
        return <span>error {error}</span>
    }

    return (
        <div>
            {data.title}
        </div>
    )
}
export default Lodging