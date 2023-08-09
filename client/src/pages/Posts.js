import { useParams } from "react-router-dom"

function Posts() {
    let { id } = useParams();
  return (
    <div>
      Post: {id}
    </div>
  )
}

export default Posts
