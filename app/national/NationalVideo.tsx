"use client";

const NationalVideo = () => {
  return (
    <section className="px-8 py-12 mt-6 bg-white md:px-6" id="video">
      <iframe
        className="max-w-4xl mx-auto aspect-video"
        width="900"
        src="https://www.youtube.com/embed/d_uSXPua3SY"
        title="masifunde Changemaker Network (national NISSP version)"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </section>
  );
};
export default NationalVideo;


