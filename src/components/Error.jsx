function Error({errorMessage}) {
  return (
    <div className='bg-red-600 text-lg text-center font-black mb-2 text-white p-3 rounded-md uppercase'>
        <p>{errorMessage}</p>
    </div>
  )
}

export default Error