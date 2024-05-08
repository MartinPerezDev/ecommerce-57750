import { useState } from "react"

const useLoading = () =>{
  const [loading, setLoading] = useState(false)

  const showLoading = () => {
    setLoading(true)
  }

  const hiddenLoading = () => {
    setLoading(false)
  }

  const loadingScreen = <div> Cargando... </div>

  return { loading, showLoading, hiddenLoading, loadingScreen }
}

export default useLoading