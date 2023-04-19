"use client"

const NMBVideo = () => {

  return (
    <section className="bg-white px-8 md:px-6 py-12 mt-6" id="video">
      <iframe
        className="max-w-4xl aspect-video mx-auto"
        width="900"

        src="https://www.youtube.com/embed/wMGmWxNctek"
        title="masifunde CHANGEMAKER NETWORK in Nelson Mandela Bay"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </section>
  );
};
export default NMBVideo;
