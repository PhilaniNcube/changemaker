"use client"

const NMBVideo = () => {

  return (
    <section className="bg-white px-8 md:px-6 mt-6">
      <video
        className="aspect-video max-w-4xl mx-auto w-full"
        src="https://youtu.be/wMGmWxNctek"
        autoPlay={true}
        controls
      >

      </video>
    </section>
  );
};
export default NMBVideo;
