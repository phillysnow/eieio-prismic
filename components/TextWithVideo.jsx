const TextWithVideo = () => {
  return (
    <div className="grid justify-center items-center text-center w-screen h-screen bg-grey">
      <div className="container gap-8 flex flex-col items-center">
        <h2>What are Tractors of the Future?</h2>
        <p>
          Each tractor is equipped with advanced AI that learns from each
          farming task, improving its performance over time.
        </p>
        <iframe
          src="https://www.youtube.com/embed/ig5Ly8MBFOQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default TextWithVideo
